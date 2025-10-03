import HeroBanner from "../components/home/HeroBanner";
import KeyStats from "../components/home/KeyStats";
import ArchitectureTeaser from "../components/home/ArchitectureTeaser";
import WhereTCSFits from "../components/home/WhereTCSFits";
import WorkWithUs from "../components/home/WorkWithUs";
import InsightStrips from "../components/home/InsightStrips";
import PartnerPrograms from "../components/home/PartnerPrograms";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <KeyStats />
      <ArchitectureTeaser />
      <PartnerPrograms />
      <WhereTCSFits />
      <WorkWithUs />
      <InsightStrips />
    </main>
  );
}
