import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-24 lg:py-10 flex items-center justify-center">
      <div className="space-y-6 lg:pr-24 justify-center">
        <h1 className="2xl:text-6xl text-5xl font-semibold min-w-[400px] max-w-[700px]">
          Visoko Kvalitetni Montažni Objekti i Garažna Vrata
        </h1>
        <p className="max-w-[500px] lg:max-w-[700px]">
          Beriko d.o.o specializes in the production of high-quality
          prefabricated structures and garage doors. Our innovative designs and
          durable materials ensure lasting performance and customer
          satisfaction.
        </p>
        <div className="space-x-4">
          <Link href="/contact">
            <Button size="lg">Kontakt</Button>
          </Link>
          <Link href="/products">
            <Button
              size="lg"
              className="border-2 border-primary"
              variant="outline"
            >
              Istraži
            </Button>
          </Link>
        </div>
      </div>
      <Image
        src="/images/garage1.jpeg"
        alt="Carousel image"
        width={10}
        height={10}
        className="hidden lg:block w-[450px] h-[600px] 2xl:w-[700px] 2xl:h-[800px]"
      />
    </section>
  );
}
