import Banner from "@/components/Banner";
import CarouselComponent from "@/components/CarouselComponent";
import CarouselLibrary from "@/components/CarouselLibrary";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main>
      <CarouselComponent />
      <div className="bg-[#F5F5F5] mb-6">
        <div className="mb-0">
          <CarouselLibrary/>
          <Banner />
        </div>
      </div >
    </main>
  );
}
