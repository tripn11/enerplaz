import Link from "next/link";
import type { DetailPageData } from "@/lib/site-data";

type InteriorPageProps = DetailPageData;

function ActionLink({ href, label, variant }: { href: string; label: string; variant: string }) {
  const className = `button ${variant}`;

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function InteriorPage({
  eyebrow,
  title,
  description,
  highlights,
  cards,
  primaryCta,
  secondaryCta,
}: InteriorPageProps) {
  return (
    <main className="interior">
      <section className="interior__hero">
        <div className="container interior__hero-inner">
          <div className="interior__copy">
            <span className="interior__eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>

            <div className="interior__actions">
              <ActionLink href={primaryCta.href} label={primaryCta.label} variant="button--brand" />
              {secondaryCta ? (
                <ActionLink href={secondaryCta.href} label={secondaryCta.label} variant="button--secondary" />
              ) : null}
            </div>
          </div>

          <div className="interior__highlights">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="interior__details">
        <div className="container interior__grid">
          {cards.map((card) => (
            <article key={card.title} className="detail-card">
              {card.meta ? <small>{card.meta}</small> : null}
              <h2>{card.title}</h2>
              <p>{card.body}</p>
              {card.href ? (
                <Link href={card.href} className="text-link">
                  Learn more
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
