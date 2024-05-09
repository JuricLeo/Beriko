import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function QualitySection() {
  return (
    <section className="py-12 sm:py-24">
      <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left space-y-8 lg:space-y-0 lg:space-x-24 px-3 md:px-10 lg:px-24">
        <div className="space-y-4 w-full">
          <h2 className="text-sm italic">&quot;Kvaliteta ispred kvantitete&quot;</h2>
          <h1 className="font-semibold text-4xl">
            Doživite Rast i Zadovoljstvo Naših Kupaca
          </h1>
        </div>
        <div className="lg:space-y-8">
          <p className="max-w-[600px] lg:max-w-none mb-8 lg:mb-0">
            U Beriku, ponosimo se izvanrednim rastom i zadovoljstvom kupaca.
            Naši statistički podaci prikazuju našu predanost u pružanju
            visokokvalitetnih montažnih konstrukcija i garažnih vrata.
          </p>
          <p className="font-semibold mb-4">U Beriku naš fokus je:</p>
          <div className="flex space-x-16 justify-center lg:justify-normal">
            <div>
              <h3 className="text-5xl font-semibold">100%</h3>
              <p>Na kvaliteti izrade</p>
            </div>
            <div>
              <h3 className="text-5xl font-semibold">100%</h3>
              <p>Na zadovoljstvu kupaca</p>
            </div>
          </div>
          <Link href="/reviews">
            <Button
              variant="outline"
              className="border-2 border-[color:var(--analogous)] mt-12"
            >
              Saznajte više
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
