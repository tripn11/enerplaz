"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

export default function Pillars() {
  const header = useReveal<HTMLDivElement>();
  const left = useReveal<HTMLElement>(0.2);
  const right = useReveal<HTMLElement>(0.2);

  return (
    <section className="pillars section">
      <div className="container">
        <div className={`section-heading reveal ${header.visible ? "is-visible" : ""}`} ref={header.ref}>
          <span className="section-heading__eyebrow">What We Do</span>
          <h2>Two Core Pillars Pushing Cleaner Energy Adoption Forward.</h2>
          <p>
            We combine on-the-ground energy delivery with mobility thinking so the brand feels more complete,
            more modern, and more useful to the people it serves.
          </p>
        </div>

        <div className="pillars__grid">
          <article className={`pillar-card pillar-card--solar reveal ${right.visible ? "is-visible" : ""}`} ref={right.ref}>
            <span className="pillar-card__tag">Pillar One</span>
            <h3>Solar Power Installations</h3>
            <p>
              We do not just sell panels. We design end-to-end solar systems, deploy smart monitoring
              solutions, and run PayGo programmes that make clean energy accessible and affordable for
              people, businesses, and communities.
            </p>
            <ul className="pill-tags">
              <li>Solar Systems</li>
              <li>Street Lights</li>
              <li>PayGo</li>
              <li>Training</li>
              <li>DC Living</li>
            </ul>
            <Link href="/services/solar" className="pillar-card__cta">
              Explore Solar Power
            </Link>
          </article>

          <article className={`pillar-card pillar-card--mobility reveal ${left.visible ? "is-visible" : ""}`} ref={left.ref}>
            <span className="pillar-card__tag">Pillar Two</span>
            <h3>Electric Mobility</h3>
            <p>
              We supply brand new electric vehicles and build the charging infrastructure to back them up,
              plus after-sales configuration and maintenance so your fleet stays road-ready long after delivery.
            </p>
            <ul className="pill-tags">
              <li>Electric Vehicles</li>
              <li>EV Charging Stations</li>
              <li>Maintenance</li>
              <li>Monitoring</li>
            </ul>
            <a
              href="https://enerplazevs.com"
              className="pillar-card__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Mobility
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
