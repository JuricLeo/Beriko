"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Image from "next/image";

export default function CustomerStatements() {
  const carouselRef = useRef(null);
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const restartAutoplay = () => {
    if (plugin.current) {
      plugin.current.play();
    }
  };

  const images = [
    "/images/home-carousel/image1.jpg",
    "/images/home-carousel/image2.jpeg",
    "/images/home-carousel/image3.jpeg",
    "/images/home-carousel/image4.jpeg",
    "/images/home-carousel/image5.jpeg",
  ];

  return (
    <section className="flex justify-center">
      <Carousel
        ref={carouselRef}
        plugins={[plugin.current]}
        className="w-2/3"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={restartAutoplay}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-1 basis-3/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={image}
                        alt="Carousel image"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
