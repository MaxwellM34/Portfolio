const { execFileSync } = require("node:child_process");
const path = require("node:path");

const repoPath = process.cwd();

function parsePids(lines) {
  return lines
    .split(/\r?\n/)
    .map((line) => Number.parseInt(line.trim(), 10))
    .filter((pid) => Number.isInteger(pid) && pid > 0 && pid !== process.pid);
}

function getWindowsPids() {
  const psScript = `
$repoPath = '${repoPath.replace(/'/g, "''")}';
Get-CimInstance Win32_Process |
  Where-Object {
    $_.Name -eq 'node.exe' -and
    $_.CommandLine -like '*next\\dist\\server\\lib\\start-server.js*' -and
    $_.CommandLine -like ('*' + $repoPath + '*')
  } |
  Select-Object -ExpandProperty ProcessId
`;

  try {
    const output = execFileSync(
      "powershell.exe",
      ["-NoProfile", "-Command", psScript],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }
    );
    return parsePids(output);
  } catch {
    return [];
  }
}

function getPosixPids() {
  try {
    const output = execFileSync("ps", ["-ax", "-o", "pid=,command="], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });

    return output
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const match = line.match(/^(\d+)\s+(.*)$/);
        if (!match) return null;
        const pid = Number.parseInt(match[1], 10);
        const command = match[2];
        return { pid, command };
      })
      .filter(
        (entry) =>
          entry &&
          entry.pid !== process.pid &&
          entry.command.includes("next/dist/server/lib/start-server.js") &&
          entry.command.includes(
            path.sep === "\\" ? repoPath.replace(/\\/g, "\\\\") : repoPath
          )
      )
      .map((entry) => entry.pid);
  } catch {
    return [];
  }
}

function killPids(pids) {
  for (const pid of pids) {
    try {
      process.kill(pid, "SIGKILL");
      process.stdout.write(`Killed stale Next dev process ${pid}\n`);
    } catch {
      // Ignore if process already exited.
    }
  }
}

const pids =
  process.platform === "win32" ? getWindowsPids() : getPosixPids();

if (pids.length > 0) {
  killPids(pids);
}
