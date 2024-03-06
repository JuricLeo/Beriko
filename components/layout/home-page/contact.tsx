"use client";

import { Button } from "../../ui/button";
import { toast } from "sonner";
import axios from "axios";

export default function contact() {
  interface FormData {
    [key: string]: string;
  }

  return (
    <section className="w-full bg-primary px-4 md:px-10 lg:px-32 py-16">
      <div className="bg-gradient-to-b from-[#BDDCFF] to-primary rounded-md p-10 flex flex-col xl:flex-row justify-center gap-x-24 items-center w-full ">
        <div className="text-center w-full text-3xl py-8 space-y-6 lg:py-0 text-[#0D015B]">
          <h1 className="text-3xl">Pošaljite nam upit!</h1>
          <p className="text-xl">
            Imate pitanja, prijedloge ili želite ostati u toku s našim
            novostima? Pišite nam putem donjeg obrasca i javit ćemo vam se u
            najkraćem mogućem roku!
          </p>
        </div>
        <form method="post" className="w-full md:w-10/12">
          <div className=" w-full md:flex md:justify-around lg:justify-start gap-x-10">
            <div className="flex flex-col flex-1 mb-5">
              <label htmlFor="name" className="text-[#0D015B]">
                Ime
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full h-[50px] pl-4 rounded-xl"
                placeholder="Ime"
              />
            </div>
            <div className="flex flex-col flex-1 mb-5">
              <label htmlFor="surname" className="text-[#0D015B]">
                Prezime
              </label>
              <input
                id="surname"
                type="text"
                name="surname"
                className="lg:w-full h-[50px] pl-4 rounded-xl"
                placeholder="Prezime"
              />
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="text-[#0D015B]">
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              className="w-full h-[50px] pl-4 rounded-xl"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className=" text-[#0D015B]">
              Upit
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full h-[200px] pl-4 resize-none pt-3 rounded-xl"
              placeholder="Upit"
            />
          </div>
          <div className="flex justify-start mt-8">
            <Button
              type="submit"
              variant="secondary"
              className="text-black w-full py-4  rounded-3xl md:w-4/12"
            >
              Pošalji
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
