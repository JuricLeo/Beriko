import Image from "next/image";

export default function FeatureStrenght() {
  return (
    <section className="py-12 sm:py-24 lg:py-10 flex items-center justify-center">
      <Image
        src="/images/garage1.jpeg"
        alt="Carousel image"
        width={10}
        height={10}
        className="hidden lg:block w-[350px] h-[500px] 2xl:w-[700px] 2xl:h-[800px]"
      />
      <div className="space-y-10 lg:pl-24 justify-center">
        <h1 className="2xl:text-6xl text-4xl sm:text-5xl font-semibold sm:min-w-[400px] max-w-[700px]">
          Otkrijte Snagu i Prilagodljivost Naših Montažnih Objekata.
        </h1>
        <p className="max-w-[500px] lg:max-w-[700px]">
          Naše montažne konstrukcije izrađene su da traju, pružajući udonost i
          mogućnosti prilagodbe. Bez obzira Trebate li garažu, prostor za
          pohranu ili radionicu, naše konstrukcije dizajnirane su da zadovolje
          Vaše specifične potrebe.
        </p>
        <div className="lg:space-x-8 space-y-4 lg:space-y-0 flex flex-col lg:flex-row">
          <div className="space-y-2 shadow-md p-4 rounded-md">
            <h2 className="text-xl font-semibold">Snaga</h2>
            <p className="text-sm lg:w-[260px]">
              Naše montažne konstrukcije dizajnirane su s visokokvalitetnim
              materijalima za dugotrajnu uporabu i stabilnost.
            </p>
          </div>
          <div className="space-y-2 shadow-md p-4 rounded-md">
            <h2 className="text-xl font-semibold">Personalizacija</h2>
            <p className="text-sm lg:w-[260px]">
              Izaberite iz raznovrsne ponude opcija kako biste prilagodili
              konstrukciju prema Svojim vizijama i oblikovali je prema Vašim
              željama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
