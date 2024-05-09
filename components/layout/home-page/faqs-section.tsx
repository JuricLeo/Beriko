import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="py-12 sm:py-24 lg:py-16 mb-8 px-3 md:px-10 lg:px-24">
      <h1 className="text-4xl font-semibold mb-10">FAQs</h1>
      <p className="mt-4 mb-8">
        Pronađite odgovore na najčešće postavljena pitanja o našim montažnim
        objektima i garažnim vratima.
      </p>
      <div>
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Kako se razlikuju montažni objekti od tradicionalnih građevinskih
              metoda?
            </AccordionTrigger>
            <AccordionContent>
              Montažni objekti se proizvode izvan gradilišta unaprijed,
              koristeći prefabrikaciju, što rezultira bržom izgradnjom, nižim
              troškovima i većom prilagodljivošću dizajna u usporedbi s
              tradicionalnim metodama gradnje.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Koje su prednosti odabira garažnih vrata visoke kvalitete?
            </AccordionTrigger>
            <AccordionContent>
              Garažna vrata visoke kvalitete pružaju bolju sigurnost, trajnost i
              estetiku, štiteći vaše vozilo i imovinu od vanjskih elemenata i
              neželjenih uljeza.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Kako mogu odabrati pravu veličinu i stil garažnih vrata za svoj
              dom?
            </AccordionTrigger>
            <AccordionContent>
              Preporučujemo konzultaciju s profesionalnim instalaterom ili
              dizajnerom kako biste odabrali garažna vrata koja odgovaraju
              veličini i stilu vašeg doma te zadovoljavaju vaše potrebe i
              preferencije.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Kako se vrši instalacija montažnih objekata?
            </AccordionTrigger>
            <AccordionContent>
              Instalacija montažnih objekata obično uključuje pripremu terena,
              postavljanje temelja i montažu prefabrikiranih dijelova na
              gradilištu. Preporučujemo angažiranje iskusnog profesionalnog tima
              za instalaciju radi osiguranja sigurnosti i kvalitete.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Koje su najčešće opcije prilagodbe dostupne za montažne objekte?
            </AccordionTrigger>
            <AccordionContent>
              Opcije prilagodbe za montažne objekte uključuju odabir materijala,
              boja, veličina i dodatne značajke poput prozora ili izolacije.
              Kontaktirajte nas kako biste saznali više o raspoloživim
              mogućnostima prilagodbe za vaše potrebe.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
