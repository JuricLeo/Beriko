"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

export default function contact() {
  return (
    <section className="relative py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24 bg-gradient-to-b from-primary/30 to-primary/60 h-[68rem] sm:h-[58rem] lg:h-[40rem]">
      <div className="bg-primary flex-col lg:hidden top-0 text-white w-[70%] h-[21rem] mt-10 absolute z-10 shadow-md p-8 mx-auto left-0 right-0">
        <h2 className="text-2xl text-center font-semibold">Kontakt Info</h2>
        <div className="mt-6 space-y-4">
          <div className="flex items-center md:items-top">
            <MapPin className="mr-6 w-9 h-9 sm:w-4 sm:h-4" />
            <p>HR-48362 KLOŠTAR PODRAVSKI, Sjepana Radića 2</p>
          </div>
          <div className="flex items-center">
            <Mail className="mr-6 w-4 h-4" />
            <p>beriko@beriko.com</p>
          </div>
          <div className="flex items-center">
            <Phone className="mr-6 w-4 h-4" />
            <p>+385 98 64 62 60</p>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <Link
            href="#"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <FaFacebookF size={10} />
          </Link>
          <Link
            href="#"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <FaXTwitter size={10} />
          </Link>
          <Link
            href="#"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <IoLogoInstagram size={10} />
          </Link>
        </div>
      </div>
      {/* big screen */}
      <div className="bg-primary hidden lg:block text-white w-[25rem] h-[30rem] lg:mt-10 absolute z-10 shadow-md p-8">
        <h2 className="text-2xl font-semibold">Kontakt Info</h2>
        <div className="mt-16 space-y-8">
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
        <div className="flex justify-start mt-16 space-x-4">
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
      <div className="bg-white w-full lg:w-[80%] h-[45rem] sm:h-[35rem] lg:ml-48 relative shadow-md mt-72 sm:mt-60 lg:mt-0">
        <div className="lg:ml-60 ml-8 pt-16">
          <h1 className="text-2xl text-center mr-10 sm:mr-0 sm:text-left font-semibold">
            Pošaljite nam upit!
          </h1>
          <form className="flex flex-col">
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 mt-8">
              <div className="flex flex-col flex-1 pr-8">
                <label className="text-primary text-xs">Ime</label>
                <input
                  className="border-b border-newBlack py-2"
                  type="text"
                  placeholder="Bernard"
                />
              </div>
              <div className="flex flex-col flex-1 pr-8">
                <label className="text-primary text-xs">Prezime</label>
                <input
                  className="border-b border-newBlack py-2"
                  type="text"
                  placeholder="Domović"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 mt-8">
              <div className="flex flex-col flex-1 pr-8">
                <label className="text-primary text-xs">Email</label>
                <input
                  className="border-b border-newBlack py-2"
                  type="email"
                  placeholder="beriko@beriko.com"
                />
              </div>
              <div className="flex flex-col flex-1 pr-8">
                <label className="text-primary text-xs">Telefon</label>
                <input
                  className="border-b border-newBlack py-2"
                  type="phone"
                  placeholder="+385 98 64 62 60"
                />
              </div>
            </div>
            <textarea
              placeholder="Upišite svoj upit..."
              className="resize-none border-b border-newBlack py-2 mt-6 mr-8 h-32"
            ></textarea>
            <Button className="w-24 mt-12 sm:mt-8 ml-auto mr-8 sm:ml-0 sm:mr-0">
              Pošalji
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
