import HeroSection from "@/components/layout/blog-page/hero-section";
import Contact from "@/components/layout/home-page/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Beriko",
};

const BlogPage = () => {
  return (
    <main>
      <HeroSection />
      <Contact />
    </main>
  );
};

export default BlogPage;
