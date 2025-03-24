import CarouselLibrary from "@/components/CarouselLibrary";


const standupShows = [
    { name: "Kisi Ko Batana Mat ", image: "standup.jpg", venue: "Multiple Venues" },
    { name: "A Variety Stand-up Show", image: "standup2.jpg", venue: "Chalta Hai Comedy" },
    { name: "Comedy Ladder Ft. Anubhav Singh Bassi", image: "standup3.jpg", venue: "Venue To Be Announced" },
    { name: "Stand-up Show", image: "standup4.jpg", venue: "Multiple Venues" },
    { name: "Balwant Gargi Auditorium", image: "standup5.jpg", venue: "Mangalore" },
    { name: "DKCA Hall", image: "standup6.jpg", venue: "Mangaluru" },
    { name: "OML Comedy Pit Stop", image: "standup7.jpg", venue: "Bathinda" },
  ];
  

  export default function StandupPage() {
    return (
      <CarouselLibrary 
        title="Upcoming Stand-up Shows" 
        items={standupShows} 
      />
    );
  }
  