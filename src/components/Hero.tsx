"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const rotatingPhrases = ["Solar Power Systems", "Electric Mobility Solutions", "Indigenous Energy Innovations"];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState(rotatingPhrases[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = rotatingPhrases[phraseIndex];
    const typingDelay = isDeleting ? 55 : 110;
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentPhrase.length) {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1));
            return;
          }

          setIsDeleting(true);
          return;
        }

        if (displayText.length > 0) {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
          return;
        }

        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % rotatingPhrases.length);
      },
      displayText === currentPhrase && !isDeleting ? 1200 : typingDelay,
    );

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section className="hero">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/solar-panels.mp4" type="video/mp4" />
        {/* <source src="/hero-video.mp4" type="video/mp4" /> */}
      </video>
      <div className="hero__video-tint" aria-hidden="true" />
      <div className="hero__orb hero__orb--one" aria-hidden="true" />
      <div className="hero__orb hero__orb--two" aria-hidden="true" />
      <div className="hero__orb hero__orb--three" aria-hidden="true" />

      <div className="container hero__layout">
        <div className="hero__content">
          <span className="hero__eyebrow animate-rise">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Pioneering clean energy
          </span>
          <h1 className="hero__title animate-rise animate-delay-1">
            <span className="hero__title-dynamic">
              {displayText}
              <span className="hero__cursor" aria-hidden="true" />
            </span>
            <span className="hero__title-static">One Company, <br />Driving Africa Forward.</span>
          </h1>
          <p className="hero__description animate-rise animate-delay-2">
            Enerplaz delivers high-performance solar infrastructure and
            electric mobility solutions for industrial and residential ecosystems.
          </p>

          <div className="hero__actions animate-rise animate-delay-3">
            <Link href="/services" className="button hero__cta">
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
