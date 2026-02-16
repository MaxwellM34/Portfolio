"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  education,
  experience,
  projects,
  resume,
  site,
  visibleProjects,
} from "../data/portfolio";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import ProjectCard from "../components/ProjectCard";

const RELEASE_FREEZE_MS = 1000;
const RELEASE_RAMP_MS = 2800;
const NAV_LOCK_MS = 1800;
const TOUCH_RELEASE_MS = 5000;
const DEFAULT_PHONE_FOCUS_SLUG = "reverse-engineering-sewing-machine";
const PHONE_DECK_MAX_SPREAD_FACTOR = 1.9;
const PHONE_DECK_STACK_SCROLL_DISTANCE = 320;
const PHONE_DECK_TRANSITION_MS = 900;

function buildOrbitSlots(total, startRadius, ringGap, minSpacing) {
  const slots = [];

  if (total <= 0) {
    return slots;
  }

  let remaining = total;
  let offset = 0;
  let ring = 0;

  while (remaining > 0) {
    const radius = startRadius + ring * ringGap;
    const circumference = Math.PI * 2 * radius;
    const capacity = Math.max(1, Math.floor(circumference / Math.max(1, minSpacing)));
    const count = Math.min(remaining, capacity);

    for (let i = 0; i < count; i += 1) {
      const jitter = (i % 2 === 0 ? -1 : 1) * 0.06 + ring * 0.17;
      slots[offset + i] = {
        ring,
        radius,
        count,
        angleOffset: (Math.PI * 2 * i) / count + jitter,
      };
    }

    remaining -= count;
    offset += count;
    ring += 1;
  }

  return slots;
}

