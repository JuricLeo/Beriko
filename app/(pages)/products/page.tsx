import FirstProducts from "@/components/layout/products-page/first-products";
import HeroSection from "@/components/layout/products-page/hero-section";
import SecondProducts from "@/components/layout/products-page/second-products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Katalog Proizvoda - Beriko'
}

const ProductsPage = () => {
  return ( 
    <main>
      <HeroSection />
      <FirstProducts />
      <SecondProducts />
    </main>
   );
}
 
export default ProductsPage;