import Image from "next/image";

export default function Logo() {
  return (
    <div className="h-12 w-36 flex items-center justify-center">
      <Image
        src="/bookmyshow-logo-vector.svg"
        alt="BookMyShow Logo"
        width={144}
        height={48}
        className="object-contain"
      />
    </div>
  );
}
