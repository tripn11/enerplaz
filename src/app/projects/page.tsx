import InteriorPage from "@/components/InteriorPage";
import { pageContent } from "@/lib/site-data";

export default function ProjectsPage() {
  return <InteriorPage {...pageContent.projects} />;
}
