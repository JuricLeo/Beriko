import HeroSection from "@/components/layout/reviews-page/hero-section";
import CtaSection from "@/components/layout/reviews-page/cta-section";
import Reviews from "@/components/layout/reviews-page/reviews";
import { Metadata } from "next";
import Contact from "@/components/layout/home-page/contact";
import CreateReview from "@/components/layout/reviews-page/create-review";

export const metadata: Metadata = {
  title: "Recenzije - Beriko",
};

const ReviewsPage = () => {
  return (
    <main>
      <HeroSection />
      <CreateReview />
      <Reviews />
      <CtaSection />
      <Contact />
    </main>
  );
};

export default ReviewsPage;
