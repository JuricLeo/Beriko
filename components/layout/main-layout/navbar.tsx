"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../../mode-toggle";
import { Button } from "../../ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

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
    <nav className="max-w-full fixed top-0 left-0 right-0 z-50 bg-black/30 text-newWhite">
      <div
        className={`px-3 md:px-10 lg:px-24 py-6 flex justify-between items-center transition-all duration-300 ${
          scrolling ? "bg-[color:var(--light)] text-newBlack" : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <Image alt="Beriko" src="/logo.png" width={200} height={200} />
          <div className="gap-x-10 mr-10 hidden lg:flex">
            <Link href="/">Naslovna</Link>
            <Link href="/about">O nama</Link>
            <Link href="/reviews">Recenzije</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center">
                Ostalo <ChevronDown className="w-4 h-4 ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/gallery">
                  <DropdownMenuItem>Galerija</DropdownMenuItem>
                </Link>
                <Link href="/blog">
                  <DropdownMenuItem>Blog</DropdownMenuItem>
                </Link>
                <Link href="/products">
                  <DropdownMenuItem>Katalog proizvoda</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="hidden items-center gap-x-4 md:flex">
            <div className="text-newBlack dark:text-newWhite">
              <ModeToggle />
            </div>
            <Link href="/contact">
              <Button>Contact</Button>
            </Link>
          </div>
          <RxHamburgerMenu
            size={30}
            className="block lg:hidden cursor-pointer text-white"
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
              <div className="flex items-center gap-x-4 md:hidden pt-12 text-black dark:text-white">
                <Button variant="secondary">
                  <Link href="#">Contact</Link>
                </Button>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
