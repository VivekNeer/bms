import CarouselLibrary from "@/components/CarouselLibrary";

const movies = [
    { name: "Chavva", image: "movie1.jpg", genre: "Action" },
    { name: "Middle class", image: "movie2.jpg", genre: "Drama" },
    { name: "Disney Snow White", image: "movie3.jpg", genre: "Comedy" },
    { name: "The Diplomat", image: "movie4.jpg", genre: "Horror" },
    { name: "Court: State V Nobody", image: "movie5.jpg", genre: "Sci-Fi" },
    { name: "Salaar", image: "movie6.jpg", genre: "Romance" },
    { name: "Veera Dheera", image: "movie7.jpg", genre: "Thriller" },
    { name: "Officer On Duty", image: "movie8.jpg", genre: "Fantasy" },
    { name: "Dragon", image: "movie9.jpg", genre: "Mystery" },
    { name: "L2: EMPURAAN", image: "movie10.jpg", genre: "Adventure" },
  ];



export default function MoviesPage() {
  return (
    <CarouselLibrary 
      title="Recommended Movies" 
      items={movies} 
    />
  );
}
