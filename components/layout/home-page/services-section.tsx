import { Button } from "@/components/ui/button";
import { BookmarkCheck, HardHat, Pencil, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24 bg-primary/20">
      <div className="flex flex-col items-center">
        <h1 className="2xl:text-6xl text-4xl sm:text-5xl font-semibold sm:min-w-[400px] max-w-[700px] md:text-center">
          Pružanje Visokokvalitetnih Montažnih Konstrukcija i Garažnih Vrata
        </h1>
        <p className="max-w-[500px] lg:max-w-[700px] mr-auto md:mr-0 md:text-center mt-6 mb-16">
          U Beriku specijalizirani smo za proizvodnju vrhunskih montažnih
          objekata i garažnih vrata. Naš tim posvećen je pružanju izvanredne
          kvalitete i dizajna kako bi zadovoljio Vaše specifične potrebe.
        </p>
        <div className="flex flex-col xl:flex-row justify-between xl:space-x-24 space-y-12 xl:space-y-0">
          <div className="text-center space-y-6 shadow-xl rounded-md p-8 bg-primary/20">
            <Pencil className="m-auto w-12 h-12" />
            <h2 className="text-3xl font-semibold">
              Prilagodljiva Rješenja za Svaki Projekt
            </h2>
            <p className="text-sm max-w-[350px] m-auto">
              Nudimo širok raspon prilagodljivih montažnih konstrukcija i
              garažnih vrata kako bismo odgovorili na različite primjene i
              zahtjeve.
            </p>
          </div>
          <div className="text-center space-y-6 shadow-xl rounded-md p-8 bg-primary/20">
            <HardHat className="m-auto w-12 h-12" />
            <h2 className="text-3xl font-semibold">
              Stručno Postavljanje i Pouzdana Usluga
            </h2>
            <p className="text-sm max-w-[350px] m-auto">
              Naš tim iskusnih stručnjaka osigurava besprijekornu montažu i
              pruža pouzdanu uslugu tijekom cijelog procesa.
            </p>
          </div>
          <div className="text-center space-y-6 shadow-xl rounded-md p-8 bg-primary/20">
            <BookmarkCheck className="m-auto w-12 h-12" />
            <h2 className="text-3xl font-semibold">
              Izuzetna Kvaliteta po Izvrsnim Cijenama
            </h2>
            <p className="text-sm max-w-[350px] m-auto">
              Nastojimo dostaviti proizvode izuzetne kvalitete po konkurentnim
              cijenama, osiguravajući maksimalnu vrijednost za naše kupce.
            </p>
          </div>
        </div>
        <Link href="/contact" className="mt-12">
          <Button size="lg">Kontakt</Button>
        </Link>
      </div>
    </section>
  );
}
