import InteriorPage from "@/components/InteriorPage";
import { pageContent } from "@/lib/site-data";

export default function AboutPage() {
  return <InteriorPage {...pageContent.about} />;
}
