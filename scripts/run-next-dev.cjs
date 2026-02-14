const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");

const repoPath = process.cwd();
const lockDir = path.join(repoPath, ".next-dev");
const lockPath = path.join(lockDir, "dev-server.lock");
const webpackCachePath = path.join(lockDir, "cache", "webpack");

function isPidAlive(pid) {
  if (!Number.isInteger(pid) || pid <= 0) {
    return false;
  }

  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function readLock() {
  try {
    const raw = fs.readFileSync(lockPath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function writeLock() {
  const payload = JSON.stringify(
    {
      pid: process.pid,
      repoPath,
      startedAt: new Date().toISOString(),
    },
    null,
    2
  );

  fs.mkdirSync(lockDir, { recursive: true });

  try {
    const fd = fs.openSync(lockPath, "wx");
    fs.writeFileSync(fd, `${payload}\n`, "utf8");
    fs.closeSync(fd);
    return;
  } catch (error) {
    if (!error || error.code !== "EEXIST") {
      throw error;
    }
  }

  const existing = readLock();
  if (existing && isPidAlive(existing.pid)) {
    process.stderr.write(
      `Next dev is already running for this repo (pid ${existing.pid}).\n` +
        "Stop it first, or run `pnpm run dev:reset` if it is stale.\n"
    );
    process.exit(1);
  }

  fs.rmSync(lockPath, { force: true });
  const fd = fs.openSync(lockPath, "wx");
  fs.writeFileSync(fd, `${payload}\n`, "utf8");
  fs.closeSync(fd);
}

function removeLock() {
  const existing = readLock();
  if (existing && existing.pid !== process.pid) {
    return;
  }

  fs.rmSync(lockPath, { force: true });
}

function resetWebpackCache() {
  try {
    fs.rmSync(webpackCachePath, { recursive: true, force: true });
  } catch {
    // Ignore cache cleanup failures.
  }
}

function run() {
  writeLock();
  resetWebpackCache();

  let nextCliPath;
  try {
    nextCliPath = require.resolve("next/dist/bin/next");
  } catch {
    removeLock();
    process.stderr.write(
      "Unable to resolve `next/dist/bin/next`. Run `pnpm install` and try again.\n"
    );
    process.exit(1);
  }

  const child = spawn(process.execPath, [nextCliPath, "dev"], {
    cwd: repoPath,
    env: process.env,
    stdio: "inherit",
  });

  let exited = false;

  const forwardSignal = (signal) => {
    if (exited) {
      return;
    }

    try {
      child.kill(signal);
    } catch {
      // Process may already be gone.
    }
  };

  process.on("SIGINT", () => forwardSignal("SIGINT"));
  process.on("SIGTERM", () => forwardSignal("SIGTERM"));

  child.on("error", (error) => {
    removeLock();
    process.stderr.write(`Failed to start Next dev server: ${error.message}\n`);
    process.exit(1);
  });

  child.on("exit", (code) => {
    exited = true;
    removeLock();
    process.exit(code ?? 1);
  });
}

run();
