"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Dedicated Specialists" },
  { value: 5, suffix: "", label: "Active Branches" },
  { value: 50, suffix: "MW", label: "Power Deployed" },
];

function useCounter(target: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      return;
    }

    let frame = 0;
    let startedAt: number | null = null;

    const step = (time: number) => {
      if (startedAt === null) {
        startedAt = time;
      }

      const progress = Math.min((time - startedAt) / 1800, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(step);
      }
    };

    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [start, target]);

  return count;
}

function StatItem({ label, suffix, value, start }: (typeof stats)[number] & { start: boolean }) {
  const display = useCounter(value, start);

  return (
    <article className="stats__card">
      <strong>
        {display}
        {suffix}
      </strong>
      <span>{label}</span>
    </article>
  );
}

export default function Statistics() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="stats">
      <div className="container stats__grid">
        {stats.map((item) => (
          <StatItem key={item.label} {...item} start={visible} />
        ))}
      </div>
    </section>
  );
}
