import Gallery from "@/components/layout/gallery-page/gallery";
import Contact from "@/components/layout/home-page/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerija - Beriko",
};

const GalleryPage = () => {
  return (
    <main>
      <Gallery />
      <Contact />
    </main>
  );
};

export default GalleryPage;
