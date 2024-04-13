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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleSheet = () => setIsSheetOpen(prev => !prev);
  const closeSheet = () => setIsSheetOpen(false);

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
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger onClick={toggleSheet}>
              <RxHamburgerMenu
                size={30}
                className="block lg:hidden cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="bg-[#37507a] text-slate-200">
              <SheetHeader>
                <SheetTitle className="text-newWhite/60">Navigacija</SheetTitle>
                <SheetDescription>
                  <div className="space-y-10 flex flex-col mt-[10%] p-8 text-lg text-newWhite">
                    <Link href="/" onClick={closeSheet}>Naslovna</Link>
                    <Link href="/about" onClick={closeSheet}>O nama</Link>
                    <Link href="/reviews" onClick={closeSheet}>Recenzije</Link>
                    <Link href="/gallery" onClick={closeSheet}>Galerija</Link>
                    <Link href="/blog" onClick={closeSheet}>Blog</Link>
                    <Link href="/products" onClick={closeSheet}>Katalog proizvoda</Link>
                    <div className="flex items-center justify-center md:justify-left gap-x-4 md:hidden pt-12 text-black dark:text-white">
                      <Button variant="secondary">
                        <Link href="/contact" onClick={closeSheet}>Contact</Link>
                      </Button>
                      <ModeToggle />
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