export default function Home() {
  const heroProjects = visibleProjects;
  const hiddenProjectCount = Math.max(0, projects.length - heroProjects.length);
  const [orbitTime, setOrbitTime] = useState(0);
  const [isCompactOrbit, setIsCompactOrbit] = useState(false);
  const [isTouchInput, setIsTouchInput] = useState(false);
  const isPhoneOrbit = isCompactOrbit && isTouchInput;
  const [phoneDeckStackProgress, setPhoneDeckStackProgress] = useState(0);
  const [hoverLock, setHoverLock] = useState(null);
  const [contentRightInStackX, setContentRightInStackX] = useState(null);
  const contentRef = useRef(null);
  const stackRef = useRef(null);
  const hoverLockRef = useRef(null);
  const navigationLockRef = useRef(false);
  const navigationTimeoutRef = useRef(null);
  const touchReleaseTimeoutRef = useRef(null);
  const activeNavigationRef = useRef("");
  const releaseMotionRef = useRef({ freezeUntil: 0, rampUntil: 0 });
  const orbitPhaseRef = useRef(0);
  const lastFrameTimeRef = useRef(null);
  const phoneDeckStackStartScrollRef = useRef(null);
  const defaultPhoneFocusIndex = useMemo(() => {
    const defaultIndex = heroProjects.findIndex(
      (project) => project.slug === DEFAULT_PHONE_FOCUS_SLUG
    );
    return defaultIndex >= 0 ? defaultIndex : 0;
  }, [heroProjects]);
  const phoneDeckAverageSpreadYOffset = useMemo(() => {
    const total = heroProjects.length;
    if (total <= 0) {
      return 0;
    }

    const spreadFactor = PHONE_DECK_MAX_SPREAD_FACTOR;
    const verticalStep = 14 + (spreadFactor - 1) * 11;
    const centerCompensation = (spreadFactor - 1) * Math.min(12, total * 1.4);
    const focusedIndex = 0;
    let ySum = 0;

    for (let i = 0; i < total; i += 1) {
      const clockwiseDistance = (i - focusedIndex + total) % total;
      const counterClockwiseDistance = clockwiseDistance - total;
      const offset =
        Math.abs(counterClockwiseDistance) < Math.abs(clockwiseDistance)
          ? counterClockwiseDistance
          : clockwiseDistance;
      const spread = Math.abs(offset);

      if (spread === 0) {
        ySum += -16 - centerCompensation * 0.25;
      } else {
        ySum += spread * verticalStep - centerCompensation;
      }
    }

    return ySum / total;
  }, [heroProjects.length]);

  useEffect(
    () => () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }

      if (touchReleaseTimeoutRef.current) {
        clearTimeout(touchReleaseTimeoutRef.current);
      }
    },
    []
  );

  useEffect(() => {
    const stackNode = stackRef.current;
    const contentNode = contentRef.current;
    if (!stackNode || !contentNode) {
      return undefined;
    }

    const updateContentRightBound = () => {
      const stackRect = stackNode.getBoundingClientRect();
      const contentRect = contentNode.getBoundingClientRect();
      const stackCenterX = stackRect.left + stackRect.width / 2;
      setContentRightInStackX(contentRect.right - stackCenterX);
    };

    updateContentRightBound();
    window.addEventListener("resize", updateContentRightBound);

    if (typeof ResizeObserver === "undefined") {
      return () => window.removeEventListener("resize", updateContentRightBound);
    }

    const observer = new ResizeObserver(() => {
      updateContentRightBound();
    });

    observer.observe(stackNode);
    observer.observe(contentNode);

    return () => {
      window.removeEventListener("resize", updateContentRightBound);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const onResize = () => setIsCompactOrbit(window.innerWidth <= 980);
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const updateInputMode = () => setIsTouchInput(mediaQuery.matches);
    updateInputMode();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateInputMode);
      return () => mediaQuery.removeEventListener("change", updateInputMode);
    }

    mediaQuery.addListener(updateInputMode);
    return () => mediaQuery.removeListener(updateInputMode);
  }, []);

  useEffect(() => {
    setHoverLock((current) => {
      if (!current) {
        return current;
      }

      return current.index < heroProjects.length ? current : null;
    });
  }, [heroProjects.length]);

  useEffect(() => {
    hoverLockRef.current = hoverLock;
  }, [hoverLock]);

  useEffect(() => {
    if (heroProjects.length <= 1 || isPhoneOrbit) {
      orbitPhaseRef.current = 0;
      lastFrameTimeRef.current = null;
      setOrbitTime(0);
      return undefined;
    }

    let animationFrame;
    const animate = (now) => {
      if (lastFrameTimeRef.current === null) {
        lastFrameTimeRef.current = now;
      }

      const dt = Math.min(64, now - lastFrameTimeRef.current);
      lastFrameTimeRef.current = now;

      let timeScale = 1;
      const releaseMotion = releaseMotionRef.current;

      if (navigationLockRef.current) {
        timeScale = 0;
      } else if (hoverLockRef.current) {
        timeScale = isCompactOrbit ? 0.58 : 0.5;
      } else if (releaseMotion.rampUntil > now) {
        if (now < releaseMotion.freezeUntil) {
          timeScale = 0;
        } else {
          const progress =
            (now - releaseMotion.freezeUntil) /
            Math.max(1, releaseMotion.rampUntil - releaseMotion.freezeUntil);
          const easedProgress = progress * progress * (3 - 2 * progress);
          timeScale = 0.08 + easedProgress * 0.92;
        }
      }

      orbitPhaseRef.current += dt * timeScale;
      setOrbitTime(orbitPhaseRef.current);
      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      lastFrameTimeRef.current = null;
    };
  }, [heroProjects.length, isCompactOrbit, isPhoneOrbit]);

  const orbitConfig = useMemo(() => {
    const total = heroProjects.length;
    const sizePenalty = Math.max(0, total - (isCompactOrbit ? 2 : 3));
    const cardWidth = Math.round(
      Math.max(isCompactOrbit ? 220 : 260, (isCompactOrbit ? 292 : 360) - sizePenalty * 12)
    );
    const crowdScale = Math.max(isCompactOrbit ? 0.78 : 0.72, 1 - sizePenalty * 0.05);
    const minSpacing = cardWidth * (isCompactOrbit ? 0.72 : 0.74);
    const baseRadius = isCompactOrbit ? 120 : 176;
    const ringGap = Math.max(minSpacing * 0.88, isCompactOrbit ? 150 : 190);
    const verticalScale = isCompactOrbit ? 0.82 : 0.76;
    const slots = buildOrbitSlots(total, baseRadius, ringGap, minSpacing);
    const maxRing = slots.reduce((max, slot) => Math.max(max, slot.ring), 0);
    const stackHeight = isPhoneOrbit
      ? 360
      : (isCompactOrbit ? 350 : 470) + maxRing * (isCompactOrbit ? 104 : 128);

    return {
      cardWidth,
      crowdScale,
      minSpacing,
      ringGap,
      verticalScale,
      slots,
      maxRing,
      stackHeight,
    };
  }, [heroProjects.length, isCompactOrbit, isPhoneOrbit]);

  const leftOrbitPadding = isCompactOrbit ? 12 : 20;
  const leftOrbitEdgeBound =
    !isCompactOrbit && typeof contentRightInStackX === "number"
      ? contentRightInStackX + leftOrbitPadding
      : Number.NEGATIVE_INFINITY;

  const normalOrbitStates = useMemo(() => {
    if (heroProjects.length === 0) {
      return [];
    }

    if (isPhoneOrbit) {
      const centerIndex = (heroProjects.length - 1) / 2;
      const xSpread = Math.min(32, orbitConfig.cardWidth * 0.08);
      const ySpread = 18;
      const baseScale = Math.min(0.9, orbitConfig.crowdScale * 0.95);

      return heroProjects.map((_, index) => {
        const offset = index - centerIndex;
        const spread = Math.abs(offset);
        const depth = Math.max(0.2, 0.82 - spread * 0.12);

        return {
          depth,
          x: offset * xSpread,
          y: offset * ySpread,
          z: -88 - spread * 8,
          scale: Math.max(0.68, baseScale - spread * 0.05),
          tilt: offset * -2.4,
        };
      });
    }

    const baseSpeed = isCompactOrbit ? 0.00016 : 0.00012;
    const ringLift = (orbitConfig.maxRing * 8) / 2;

    return orbitConfig.slots.map((slot) => {
      const speed = baseSpeed / (1 + slot.ring * 0.16);
      const angle = orbitTime * speed + slot.angleOffset;
      const depth = (Math.cos(angle) + 1) / 2;
      const scale = orbitConfig.crowdScale * (0.84 + depth * 0.2 - slot.ring * 0.02);
      const minCenterX = Number.isFinite(leftOrbitEdgeBound)
        ? leftOrbitEdgeBound + (orbitConfig.cardWidth * scale) / 2
        : Number.NEGATIVE_INFINITY;
      const x = Math.max(minCenterX, Math.cos(angle) * slot.radius);
      const y = Math.sin(angle) * slot.radius * orbitConfig.verticalScale + slot.ring * 8 - ringLift;
      const z = -78 + depth * (isCompactOrbit ? 110 : 148) - slot.ring * 8;
      const tilt = Math.sin(angle) * (slot.ring === 0 ? 5 : 3);

      return { depth, x, y, z, scale, tilt };
    });
  }, [
    heroProjects.length,
    isCompactOrbit,
    isPhoneOrbit,
    leftOrbitEdgeBound,
    orbitConfig,
    orbitTime,
  ]);

  useEffect(() => {
    if (!isPhoneOrbit || heroProjects.length === 0) {
      return;
    }

    if (touchReleaseTimeoutRef.current) {
      clearTimeout(touchReleaseTimeoutRef.current);
      touchReleaseTimeoutRef.current = null;
    }

    setHoverLock((current) => {
      if (current && current.index < heroProjects.length) {
        return current;
      }

      const defaultOrbit = normalOrbitStates[defaultPhoneFocusIndex];
      if (!defaultOrbit) {
        return current;
      }

      releaseMotionRef.current = { freezeUntil: 0, rampUntil: 0 };

      return {
        index: defaultPhoneFocusIndex,
        x: defaultOrbit.x,
        y: defaultOrbit.y,
        z: defaultOrbit.z,
        scale: defaultOrbit.scale,
        tilt: defaultOrbit.tilt,
      };
    });
  }, [defaultPhoneFocusIndex, heroProjects.length, isPhoneOrbit, normalOrbitStates]);

  useEffect(() => {
    if (!isPhoneOrbit) {
      phoneDeckStackStartScrollRef.current = null;
      setPhoneDeckStackProgress((current) => (current !== 0 ? 0 : current));
      return undefined;
    }

    let animationFrame = null;

    const updateScrollProgress = () => {
      animationFrame = null;

      const stackNode = stackRef.current;
      if (!stackNode) {
        return;
      }

      const stackRect = stackNode.getBoundingClientRect();
      const averageCardCenterY =
        stackRect.top + stackRect.height / 2 + phoneDeckAverageSpreadYOffset;
      const viewportCenterY = window.innerHeight / 2;

      if (averageCardCenterY > viewportCenterY) {
        phoneDeckStackStartScrollRef.current = null;
        setPhoneDeckStackProgress((current) => (current !== 0 ? 0 : current));
        return;
      }

      if (phoneDeckStackStartScrollRef.current === null) {
        phoneDeckStackStartScrollRef.current = window.scrollY;
      }

      const distancePastCenter = Math.max(
        0,
        window.scrollY - phoneDeckStackStartScrollRef.current
      );
      const rawProgress = Math.min(1, distancePastCenter / PHONE_DECK_STACK_SCROLL_DISTANCE);
      const easedProgress = rawProgress * rawProgress * (3 - 2 * rawProgress);

      setPhoneDeckStackProgress((current) =>
        Math.abs(current - easedProgress) > 0.002 ? easedProgress : current
      );
    };

    const scheduleUpdate = () => {
      if (animationFrame !== null) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateScrollProgress);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [heroProjects.length, isPhoneOrbit, phoneDeckAverageSpreadYOffset]);

  const orbitStates = useMemo(() => {
    if (isPhoneOrbit) {
      const focusedIndex =
        hoverLock && hoverLock.index < heroProjects.length
          ? hoverLock.index
          : defaultPhoneFocusIndex;

      if (focusedIndex < 0 || focusedIndex >= heroProjects.length) {
        return normalOrbitStates;
      }

      const total = heroProjects.length;
      const spreadFactor =
        1 + (1 - phoneDeckStackProgress) * (PHONE_DECK_MAX_SPREAD_FACTOR - 1);
      const horizontalStep = Math.min(34, orbitConfig.cardWidth * 0.12) * spreadFactor;
      const verticalStep = 14 + (spreadFactor - 1) * 11;
      const zStep = 18 + (spreadFactor - 1) * 15;
      const tiltStep = 4.6 + (spreadFactor - 1) * 2.6;
      const centerCompensation = (spreadFactor - 1) * Math.min(12, total * 1.4);

      return normalOrbitStates.map((orbit, index) => {
        const clockwiseDistance = (index - focusedIndex + total) % total;
        const counterClockwiseDistance = clockwiseDistance - total;
        const offset =
          Math.abs(counterClockwiseDistance) < Math.abs(clockwiseDistance)
            ? counterClockwiseDistance
            : clockwiseDistance;
        const spread = Math.abs(offset);

        if (spread === 0) {
          return {
            depth: 1,
            x: 0,
            y: -16 - centerCompensation * 0.25,
            z: 44,
            scale: Math.min(1.03, orbit.scale * 1.12),
            tilt: 0,
          };
        }

        const direction = Math.sign(offset);
        const x = direction * horizontalStep * spread;
        const y = spread * verticalStep - centerCompensation;
        const depth = Math.max(0.05, 0.54 - spread * 0.11);
        const z = -76 - spread * zStep;

        return {
          depth,
          x,
          y,
          z,
          scale: Math.max(0.58, orbit.scale - spread * 0.065),
          tilt: -offset * tiltStep,
        };
      });
    }

    if (!hoverLock || hoverLock.index >= heroProjects.length) {
      return normalOrbitStates;
    }

    const states = normalOrbitStates.map((orbit) => ({ ...orbit }));
    const lockedIndex = hoverLock.index;
    const otherIndices = [];

    for (let i = 0; i < heroProjects.length; i += 1) {
      if (i !== lockedIndex) {
        otherIndices.push(i);
      }
    }

    const swirlSlots = buildOrbitSlots(
      otherIndices.length,
      orbitConfig.minSpacing * 0.9,
      orbitConfig.ringGap * 0.9,
      orbitConfig.minSpacing * 0.92
    );

    const swirlSpeed = isCompactOrbit ? 0.00024 : 0.00019;
    const swirlVerticalScale = isCompactOrbit ? 0.9 : 0.82;

    const lockedScale = hoverLock.scale * 1.02;
    const lockedMinCenterX = Number.isFinite(leftOrbitEdgeBound)
      ? leftOrbitEdgeBound + (orbitConfig.cardWidth * lockedScale) / 2
      : Number.NEGATIVE_INFINITY;

    states[lockedIndex] = {
      depth: 1,
      x: Math.max(lockedMinCenterX, hoverLock.x),
      y: hoverLock.y,
      z: Math.max(24, hoverLock.z),
      scale: lockedScale,
      tilt: hoverLock.tilt * 0.15,
    };

    otherIndices.forEach((cardIndex, order) => {
      const slot = swirlSlots[order];
      const speed = swirlSpeed / (1 + slot.ring * 0.15);
      const angle = orbitTime * speed + slot.angleOffset;
      const radiusScale = 0.84 + 0.16 * Math.sin(angle * 1.5 + slot.ring * 0.7);
      const radius = slot.radius * radiusScale;
      const waveX = Math.cos(angle * 0.48 + order * 0.35) * 11;
      const waveY = Math.sin(angle * 0.62 + order * 0.55) * 8;
      const scale = orbitConfig.crowdScale * Math.max(0.74, 0.9 - slot.ring * 0.08);
      const minCenterX = Number.isFinite(leftOrbitEdgeBound)
        ? leftOrbitEdgeBound + (orbitConfig.cardWidth * scale) / 2
        : Number.NEGATIVE_INFINITY;
      const x = Math.max(minCenterX, hoverLock.x + Math.cos(angle) * radius + waveX);
      const y =
        hoverLock.y +
        Math.sin(angle * 1.1 + slot.ring * 0.35) * radius * swirlVerticalScale +
        waveY;
      const depthWave = Math.sin(angle * 1.32 + order * 0.68);

      states[cardIndex] = {
        depth: 0.44 - slot.ring * 0.07 + (depthWave + 1) * 0.05,
        x,
        y,
        z: -46 - slot.ring * 14 + depthWave * 18,
        scale,
        tilt: Math.sin(angle * 0.9 + order * 0.4) * 2.8 + Math.cos(angle * 0.45) * 1.4,
      };
    });

    return states;
  }, [
    heroProjects.length,
    hoverLock,
    defaultPhoneFocusIndex,
    phoneDeckStackProgress,
    isCompactOrbit,
    isPhoneOrbit,
    leftOrbitEdgeBound,
    normalOrbitStates,
    orbitConfig,
    orbitTime,
  ]);

  const depthZIndexMap = useMemo(() => {
    const ranking = orbitStates
      .map((orbit, index) => ({ index, depth: orbit.depth }))
      .sort((a, b) => a.depth - b.depth);

    const zIndexMap = new Array(orbitStates.length).fill(1);
    ranking.forEach((entry, rank) => {
      zIndexMap[entry.index] = 40 + rank;
    });

    if (hoverLock && hoverLock.index < zIndexMap.length) {
      zIndexMap[hoverLock.index] = 200;
    }

    return zIndexMap;
  }, [hoverLock, orbitStates]);

  const frontCardIndex = useMemo(() => {
    if (hoverLock && hoverLock.index < orbitStates.length) {
      return hoverLock.index;
    }

    if (orbitStates.length === 0) {
      return -1;
    }

    let frontIndex = 0;
    for (let i = 1; i < orbitStates.length; i += 1) {
      if (orbitStates[i].depth > orbitStates[frontIndex].depth) {
        frontIndex = i;
      }
    }

    return frontIndex;
  }, [hoverLock, orbitStates]);

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const cssFixed = (value, digits = 6) => Number(value).toFixed(digits);
  const isModifiedClick = (event) =>
    event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  const isPrimaryPlainClick = (event) => event.button === 0 && !isModifiedClick(event);

  const beginProjectNavigation = (slug) => {
    if (!slug || activeNavigationRef.current) {
      return;
    }

    activeNavigationRef.current = slug;
    navigationLockRef.current = true;

    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }

    navigationTimeoutRef.current = setTimeout(() => {
      navigationLockRef.current = false;
      activeNavigationRef.current = "";
    }, NAV_LOCK_MS);

    window.location.assign(`/work/${slug}`);
  };

  const getEventClientPoint = (event) => {
    if (!event) {
      return null;
    }

    if (typeof event.clientX === "number" && typeof event.clientY === "number") {
      return { x: event.clientX, y: event.clientY };
    }

    if (event.nativeEvent) {
      const native = event.nativeEvent;

      if (typeof native.clientX === "number" && typeof native.clientY === "number") {
        return { x: native.clientX, y: native.clientY };
      }

      if (native.touches && native.touches.length > 0) {
        return { x: native.touches[0].clientX, y: native.touches[0].clientY };
      }

      if (native.changedTouches && native.changedTouches.length > 0) {
        return { x: native.changedTouches[0].clientX, y: native.changedTouches[0].clientY };
      }
    }

    if (event.touches && event.touches.length > 0) {
      return { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }

    return null;
  };

  const releaseHoverLock = () => {
    if (navigationLockRef.current || isPhoneOrbit) {
      return;
    }

    if (touchReleaseTimeoutRef.current) {
      clearTimeout(touchReleaseTimeoutRef.current);
      touchReleaseTimeoutRef.current = null;
    }

    if (!hoverLockRef.current) {
      return;
    }

    setHoverLock(null);
    const now = performance.now();
    releaseMotionRef.current = {
      freezeUntil: now + RELEASE_FREEZE_MS,
      rampUntil: now + RELEASE_FREEZE_MS + RELEASE_RAMP_MS,
    };
  };

  const scheduleTouchRelease = () => {
    if (!isTouchInput || isPhoneOrbit) {
      return;
    }

    if (touchReleaseTimeoutRef.current) {
      clearTimeout(touchReleaseTimeoutRef.current);
    }

    touchReleaseTimeoutRef.current = setTimeout(() => {
      touchReleaseTimeoutRef.current = null;
      releaseHoverLock();
    }, TOUCH_RELEASE_MS);
  };

  const handleCardHover = (index, event) => {
    if (navigationLockRef.current) {
      return;
    }

    const currentOrbit = normalOrbitStates[index];
    if (!currentOrbit) {
      return;
    }

    let anchorX = currentOrbit.x;
    let anchorY = currentOrbit.y;
    const point = getEventClientPoint(event);

    if (!isPhoneOrbit && point && stackRef.current) {
      const rect = stackRef.current.getBoundingClientRect();
      const relativeX = point.x - (rect.left + rect.width / 2);
      const relativeY = point.y - (rect.top + rect.height / 2);
      const minHoverX = Number.isFinite(leftOrbitEdgeBound)
        ? leftOrbitEdgeBound + (orbitConfig.cardWidth * currentOrbit.scale) / 2
        : Number.NEGATIVE_INFINITY;
      anchorX = clamp(relativeX, minHoverX, rect.width * 0.33);
      anchorY = clamp(relativeY, -rect.height * 0.3, rect.height * 0.3);
    }

    releaseMotionRef.current = { freezeUntil: 0, rampUntil: 0 };

    const lockedMinCenterX = Number.isFinite(leftOrbitEdgeBound)
      ? leftOrbitEdgeBound + (orbitConfig.cardWidth * currentOrbit.scale) / 2
      : Number.NEGATIVE_INFINITY;

    setHoverLock({
      index,
      x: Math.max(lockedMinCenterX, anchorX),
      y: anchorY,
      z: currentOrbit.z,
      scale: currentOrbit.scale,
      tilt: currentOrbit.tilt,
    });

    scheduleTouchRelease();
  };

  const handleCardPointerDown = (index, slug, event) => {
    const target = event.target;
    const isButtonTarget =
      target instanceof Element && target.closest(".hero-card__button");

    if (isButtonTarget) {
      return;
    }

    if (event.pointerType === "touch" || event.pointerType === "pen") {
      handleCardHover(index, event);
      return;
    }

    if (event.pointerType === "mouse" && isPrimaryPlainClick(event)) {
      handleCardHover(index, event);
      beginProjectNavigation(slug);
    }
  };

  return (
    <div className="page">
      <SiteNav />
      <main>
        <section id="home" className="hero">
          <div ref={contentRef} className="hero__content">
            <p className="eyebrow">Portfolio 2026</p>
            <Image
              src="/projects/pfp.png"
              alt={`${site.name} portrait`}
              className="hero__portrait"
              width={420}
              height={420}
              priority
            />
            <h1>
              {site.name}
              <span className="hero__role">{site.role}</span>
            </h1>
            <p className="hero__intro">{site.intro}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#work">
                View work
              </a>
              <a className="button button--ghost" href="#contact">
                Let's collaborate
              </a>
            </div>
            <div className="hero__meta">
              <div>
                <span>Location</span>
                <strong>{site.location}</strong>
              </div>
      {/*        <div>
                <span>Availability</span>
                <strong>{site.availability}</strong>
              </div> */}
            </div>
          </div>
          <div
            ref={stackRef}
            className="hero__stack"
            style={{
              "--hero-card-width": `${orbitConfig.cardWidth}px`,
              "--hero-stack-height": `${orbitConfig.stackHeight}px`,
            }}
            onMouseLeave={releaseHoverLock}
          >
            <div className="hero-stack-hint" aria-hidden="true">
              <span className="hero-stack-hint__desktop">Hover your cursor on a card.</span>
              <span className="hero-stack-hint__mobile">Tap cards to view.</span>
              <span className="hero-stack-hint__arrow">{"\u2193"}</span>
            </div>
            {heroProjects.length > 0 ? (
              heroProjects.map((project, index) => {
                const orbit = orbitStates[index] || {
                  depth: 0,
                  x: 0,
                  y: 0,
                  z: -126,
                  scale: 0.8,
                  tilt: 0,
                };

                const solidCardColor = project.palette[0];
                const cardImage = project.heroImage || project.image;
                const cardVideo = project.mediaVideo || null;
                const isTopCard = index === frontCardIndex;
                const brightness = isPhoneOrbit
                  ? 1
                  : hoverLock
                    ? isTopCard
                      ? 1.05
                      : 0.94
                    : 0.82 + orbit.depth * 0.2;
                const saturate = isPhoneOrbit
                  ? 1
                  : hoverLock
                    ? isTopCard
                      ? 1.06
                      : 0.96
                    : 1 + orbit.depth * 0.15;
                const shadowStrength = isPhoneOrbit
                  ? 0.24
                  : isTopCard
                    ? 0.34
                    : 0.2 + orbit.depth * 0.12;

                const shellStyle = {
                  zIndex: String(depthZIndexMap[index] ?? 1),
                  pointerEvents: "auto",
                  transition: isPhoneOrbit
                    ? `transform ${PHONE_DECK_TRANSITION_MS}ms cubic-bezier(0.2, 0.9, 0.2, 1), opacity 320ms ease`
                    : undefined,
                  opacity: isPhoneOrbit
                    ? cssFixed(isTopCard ? 1 : 0.42 + orbit.depth * 0.42)
                    : cssFixed(hoverLock ? (isTopCard ? 1 : 0.86) : 0.6 + orbit.depth * 0.4),
                  filter: isPhoneOrbit
                    ? "none"
                    : `brightness(${cssFixed(brightness)}) saturate(${cssFixed(saturate)})`,
                  boxShadow: isPhoneOrbit
                    ? isTopCard
                      ? "0 16px 30px rgba(17, 14, 12, 0.28)"
                      : "0 8px 18px rgba(17, 14, 12, 0.18)"
                    : `0 ${cssFixed(12 + orbit.depth * 14, 4)}px ${cssFixed(
                        22 + orbit.depth * 18,
                        4
                      )}px rgba(17, 14, 12, ${cssFixed(shadowStrength, 4)})`,
                  "--orbit-x": `${cssFixed(orbit.x, 4)}px`,
                  "--orbit-y": `${cssFixed(orbit.y, 4)}px`,
                  "--orbit-z": `${cssFixed(orbit.z, 4)}px`,
                  "--orbit-r": `${cssFixed(orbit.tilt, 4)}deg`,
                  "--orbit-s": cssFixed(orbit.scale),
                };

                const heroCardStyle = {
                  backgroundColor: solidCardColor,
                };

                return (
                  <div
                    key={project.slug}
                    className="hero-card-shell"
                    style={shellStyle}
                    onMouseEnter={(event) => {
                      if (!isTouchInput) {
                        handleCardHover(index, event);
                      }
                    }}
                    onPointerDown={(event) =>
                      handleCardPointerDown(index, project.slug, event)
                    }
                    onFocusCapture={(event) => handleCardHover(index, event)}
                  >
                    <article
                      className="hero-card"
                      style={heroCardStyle}
                    >
                      <div className="hero-card__top">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>
                      {cardVideo ? (
                        <video
                          className="hero-card__media hero-card__media-video"
                          src={cardVideo}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          aria-hidden="true"
                        />
                      ) : (
                        <div
                          className="hero-card__media"
                          style={{ backgroundImage: `url("${cardImage}")` }}
                          aria-hidden="true"
                        ></div>
                      )}
                      <h3>{project.title}</h3>
                      <div className="hero-card__actions">
                        <Link
                          href={`/work/${project.slug}`}
                          className="hero-card__button"
                          onMouseDown={(event) => {
                            if (isPrimaryPlainClick(event)) {
                              event.preventDefault();
                              beginProjectNavigation(project.slug);
                            }
                          }}
                          onTouchStart={(event) => {
                            event.preventDefault();
                            beginProjectNavigation(project.slug);
                          }}
                        >
                          Open project
                        </Link>
                      </div>
                    </article>
                  </div>
                );
              })
            ) : (
              <div className="service-card">
                <h3>No published projects yet</h3>
                <p>Set `hidden: false` on a project in `src/data/portfolio.js` to publish it.</p>
              </div>
            )}
          </div>
        </section>

        <section id="work" className="section">
          <div className="section__heading">
            <div>
              <h2>Projects</h2>
            </div>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="services" className="section section--split">
          <div>
            <p className="eyebrow">Services</p>
            <h2>Freelance services I currently offer.</h2>
            <p className="section__lead">
              I offer practical implementation support for individuals and small businesses,
              from product websites and APIs to operations tooling and coaching.
            </p>
            <div className="service-tags">
              {[
                "Freelance web development",
                "API development",
                "Business automation",
                "Marketing automation",
                "Inventory system setup (small business)",
                "Life coaching",
                "Gym coaching",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="service-actions">
              <a className="button button--primary" href="#contact">
                Contact me
              </a>
            </div>
          </div>
          <div className="service-cards">
            {[
              {
                title: "Freelance Web + API Delivery",
                text: "Design and build production-ready websites, dashboards, and APIs tailored to your workflow and business goals.",
              },
              {
                title: "Business + Marketing Automation",
                text: "Set up small-business workflow automation, marketing automation, and practical inventory tracking systems to reduce manual work and improve consistency.",
              },
              {
                title: "Life + Gym Coaching",
                text: "Provide structured support for training, consistency, and personal performance habits with practical weekly guidance.",
              },
            ].map((card) => (
              <div key={card.title} className="service-card reveal">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section section--about">
          <div className="about-card reveal">
            <p className="eyebrow">About</p>
            <h2>Engineer, builder, and operator.</h2>
            <p>
              I build practical systems across biomedical engineering, software, and automation,
              with a focus on projects that ship, solve real problems, and stay maintainable.
            </p>
            <p>
              Work includes full-stack products, APIs, internal business tooling, biomechanical
              analysis, and device-adjacent engineering.
            </p>
          </div>
        </section>

        <section id="resume" className="section section--resume">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Resume</p>
              <h2>Experience, skills, and full resume view.</h2>
            </div>
            <p className="section__lead">
              Scroll the embedded PDF on the left, with detailed role history on the right.
            </p>
          </div>
          <div className="resume-grid">
            <div className="resume-card resume-card--pdf reveal">
              <h3>Resume Documents</h3>
              <div className="resume-doc-list">
                <article className="resume-doc-card">
                  <div className="resume-doc-head">
                    <h4>Resume</h4>
                    <a href={resume.resumeUrl} target="_blank" rel="noreferrer">
                      Open
                    </a>
                  </div>
                  <div className="resume-pdf-shell">
                    <iframe
                      title="Maxwell McInnis Resume"
                      src={`${resume.resumeUrl}#toolbar=1&navpanes=0&zoom=page-width&view=FitH`}
                      className="resume-pdf-frame"
                    />
                  </div>
                </article>

                <article className="resume-doc-card">
                  <div className="resume-doc-head">
                    <h4>EU CV</h4>
                    <a href={resume.cvUrl} target="_blank" rel="noreferrer">
                      Open
                    </a>
                  </div>
                  <div className="resume-pdf-shell">
                    <iframe
                      title="Maxwell McInnis EU CV"
                      src={`${resume.cvUrl}#toolbar=0&navpanes=0&scrollbar=1&zoom=80`}
                      className="resume-pdf-frame"
                    />
                  </div>
                </article>
              </div>

              <p>{resume.summary}</p>
              <ul className="resume-highlights">
                {resume.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="skill-grid">
                {resume.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="resume-actions">
                <span className="resume-note">
                  If text looks fuzzy in browser preview, use Open for full-quality PDF view.
                </span>
              </div>
            </div>
            <div className="experience-stack">
              <h3>Work experience</h3>
              {experience.map((role) => (
                <div key={`${role.title}-${role.company}`} className="experience-card reveal">
                  <div className="experience-meta">
                    <div>
                      <strong>{role.title}</strong>
                      <span>{role.company}</span>
                    </div>
                    <div className="experience-dates">
                      <span>{role.location}</span>
                      <span>{role.dates}</span>
                    </div>
                  </div>
                  <p>{role.summary}</p>
                  <ul>
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section section--education">
          <div className="section__heading">
            <div>
              <p className="eyebrow">Education</p>
              <h2>Academic background and credentials.</h2>
            </div>
            <p className="section__lead">
              Full degree and program details pulled directly from your CV.
            </p>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article key={`${item.degree}-${item.school}`} className="education-card reveal">
                <strong>{item.degree}</strong>
                <span>{item.school}</span>
                <span>{item.dates}</span>
                <p>{item.note}</p>
                <div className="education-detail-grid">
                  {item.address ? (
                    <div className="education-detail">
                      <span>Address</span>
                      <p>{item.address}</p>
                    </div>
                  ) : null}
                  {item.website ? (
                    <div className="education-detail">
                      <span>Website</span>
                      <a href={item.website} target="_blank" rel="noreferrer">
                        {item.website}
                      </a>
                    </div>
                  ) : null}
                  {item.finalGrade ? (
                    <div className="education-detail">
                      <span>Final grade</span>
                      <p>{item.finalGrade}</p>
                    </div>
                  ) : null}
                  {item.eqfLevel ? (
                    <div className="education-detail">
                      <span>EQF level</span>
                      <p>{item.eqfLevel}</p>
                    </div>
                  ) : null}
                  {item.publication ? (
                    <div className="education-detail education-detail--full">
                      <span>Publication</span>
                      <a href={item.publication} target="_blank" rel="noreferrer">
                        {item.publication}
                      </a>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section--contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Ready to build something distinct?</h2>
              <p>
                Share a quick overview of the project and I will reply with next steps
                and availability.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button--primary contact-button" href={`mailto:${site.email}`}>
                <span className="contact-button__label">Email</span>
                <span className="contact-button__value">{site.email}</span>
              </a>
              <a className="button button--ghost contact-button" href={`tel:${site.phone}`}>
                <span className="contact-button__label">Call</span>
                <span className="contact-button__value">{site.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}


























