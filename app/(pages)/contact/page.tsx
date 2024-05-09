import ContactForm from "@/components/layout/contact-page/contact-form";
import ContactInfo from "@/components/layout/contact-page/contact-info";
import ContactHeroSection from "@/components/layout/contact-page/hero-section";
import FAQSection from "@/components/layout/home-page/faqs-section";
import Map from "@/components/layout/home-page/map";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Kontakt - Beriko'
}

export default function Contact() {
  return (
    <main>
      <ContactHeroSection />
      <ContactForm />
      <ContactInfo />
      <Map />
      <FAQSection />
    </main>
  );
}
