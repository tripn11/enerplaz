"use client";

import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  {
    quote:
      "Enerplaz installed our solar system quickly, explained every decision clearly, and left us with something that feels stable enough to trust every day.",
    name: "Chukwuemeka Obi",
    role: "CEO, Obi Logistics Ltd",
    image: "/testimonials/chukwuemeka.jpg",
  },
  {
    quote:
      "Their team paired technical depth with patience. The rollout felt organised from survey to commissioning, and the results have been strong.",
    name: "Amaka Nwosu",
    role: "Director, Nwosu Foundation",
    image: "/testimonials/amaka.jpg",
  },
  {
    quote:
      "We came for cleaner power and stayed for the quality of their support. The training and aftercare made the entire experience better.",
    name: "Babatunde Adeyemi",
    role: "Managing Director, Adeyemi Properties",
    image: "/testimonials/babatunde.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const header = useReveal<HTMLDivElement>();
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCurrent((value) => (value + 1) % testimonials.length);
    }, 4800);

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);

    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setCurrent((value) => (value + 1) % testimonials.length);
      }, 4800);
    }
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <div className={`section-heading reveal ${header.visible ? "is-visible" : ""}`} ref={header.ref}>
          <span className="section-heading__eyebrow">Client Stories</span>
          <h2>Trusted by Teams who Wanted Cleaner Power Without Messy Delivery.</h2>
        </div>

        <div className="testimonials__frame">
          <div className="testimonials__track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((item) => (
              <article key={item.name} className="testimonials__slide">
                <div className="testimonials__card">
                  <p>{item.quote}</p>
                  <footer className="testimonials__footer">
                    <div className="testimonials__avatar">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="testimonials__author">
                      <strong>{item.name}</strong>
                      <span>{item.role}</span>
                    </div>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonials__controls">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`testimonials__dot ${index === current ? "is-active" : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
