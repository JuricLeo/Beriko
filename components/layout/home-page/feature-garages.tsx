import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function FeatureGarages() {
  return (
    <section className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24">
      <div className="flex items-center justify-center">
        <div className="space-y-6 lg:pr-24 justify-center">
          <h6 className="italic text-sm">Visoka sigurnost</h6>
          <h1 className="2xl:text-6xl text-4xl sm:text-5xl font-semibold sm:min-w-[400px] max-w-[700px]">
            Uljepšajte Svoj Dom uz Elegantna Garažna vrata
          </h1>
          <p className="max-w-[500px] lg:max-w-[700px]">
            Naša garažna vrata kombiniraju najmodernije sigurnosne značajke s
            impresivnim dizajnom. Odaberite iz širokog spektra opcija kako biste
            prilagodili konstrukciju prema vašim vizijama i oblikovali je prema
            vašim željama.
          </p>
          <div className="space-x-4">
            <Link href="/contact">
              <Button size="lg">Kontakt</Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                className="border-2 border-[color:var(--analogous)]"
                variant="outline"
              >
                Istražite
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src="/feature-garages.jpg"
          alt="Garažna vrata"
          width={1200}
          height={1200}
          className="hidden lg:block w-[450px] h-[450px] 2xl:w-[700px] 2xl:h-[800px]"
        />
      </div>
    </section>
  );
}
