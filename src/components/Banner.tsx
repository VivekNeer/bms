"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full mx-auto max-w-[1240px] max-h-[100px]">
      <Image
        src="/banner.png"
        alt="Promotional Banner"
        width={1240}
        height={100}
        className="w-full h-[100px] object-cover rounded-lg"
      />
    </div>
  );
}
