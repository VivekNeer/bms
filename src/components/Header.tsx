import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import SearchBar from "@/components/searchbar";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import LocationPopup from "@/components/ui/LocationPopup";

export default function Header() {
  return (
    <header className="flex items-center justify-center p-4 bg-white shadow-md">
      <div className="flex items-center gap-6 w-2/3">
        <Logo className="w-48 h-16" />

        <div className="flex-grow max-w-lg">
          <SearchBar />
        </div>

        <LocationPopup />
      </div>

      <div className="flex items-center gap-4">
        <SignedOut>
          <Button asChild className="bg-red-500 text-white hover:bg-red-600">
            <SignInButton />
          </Button>
          <Button asChild className="bg-red-500 text-white hover:bg-red-600">
            <SignUpButton />
          </Button>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
