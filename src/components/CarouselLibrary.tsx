"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const movies = [
  { name: "Chavva", image: "movie1.jpg", genre: "Action" },
  { name: "Middle class", image: "movie2.jpg", genre: "Drama" },
  { name: "Disney Snow White", image: "movie3.jpg", genre: "Comedy" },
  { name: "The Diplomat", image: "movie4.jpg", genre: "Horror" },
  { name: "Court : State V Nobody", image: "movie5.jpg", genre: "Sci-Fi" },
  { name: "Salaar", image: "movie6.jpg", genre: "Romance" },
  { name: "Veera Dheera", image: "movie7.jpg", genre: "Thriller" },
  { name: "Officer On Duty", image: "movie8.jpg", genre: "Fantasy" },
  { name: "Dragon", image: "movie9.jpg", genre: "Mystery" },
  { name: "L2:EMPURAAN", image: "movie10.jpg", genre: "Adventure" },
];

export default function CarouselLibrary() {
  return (
    <div className="relative w-full pt-8 pb-8 bg-[#F5F5F5] overflow-hidden">
      <Carousel className="w-full mx-auto max-w-[1240px]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Recommended Movies
        </h2>

        {/* Carousel Content */}
        <CarouselContent className="flex gap-x-4">
          {movies.map((movie, index) => (
            <CarouselItem
              key={index}
              className="relative flex-none w-[222.4px] h-[420px] flex flex-col items-center"
            >
              <Image
                src={`/${movie.image}`}
                alt={movie.name}
                width={222.4}
                height={378.083}
                className="object-cover w-full h-[378.083px] rounded-lg cursor-pointer"
              />

              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {movie.name}
                </h3>
                <p className="text-sm text-gray-500">{movie.genre}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Shadcn Inbuilt Controls */}
        <CarouselPrevious className="absolute left-[-50px]" />
        <CarouselNext className="absolute right-[-50px]" />
      </Carousel>
    </div>
  );
}
