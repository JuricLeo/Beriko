import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function Timeline() {
  return (
    <TracingBeam className="px-10 md:px-0  mt-24 ">
      <div className=" lg:max-w-10xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div
            key={`content-${index}`}
            className={`mb-10 md:flex p-0 md:items-center md:justify-center  ${
              index % 2 === 0 ? "md:flex-row " : "md:flex-row-reverse"
            }`}
          >
            <div className="md:w-6/12 px-4">
              {item.badge && item.badge.trim() !== "" && (
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>
              )}

              <p className="text-xl mb-4 font-bold">{item.title}</p>
              <p> {item.description}</p>
            </div>

            <div className="text-sm prose prose-sm dark:prose-invert md:w-6/12 flex items-center justify-center">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="700"
                  width="500"
                  className="rounded-r-md"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "OSNOVAN BERIKO",
    description: (
      <div className="space-y-3">
        <p className="leading-7">
          Beriko nije samo tvrtka - mi smo zajednica entuzijasta, stručnjaka i
          vizionara koji dijele istu strast prema tehnologiji. Naše vrijednosti,
          poput inovacije, integriteta i održivosti, utkane su u sve što radimo.
          S ponosom gradimo mostove između ideja i realizacije, povezujući ljude
          s tehnologijom na način koji nadilazi samo poslovanje.
        </p>
      </div>
    ),
    badge: "28.10.2003.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SAVRŠEN IZBOR",
    description: (
      <div className="space-y-3">
        <p>
          U proteklih deset godina prometnuli smo se u svojevrsnog lidera na
          tržištu montažnih objekata u Hrvatskoj.
        </p>
        <p>
          Omogućujemo Vam da na najjednostavniji i najpovoljniji način dođete do
          svoje montažne garaže, garažnih vrata, te svega ostalog što je
          potrebno za vaš moderan montažni objekt.
        </p>
      </div>
    ),
    badge: "",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "NAŠ CILJ",

    description: (
      <>
        <p className="leading-7">
          U središtu našeg cilja nalazi se kontinuirana predanost izvrsnosti i
          kvaliteti. Naš tim stručnjaka, s bogatim iskustvom u različitim
          područjima tehnologije, posvećen je pružanju rješenja koja nadmašuju
          očekivanja naših klijenata. Svaki projekt koji preuzimamo nije samo
          izazov, već prilika za stvaranje nečeg izvanrednog.
        </p>
      </>
    ),
    badge: "",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "VIZIJA",

    description: (
      <div className="space-y-3">
        <p className="leading-7">
          Kroz svaki korak našeg puta, ostajemo predani ideji da tehnologija
          treba biti pristupačna svima. Za bolju budućnost - jedan u kojem su
          inovacije dostupne svima, potičući rast i napredak u zajednici. Mi
          nismo samo tvrtka. Mi smo pokretač promjena.
        </p>
        <p className="leading-7">Dobrodošli u naš svijet.</p>
      </div>
    ),
    badge: "",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
