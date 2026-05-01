"use client";

import { useReveal } from "@/hooks/useReveal";

const homeJourney = [
  {
    step: "01",
    title: "Audit and Plan",
    body: "We begin with site studies, load profiling, and a practical delivery roadmap that matches your budget and growth plans.",
  },
  {
    step: "02",
    title: "Build and Commission",
    body: "Our team executes installation, quality checks, and commissioning with visible milestones and stronger on-site coordination.",
  },
  {
    step: "03",
    title: "Support and Scale",
    body: "After handover, we stay close with training, maintenance guidance, and expansion support as your energy needs evolve.",
  },
];

export default function Journey() {
  const header = useReveal<HTMLDivElement>();
  const cards = useReveal<HTMLDivElement>(0.15);

  return (
    <section className="journey section">
      <div className="container">
        <div className={`section-heading reveal ${header.visible ? "is-visible" : ""}`} ref={header.ref}>
          <span className="section-heading__eyebrow">How We Work</span>
          <h2>A Smoother Delivery Flow from First Audit to Long-term Support.</h2>

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
