"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="my-16 z-0 flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="mr-auto ml-3 lg:ml-16 text-3xl">Zadovoljni Kupci</h1>
      <p className="mr-auto ml-3 lg:ml-16 mt-2 mb-8">
        Pročitajte što naši kupci kažu za nas:
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Beriko je nadmašio naša očekivanja svojim proizvodima vrhunske kvalitete i besprijekornom uslugom.",
    name: "Ana Petrović",
    title: "Više nego zadovoljni",
  },
  {
    quote:
      "Vjerujem Beriku zbog njihove dosljedne isporuke visokokvalitetnih rješenja po konkurentnim cijenama.",
    name: "Marko Jurić",
    title: "Kvaliteta na koju možete računati",
  },
  {
    quote:
      "Beriko je naš pouzdan partner već godinama, pružajući pouzdanu uslugu i izvanredne proizvode.",
    name: "Ivana Horvat",
    title: "Pouzdan partner",
  },
  {
    quote:
      "Beriko nudi nevjerojatnu vrijednost za novac, s proizvodima koji nadmašuju očekivanja.",
    name: "Filip Novak",
    title: "Vrijednost za novac",
  },
  {
    quote:
      "Od početka do kraja, Beriko je osigurao besprijekoran doživljaj svojom stručnom instalacijom i pažljivom uslugom.",
    name: "Petra Kovačić",
    title: "Besprekoran doživljaj",
  },
];
