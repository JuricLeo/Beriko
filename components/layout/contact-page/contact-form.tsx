"use client";

import { Button } from "@/components/ui/button";

export default function ContactForm() {
  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData: Record<string, string> = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!(field instanceof HTMLInputElement) || !field.name) return;
      formData[field.name] = field.value;
    });
    await fetch("/api/mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  }  

  return (
    <section className="py-5 lg:py-12 px-3 md:px-10 lg:px-24 bg-primary/20 text-black">
      <section className="w-[90%] mx-auto">
        <div className=" py-10 ">
          <h1 className="text-center pb-5 md:pb-10 font-semibold text-4xl">
            Kontakt informacije
          </h1>
        </div>
        <div className="bg-white w-full h-[45rem] sm:h-[35rem] shadow-md">
          <div className="ml-8 pt-16">
            <h1 className="text-2xl text-center mr-10 sm:mr-0 sm:text-left font-semibold">
              Pošaljite nam upit!
            </h1>
            <form method="post" onSubmit={handleOnSubmit} className="flex flex-col">
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
              <Button type="submit" className="w-24 mt-12 sm:mt-8 ml-auto mr-8 sm:ml-0 sm:mr-0">
                Pošalji
              </Button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}
