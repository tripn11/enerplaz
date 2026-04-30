import InteriorPage from "@/components/InteriorPage";
import { careerPages } from "@/lib/site-data";

export default function FindAJobPage() {
  return <InteriorPage {...careerPages["find-a-job"]} />;
}
