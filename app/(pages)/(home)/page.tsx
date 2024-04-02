import Contact from "@/components/layout/home-page/contact";
import CustomerStatements from "@/components/layout/home-page/image-carousel";
import FinishedJobCounter from "@/components/layout/home-page/finished-jobs-counter";
import Testimonials from "@/components/layout/home-page/testimonials";
import { Timeline } from "@/components/layout/about-page/tracing-beam-content";

export default function Home() {
  return (
    <main className="mt-24">
      <CustomerStatements />
      <FinishedJobCounter />

      <Testimonials />
      <Contact />
    </main>
  );
}
