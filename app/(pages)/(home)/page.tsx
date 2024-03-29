import Contact from "@/components/layout/home-page/contact";
import CustomerStatements from "@/components/layout/home-page/image-carousel";
import FinishedJobCounter from "@/components/layout/home-page/finished-jobs-counter";
import Testimonials from "@/components/layout/home-page/testimonials";
import Hero from "@/components/layout/home-page/hero";
import FeatureStrenght from "@/components/layout/home-page/feature-strenght";
import QualitySection from "@/components/layout/home-page/quality-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureStrenght />
      <QualitySection />
    </main>
  );
}
