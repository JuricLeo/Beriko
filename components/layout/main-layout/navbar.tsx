"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../../mode-toggle";
import { Button } from "../../ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolling) {
        setScrolling(true);
      } else if (window.scrollY === 0 && scrolling) {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <nav className="max-w-full fixed top-0 left-0 right-0 z-50 transition-all duration-700">
      <div
        className={`px-3 md:px-10 lg:px-32 py-4 flex justify-between items-center ${
          scrolling ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="w-[200px] h-[60px] relative rounded-md bg-slate-200">
          <Image
            alt="Beriko"
            className="object-contain "
            src="/logo.png"
            layout="fill"
          />
        </div>
        <div className="gap-x-10 mr-10 hidden lg:flex">
          <p>
            <Link href="/">Naslovna</Link>
          </p>
          <p>
            <Link href="#">O nama</Link>
          </p>
          <p>
            <Link href="#">Recenzije</Link>
          </p>
          <p>
            <Link href="#">Galerija</Link>
          </p>
          <p>
            <Link href="#">Blog</Link>
          </p>
          <p>
            <Link href="#">Katalog proizvoda</Link>
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="hidden items-center gap-x-4 md:flex">
            <ModeToggle />
            <Link href="/contact">
              <Button>Contact</Button>
            </Link>
          </div>
          <RxHamburgerMenu
            size={30}
            className="block lg:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 bg-opacity-75 bg-black w-full h-full z-10">
          <div className="flex w-[300px] bg-[#37507a] text-white z-20 uppercase flex-col h-full absolute right-0 top-0 transition-transform duration-300">
            <div className="flex items-center justify-between p-8">
              <p className="text-2xl">Navigacija</p>
              <IoMdClose
                size={26}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              />
            </div>
            <div className="space-y-10 flex flex-col mt-[10%] p-8 text-lg">
              <p>
                <Link href="#">Naslovna</Link>
              </p>
              <p className="whitespace-nowrap">
                <Link href="#">O nama</Link>
              </p>
              <p>
                <Link href="#">Recenzije</Link>
              </p>
              <p>
                <Link href="#">Galerija</Link>
              </p>
              <p>
                <Link href="#">Blog</Link>
              </p>
              <p>
                <Link href="#">Katalog proizvoda</Link>
              </p>
              <div className="flex items-center gap-x-4 md:hidden pt-12">
                <Button variant="secondary">
                  <Link href="#">Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
