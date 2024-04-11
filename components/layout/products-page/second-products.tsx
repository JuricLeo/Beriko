import Image from "next/image";

const images = [
  {
    src: "/images/garazna-vrata/image1.jpg",
    alt: "",
  },
  {
    src: "/images/garazna-vrata/image2.jpeg",
    alt: "",
  },
  {
    src: "/images/garazna-vrata/image3.jpeg",
    alt: "",
  },
  {
    src: "/images/garazna-vrata/image4.jpeg",
    alt: "",
  },
];

export default function SecondProducts() {
  return (
    <section className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24 second-product-bg">
      <div className="px-3 lg:px-48">
        <h1 className="text-4xl font-semibold mb-8">Garažna Vrata</h1>
        <div className="space-y-3">
          <p>
            Ako tražite garažna vrata koja odlikuje moderan i lijep izgled, a
            istovremeno nude osjećaj elegancije i čvrstoće te visoku tehnološku
            izradu a i nisku cijenu, onda ste na pravom mjestu.
          </p>
          <p>
            Sekcijska garažna vrata su s kompletnom zaštitom - protuprovalni
            standard, 40 mm izolirani paneli, termoprofili oko vrata, prihvatna
            ploča vodilica od nehrđajućeg čelika itd...
          </p>
          <p>
            Garažna vrata imaju američki sustav s monoval panelima i duplom
            vodilicom, 100% poliester i bravu za deblokadu. Izrađuju se u raznim
            bojama i veličinama. Najzastupljenije su bijela, a pored ostalih ral
            boja moguća je i narudžba u raznim nijansama prirodnog drveta.
          </p>
          <p>
            Segmenti mogu biti ravnih površina, reljefnih s pravokutnim kazetnim
            oblikom. Vodilice i pribor potrebni za izradu vrata proizvedeni su
            od pocinčanog čelika, te ih nije potrebno održavati i bojati.
          </p>
          <p>
            Mogućnost daljinskog ili ručnog podizanja (varijanta sa ili bez
            motora). Mi već desetu godinu montiramo vrata za vas. Zbog toga smo
            ponosni da vam možemo ponuditi garažna vrata koja imaju tolike
            prednosti i upotrebljivosti koje samo možete poželjeti
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        {images.map(({ src, alt }) => (
          <div className="w-full flex justify-center mt-2 md:mr-2" key={src}>
            <Image
              src={src}
              alt={alt}
              width={500}
              height={100}
              className="shadow-xl rounded-sm"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
