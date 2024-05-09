import HeroSection from "@/components/layout/blog-page/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blog - Beriko'
}

const BlogPage = () => {
  return (
    <main>
      <HeroSection />
    </main>
  );
};

export default BlogPage;
