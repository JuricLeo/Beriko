import Contact from "@/components/layout/home-page/contact";
import ImageSlider from "@/components/layout/home-page/image-carousel";
import FinishedJobCounter from "@/components/layout/home-page/finished-jobs-counter";
import Testimonials from "@/components/layout/home-page/testimonials";
import Hero from "@/components/layout/home-page/hero";
import FeatureStrenght from "@/components/layout/home-page/feature-strenght";
import QualitySection from "@/components/layout/home-page/quality-section";
import FeatureGarages from "@/components/layout/home-page/feature-garages";
import ServicesSection from "@/components/layout/home-page/services-section";
import FAQSection from "@/components/layout/home-page/faqs-section";
import Map from "@/components/layout/home-page/map";

import dynamic from "next/dynamic";

const LazyMap = dynamic(() => import("@/components/layout/home-page/leaflet-map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureStrenght />
      <QualitySection />
      <ImageSlider />
      <FeatureGarages />
      <FinishedJobCounter />
      <ServicesSection />
      <LazyMap />
      <Testimonials />
      <FAQSection />
      <Map />
      <Contact />
    </main>
  );
}
