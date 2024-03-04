import { Button } from "../../ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function contact() {
  return (
    <section className="relative w-full bg-neutral-950 px-4 p-32">
      <BackgroundBeams className="absolute inset-0 z-0" />
      <div className="z-10">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Pošaljite nam upit!
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-8 text-sm text-center relative z-10">
            Imate pitanja, prijedloge ili želite ostati u toku s našim
            novostima? Pišite nam putem donjeg obrasca i javit ćemo vam se u
            najkraćem mogućem roku!
          </p>
          <form method="post">
            <div className="flex gap-x-6">
              <div className="flex flex-col flex-1 mb-3">
                <label htmlFor="name" className="py-3 text-neutral-500">
                  Ime
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="h-[50px] pl-4 rounded-xl z-10"
                  placeholder="Ime"
                />
              </div>
              <div className="flex flex-col flex-1 mb-3">
                <label htmlFor="surname" className="py-3 text-neutral-500">
                  Prezime
                </label>
                <input
                  id="surname"
                  type="text"
                  name="surname"
                  className="h-[50px] pl-4 rounded-xl z-10"
                  placeholder="Prezime"
                />
              </div>
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="email" className="py-3 text-neutral-500">
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                className="h-[50px] pl-4 rounded-xl z-10"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="message" className="py-3 text-neutral-500">
                Upit
              </label>
              <textarea
                id="message"
                name="message"
                className="h-[200px] pl-4 pt-3 rounded-xl z-10"
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
      </div>
    </section>
  );
}
