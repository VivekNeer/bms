"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = ["advert4.jpg", "advert1.jpg", "advert2.jpg", "advert3.jpg"];

export default function CarouselComponent() {
  return (
    <div className="relative w-full pt-3 pb-3 bg-[#EBEBEB]">
      <Carousel className="w-full">
        <CarouselContent className="flex gap-4">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="relative flex-none w-[1240px] h-[300px]"
            >
              <Image
                src={`/${image}`}
                alt={`Advertisement ${index + 1}`}
                width={1240}
                height={300}
                className="object-cover w-full h-full rounded-lg cursor-pointer"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
