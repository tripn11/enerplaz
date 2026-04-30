import InteriorPage from "@/components/InteriorPage";
import { pageContent } from "@/lib/site-data";

export default function ServicesPage() {
  return <InteriorPage {...pageContent.services} />;
}
