import { notFound } from "next/navigation";
import InteriorPage from "@/components/InteriorPage";
import { servicePages } from "@/lib/site-data";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = servicePages[slug];

  if (!page) {
    notFound();
  }

  return <InteriorPage {...page} />;
}
