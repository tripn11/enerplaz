import InteriorPage from "@/components/InteriorPage";
import { careerPages } from "@/lib/site-data";

export default function TrainingPage() {
  return <InteriorPage {...careerPages.training} />;
}
