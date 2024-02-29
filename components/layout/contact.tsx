"use client";

import { Button } from "../ui/button";
import { toast } from "sonner";
import axios from "axios";

export default function contact() {
  interface FormData {
    [key: string]: string;
  }

  return (
    <section className="w-full bg-primary px-4 md:px-32 py-16">
      <div className="bg-gradient-to-b from-[#BDDCFF] to-primary rounded-md p-16 flex flex-col xl:flex-row justify-center gap-x-24 items-center">
        <div className="text-center text-3xl py-8 space-y-6 lg:py-0 text-[#0D015B]">
          <h1 className="text-3xl">Pošaljite nam upit!</h1>
          <p className="text-xl">
            Imate pitanja, prijedloge ili želite ostati u toku s našim
            novostima? Pišite nam putem donjeg obrasca i javit ćemo vam se u
            najkraćem mogućem roku!
          </p>
        </div>
        <form  method="post">
          <div className="flex gap-x-6">
            <div className="flex flex-col mb-3">
              <label htmlFor="name" className="py-3 text-[#0D015B]">
                Ime
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="lg:w-[263px] h-[50px] pl-4 rounded-xl"
                placeholder="Ime"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="surname" className="py-3 text-[#0D015B]">
                Prezime
              </label>
              <input
                id="surname"
                type="text"
                name="surname"
                className="lg:w-[263px] h-[50px] pl-4 rounded-xl"
                placeholder="Prezime"
              />
            </div>
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="email" className="py-3 text-[#0D015B]">
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              className="lg:max-w-[550px] h-[50px] pl-4 rounded-xl"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="message" className="py-3 text-[#0D015B]">
              Upit
            </label>
            <textarea
              id="message"
              name="message"
              className="mlgd:max-w-[550px] h-[200px] pl-4 pt-3 rounded-xl"
              placeholder="Upit"
            />
          </div>
          <div className="flex justify-center md:block mt-8">
            <Button
              type="submit"
              variant="secondary"
              className="text-black w-full py-4 rounded-3xl md:w-[200px]"
            >
              Pošalji
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
