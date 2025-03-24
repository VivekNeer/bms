import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import SearchBar from "@/components/ui/searchbar";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import LocationPopup from "@/components/ui/LocationPopup";
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Primary Navbar */}
      <header className="flex flex-col bg-white shadow-md">
        <div className="flex items-center justify-center p-2">
          <div className="flex items-center gap-4 w-2/3">
            <Logo />
            
            <div className="flex-grow max-w-md">
              <SearchBar />
            </div>

            <LocationPopup />
          </div>

          <div className="flex items-center gap-2 ml-6">
            <SignedOut>
              <Button asChild className="bg-red-500 text-white hover:bg-red-600 text-sm px-4 py-2">
                <SignInButton />
              </Button>
              <Button asChild className="bg-red-500 text-white hover:bg-red-600 text-sm px-4 py-2">
                <SignUpButton />
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        {/* Secondary Navbar */}
        <nav className="flex items-center justify-around px-6 py-2 bg-gray-100 text-gray-700 text-sm">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            {["Movies", "Stream", "Events", "Plays", "Sports", "Activities"].map(
              (item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-red-500">
                  {item}
                </Link>
              )
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {["List Your Show", "Corporates", "Offers", "Gift Cards"].map(
              (item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-red-500">
                  {item}
                </Link>
              )
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
