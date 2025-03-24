"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// Define a generic type for both Movies and Stand-up Shows
type ItemData = {
  name: string;
  image: string;
  genre?: string; // Optional for stand-up shows
  venue?: string; // Optional for movies
};

interface CarouselLibraryProps {
  title: string;
  items: ItemData[];
}

export default function CarouselLibrary({ title, items }: CarouselLibraryProps) {
  return (
    <div className="relative w-full pt-8 pb-8 bg-[#F5F5F5] overflow-hidden">
      <Carousel className="w-full mx-auto max-w-[1240px]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h2>

        {/* Carousel Content */}
        <CarouselContent className="flex gap-x-4">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="relative flex-none w-[222.4px] h-[420px] flex flex-col items-center"
            >
              <Image
                src={`/${item.image}`}
                alt={item.name}
                width={222.4}
                height={378.083}
                className="object-cover w-full h-[378.083px] rounded-lg cursor-pointer"
              />

              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  {item.genre ? `Genre: ${item.genre}` : `Venue: ${item.venue}`}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <CarouselPrevious className="absolute left-[-50px]" />
        <CarouselNext className="absolute right-[-50px]" />
      </Carousel>
    </div>
  );
}
