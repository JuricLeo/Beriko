import Contact from "@/components/layout/home-page/contact";
import CustomerStatements from "@/components/layout/home-page/image-carousel";
import FinishedJobCounter from "@/components/layout/home-page/finished-jobs-counter";
import Testimonials from "@/components/layout/home-page/testimonials";

export default function Home() {
  return (
    <main className="">
      <Testimonials />
      <CustomerStatements />
      <FinishedJobCounter />
      <Contact />
    </main>
  );
}
