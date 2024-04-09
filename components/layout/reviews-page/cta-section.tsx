import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24 reviews-cta-section-bg">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:px-36 py-12">
        <p className="text-newBlack text-2xl font-semibold">Sviđa Vam se što čujete? <br /> Kontaktirajte nas odmah!</p>
        <Link href="/contact" className="mt-6 lg:ml-12 lg:mt-0">
          <Button size="lg" className="bg-primary/75 hover:bg-primary/60 text-white">Kontakt</Button>
        </Link>
      </div>
    </section>
  );
}
