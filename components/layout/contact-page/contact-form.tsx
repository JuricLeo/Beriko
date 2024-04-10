import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactForm() {
  return (
    <div className="bg-primary/20 pb-20">
      <section className="w-[90%] mx-auto">
        <div className="md:py-16 py-10 ">
          <h1 className="text-center font-extrabold text-4xl">
            Kontakt informacije
          </h1>
        </div>
        <div className="flex ">
          <Image
            src="/images/garage1.jpeg"
            alt="Carousel image"
            width={10}
            height={10}
            className="hidden lg:block w-[350px] h-[500px] 2xl:w-[700px] 2xl:h-[600px]"
          />
          <div className="bg-white w-full lg:w-[60%] h-[45rem] sm:h-[35rem] lg:ml-48 relative shadow-md  sm:mt-60 md:mt-0">
            <div className=" ml-8 pt-16">
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
        </div>
      </section>
    </div>
  );
}
