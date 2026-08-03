"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

// iOS refuses to decode an unbounded number of videos at once and silently
// fails the extras, so playback is rationed to the clips nearest the viewport
// centre rather than letting every card on the page compete.
const MAX_CONCURRENT = 4;

const controllers = new Set();
let frameQueued = false;
let listenersBound = false;

function runSchedule() {
  const wanted = [];

  controllers.forEach((controller) => {
    if (controller.wants()) {
      wanted.push(controller);
    } else {
      controller.stop();
    }
  });

  wanted.sort((a, b) => a.priority() - b.priority());
  wanted.forEach((controller, position) => {
    if (position < MAX_CONCURRENT) {
      controller.start();
    } else {
      controller.stop();
    }
  });
}

function requestSchedule() {
  if (frameQueued || typeof requestAnimationFrame === "undefined") {
    return;
  }

  frameQueued = true;
  requestAnimationFrame(() => {
    frameQueued = false;
    runSchedule();
  });
}

function bindGlobalListeners() {
  if (listenersBound || typeof window === "undefined") {
    return;
  }

  listenersBound = true;
  // A browser that refused autoplay (Low Power Mode, data saver) will allow it
  // after any user gesture, so quietly retry on the first sign of one instead
  // of ever putting a play button in front of the visitor.
  ["touchstart", "touchend", "pointerdown", "click", "keydown"].forEach((name) => {
    document.addEventListener(name, requestSchedule, { passive: true });
  });
  ["scroll", "resize", "orientationchange", "pageshow", "focus"].forEach((name) => {
    window.addEventListener(name, requestSchedule, { passive: true });
  });
  document.addEventListener("visibilitychange", requestSchedule);
}

export default function AutoVideo({
  src,
  sources,
  className,
  poster,
  controls = false,
  loop,
  priorityHint = 0,
  decorative = false,
  onClick,
}) {
  const list = (Array.isArray(sources) ? sources : [src]).filter(Boolean);
  const key = list.join("|");
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef(null);
  const visibleRef = useRef(false);
  const controlsRef = useRef(controls);
  const priorityHintRef = useRef(priorityHint);

  controlsRef.current = controls;
  priorityHintRef.current = priorityHint;

  useEffect(() => {
    setActiveIndex(0);
  }, [key]);

  useEffect(() => {
    requestSchedule();
  }, [priorityHint]);

  const start = useCallback(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    // React sets `muted` as a property, and a single unmuted frame is enough
    // for iOS to refuse the whole thing — pin it on the element before playing.
    if (!video.dataset.userUnmuted) {
      video.muted = true;
      video.defaultMuted = true;
    }

    if (!video.paused) {
      return;
    }

    const attempt = video.play();
    if (attempt && typeof attempt.catch === "function") {
      // Refusal is not an error worth surfacing; the next gesture retries it.
      attempt.catch(() => {});
    }
  }, []);

  const stop = useCallback(() => {
    const video = videoRef.current;
    // Never yank a video the visitor is deliberately watching in the lightbox.
    if (video && !video.paused && !controlsRef.current) {
      video.pause();
    }
  }, []);

  useEffect(() => {
    const controller = {
      wants: () => visibleRef.current,
      priority: () => {
        const video = videoRef.current;
        if (!video) {
          return Number.POSITIVE_INFINITY;
        }
        if (controlsRef.current) {
          return Number.NEGATIVE_INFINITY; // the lightbox always wins a slot
        }
        const rect = video.getBoundingClientRect();
        const viewportHeight = window.innerHeight || rect.bottom;
        // Distance from the viewport centre, nudged by the caller's hint so
        // stacked cards that share a position still resolve in a stable order.
        return (
          Math.abs(rect.top + rect.height / 2 - viewportHeight / 2) + priorityHintRef.current
        );
      },
      start,
      stop,
    };

    controllers.add(controller);
    bindGlobalListeners();

    return () => {
      controllers.delete(controller);
      requestSchedule();
    };
  }, [start, stop]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return undefined;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    if (typeof IntersectionObserver === "undefined") {
      visibleRef.current = true;
      requestSchedule();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRef.current = entry.isIntersecting;
          // Only buffer in earnest once the clip is near the viewport; until
          // then `metadata` keeps a phone from pulling every video on the page.
          if (entry.isIntersecting && video.preload !== "auto") {
            video.preload = "auto";
          }
        });
        requestSchedule();
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [key]);

  if (!list.length) {
    return null;
  }

  return (
    <video
      ref={videoRef}
      className={className}
      src={list[activeIndex]}
      poster={poster}
      controls={controls}
      autoPlay
      muted
      playsInline
      preload="metadata"
      loop={loop ?? list.length === 1}
      disablePictureInPicture
      aria-hidden={decorative ? "true" : undefined}
      onLoadedMetadata={requestSchedule}
      onLoadedData={requestSchedule}
      onCanPlay={requestSchedule}
      onStalled={requestSchedule}
      onVolumeChange={(event) => {
        if (!event.currentTarget.muted) {
          event.currentTarget.dataset.userUnmuted = "1";
        }
      }}
      onEnded={() => {
        if (list.length > 1) {
          setActiveIndex((index) => (index + 1) % list.length);
        }
      }}
      onClick={onClick}
    />
  );
}
