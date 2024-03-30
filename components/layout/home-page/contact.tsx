"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

export default function contact() {
  return (
    <section className="relative py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24 bg-primary/30 h-[35rem]">
      <div className="bg-primary text-white w-[25rem] h-[25rem] mt-10 absolute z-10 shadow-md p-8">
        <h2 className="text-2xl font-semibold">Kontakt Info</h2>
        <div className="mt-8 space-y-8">
          <div className="flex items-top">
            <MapPin className="mr-6 w-11 h-11" />
            <p>HR-48362 KLOŠTAR PODRAVSKI, Sjepana Radića 2</p>
          </div>
          <div className="flex items-center">
            <Mail className="mr-6 w-8 h-8" />
            <p>beriko@beriko.com</p>
          </div>
          <div className="flex items-center">
            <Phone className="mr-6 w-8 h-8" />
            <p>+385 98 64 62 60</p>
          </div>
        </div>
        <div className="flex justify-start mt-12 space-x-4">
          <Link
            href="#"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <FaFacebookF size={16} />
          </Link>
          <Link
            href="#"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <FaXTwitter size={16} />
          </Link>
          <Link
            href="#"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <IoLogoInstagram size={16} />
          </Link>
        </div>
      </div>
      <div className="bg-white w-[80%] h-[30rem] ml-48 relative shadow-md">
        <div className="ml-60 pt-16">
          <h1 className="text-2xl font-semibold">Pošaljite nam upit!</h1>
          <form>
            <label></label>
          </form>
        </div>
      </div>
    </section>
  );
}
