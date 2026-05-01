import { notFound } from "next/navigation";

const serviceTitles: Record<string, string> = {
  solar: "Solar Power Systems",
  mobility: "Electric Mobility",
  "dc-living": "DC Living",
  envac: "ENVAC Systems",
  paygo: "PayGo Services",
  training: "Training",
  streetlights: "Street Lights",
  "solar-water-pumps": "Solar Water Pumps",
};

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(serviceTitles).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const title = serviceTitles[slug];

  if (!title) {
    notFound();
  }

  return (
    <main className="interior">
      <section className="interior__hero">
        <div className="container interior__hero-inner">
          <div className="interior__copy">
            <h1>{title}</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
