import Banner from "@/components/Banner";
import CarouselComponent from "@/components/CarouselComponent";
import MoviesPage from "@/components/MovieCarousel";
import StandupPage from "@/components/StandupCarousel";

export default function Home() {
  return (
    <main>
      <CarouselComponent />
      <div className="bg-[#F5F5F5] mb-6">
        <div className="mb-0">
          <MoviesPage/>
          <Banner />
          <StandupPage/>
        </div>
      </div >
    </main>
  );
}
