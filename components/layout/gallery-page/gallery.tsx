"use client";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Image from "next/image";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { useSession } from "next-auth/react";

const images = [
  {
    src: "/images/gallery/image1.jpg",
    alt: "logo",
  },
  {
    src: "/images/gallery/image2.jpeg",
    alt: "logo",
  },
  {
    src: "/images/gallery/image3.jpeg",
    alt: "logo",
  },
  {
    src: "/images/gallery/image4.jpeg",
    alt: "logo",
  },
  {
    src: "/images/gallery/image5.jpeg",
    alt: "logo",
  },
  {
    src: "/images/gallery/image1.jpg",
    alt: "logo",
  },
  {
    src: "/images/gallery/image2.jpeg",
    alt: "logo",
  },
  {
    src: "/images/gallery/image3.jpeg",
    alt: "logo",
  },
  {
    src: "/images/gallery/image4.jpeg",
    alt: "logo",
  },
  {
    src: "/images/gallery/image5.jpeg",
    alt: "logo",
  },
  {
    src: "/images/gallery/image1.jpg",
    alt: "logo",
  },
  {
    src: "/images/gallery/image2.jpeg",
    alt: "logo",
  },
  {
    src: "/images/gallery/image3.jpeg",
    alt: "logo",
  },
  {
    src: "/images/gallery/image4.jpeg",
    alt: "logo",
  },
  {
    src: "/images/gallery/image5.jpeg",
    alt: "logo",
  },
];

export default function Gallery() {
  const { data: session } = useSession();

  return (
    <section className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24">
      <div>
        <h1 className="text-center text-4xl font-semibold">Galerija</h1>
        <p className="text-center font-lg text-slate-400 mt-4 mb-10">
          Pogledajte naš rad kojim se ponosimo!
        </p>
      </div>
      {session && (
        <button className="mb-4">
          <PlusCircle size={30} className="text-[color:var(--analogous)]" />
        </button>
      )}
      <LightGallery
        speed={500}
        plugins={[lgThumbnail]}
        elementClassNames="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {images.map(({ src, alt }) => (
          <Link href={src} key={src}>
            <Image
              alt={alt}
              src={src}
              width={100}
              height={100}
              className="w-full block"
            />
          </Link>
        ))}
      </LightGallery>
    </section>
  );
}
