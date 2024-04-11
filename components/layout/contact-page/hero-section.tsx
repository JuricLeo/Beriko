import { Button } from "@/components/ui/button";
import { Mail, Phone, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";

export default function ContactHeroSection() {
  return (
    <section className="py-24 contact-hero-section-bg lg:py-12 px-3 md:px-10 lg:px-24 text-white mt-[-96px]">
      <header className=" text-white flex flex-col justify-center items-center h-[300px] md:h-[400px]">
        <div className="grid gap-y-3 ">
          <h1 className="text-3xl xl:text-5xl lg:text-4xl">TU SMO ZA VAS</h1>
          <p className="text-center">Sada ili bilo kada.</p>
        </div>
      </header>
    </section>
  );
}
