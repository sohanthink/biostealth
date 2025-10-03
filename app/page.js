import HeroBanner from "../components/home/HeroBanner";
import KeyStats from "../components/home/KeyStats";
import ArchitectureTeaser from "../components/home/ArchitectureTeaser";
import WhereTCSFits from "../components/home/WhereTCSFits";
import PartnerPrograms from "../components/home/PartnerPrograms";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <KeyStats />
      <ArchitectureTeaser />
      <PartnerPrograms />
      <WhereTCSFits />
    </main>
  );
}
