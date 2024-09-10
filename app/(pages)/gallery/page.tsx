import Gallery from "@/components/layout/gallery-page/gallery";
import UploadImage from "@/components/layout/gallery-page/upload-image";
import Contact from "@/components/layout/home-page/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerija - Beriko",
};

const GalleryPage = () => {
  return (
    <main>
      <UploadImage />
      <Gallery />
      <Contact />
    </main>
  );
};

export default GalleryPage;
