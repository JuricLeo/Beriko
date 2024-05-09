import Gallery from "@/components/layout/gallery-page/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Galerija - Beriko'
}

const GalleryPage = () => {
  return ( 
    <main>
      <Gallery />
    </main>
   );
}
 
export default GalleryPage;