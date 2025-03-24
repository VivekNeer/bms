import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="h-12 w-36 flex items-center justify-center">
      <Image
        src="/bookmyshow-logo-vector.svg"
        alt="BookMyShow Logo"
        width={144}
        height={48}
        className="object-contain"
      />
    </Link>
  );
}
