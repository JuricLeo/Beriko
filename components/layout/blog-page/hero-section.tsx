import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24">
      <div className="mt-16 mb-32">
        <h1 className="text-center text-5xl font-semibold mb-4">Blog</h1>
        <p className="text-center text-lg text-slate-400">Ostanite u dodiru s nama kroz naše blogove</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 justify-items-center">
        <Link href="/">
          <Image 
            width={400}
            height={100}
            alt=""
            src="/images/hero-garage.jpeg"
          />
          <h2 className="pt-6 pb-1 max-w-[400px]">Izgrađena nova garaža u centru Kloštra Podravskog gfdsgdfsgdsfgsfd</h2>
          <p className="text-slate-400">Datum: 6. Travnja 2024.</p>
        </Link>
      </div>
    </section>
  );
}
