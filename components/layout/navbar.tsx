"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <main className="top-0 left-0 w-full shadow-xl">
      <div className="px-4 md:px-32 py-4 flex justify-between items-center">
        <div className="w-[200px] h-[60px] relative bg-slate-200">
          <Image
            alt=""
            className="object-contain rounded-md"
            src="/logo.png"
            layout="fill"
          />
        </div>
        <div className="gap-x-10 mr-10 hidden lg:flex">
          <p>
            <Link href="#">Naslovna</Link>
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
        </div>
        <div className="flex items-center gap-x-4">
          <div className="hidden items-center gap-x-4 md:flex">
            <ModeToggle />
            <Button>
              <Link href="#">Contact</Link>
            </Button>
          </div>
          <RxHamburgerMenu
            size={30}
            className={open ? "hidden" : "block lg:hidden cursor-pointer"}
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      {/* <div>
        <div
          className={`flex w-[300px] text-white z-20 uppercase flex-col h-full absolute navigation-bg right-0 top-0 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
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
            <div className="flex items-center gap-x-4 md:hidden pt-12">
              <Button variant="secondary">
                <Link href="#">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          open
            ? "inset-0 bg-opacity-75 bg-black w-full h-full absolute z-10"
            : "hidden"
        }
      ></div> */}
    </main>
  );
}
