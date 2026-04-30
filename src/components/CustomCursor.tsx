"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(mediaQuery.matches);

    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);

    return () => mediaQuery.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      return;
    }

    const outer = outerRef.current;
    const inner = innerRef.current;

    if (!outer || !inner) {
      return;
    }

    let pointerX = 0;
    let pointerY = 0;
    let outerX = 0;
    let outerY = 0;
    let frame = 0;

    const animate = () => {
      outerX += (pointerX - outerX) * 0.18;
      outerY += (pointerY - outerY) * 0.18;
      outer.style.transform = `translate3d(${outerX}px, ${outerY}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(animate);
    };

    const handleMove = (event: MouseEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!visible) {
        outerX = event.clientX;
        outerY = event.clientY;
        setVisible(true);
      }
      inner.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setHovered(Boolean(target?.closest("a, button, input, textarea, select, [data-cursor='hover']")));
    };

    const handleDown = () => setClicked(true);
    const handleUp = () => setClicked(false);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);
    frame = window.requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      window.cancelAnimationFrame(frame);
    };
  }, [enabled, visible]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div
        ref={outerRef}
        className={`cursor cursor--outer ${visible ? "is-visible" : ""} ${hovered ? "is-hovered" : ""} ${clicked ? "is-clicked" : ""}`}
      />
      <div
        ref={innerRef}
        className={`cursor cursor--inner ${visible ? "is-visible" : ""} ${hovered ? "is-hovered" : ""}`}
      />
    </>
  );
}
