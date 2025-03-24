"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import SearchBar from "@/components/ui/searchbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const locations = [
  { name: "Bangalore", logo: "/bangalore.svg" },
  { name: "Mumbai", logo: "/mumbai.svg" },
  { name: "Delhi", logo: "/delhi.svg" },
];

export default function LocationPopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gray-900 text-white">Choose Location</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader className="text-lg font-semibold">
          Select Your Location
        </DialogHeader>
        <SearchBar />
        <div className="grid grid-cols-3 gap-4 mt-4">
          {locations.map((loc) => (
            <Button
              key={loc.name}
              className="flex flex-col items-center justify-center p-4 bg-gray-100 hover:bg-gray-200 w-32 h-32 rounded-lg"
            >
              <Image
                src={loc.logo}
                alt={`${loc.name} Logo`}
                width={80}
                height={80}
                className="object-contain"
              />
              <span className="mt-2 text-sm font-medium text-black">{loc.name}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
