"use client";

import { homeJourney } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

export default function Journey() {
  const header = useReveal<HTMLDivElement>();
  const cards = useReveal<HTMLDivElement>(0.15);

  return (
    <section className="journey section">
      <div className="container">
        <div className={`section-heading reveal ${header.visible ? "is-visible" : ""}`} ref={header.ref}>
          <span className="section-heading__eyebrow">How We Work</span>
          <h2>A smoother delivery flow from first audit to long-term support.</h2>
          <p>
            The refreshed experience is not just visual. It reflects a clearer process that helps clients know
            what is happening, what comes next, and where value shows up.
          </p>
        </div>

        <div className={`journey__grid reveal ${cards.visible ? "is-visible" : ""}`} ref={cards.ref}>
          {homeJourney.map((item, index) => (
            <article
              key={item.step}
              className="journey-card"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <span className="journey-card__step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
