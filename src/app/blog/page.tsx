import InteriorPage from "@/components/InteriorPage";
import { pageContent } from "@/lib/site-data";

export default function BlogPage() {
  return <InteriorPage {...pageContent.blog} />;
}
