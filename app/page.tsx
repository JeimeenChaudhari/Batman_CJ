import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import MovieCard from "./components/MovieCard";
import CharacterCard from "./components/CharacterCard";
import GadgetCard from "./components/GadgetCard";
import batmanData from "./data/batmanData";

export default function Home() {
  // Get featured movies (first 3)
  const featuredMovies = batmanData.movies.slice(0, 3);
  
  // Get featured characters (first 3)
  const featuredCharacters = batmanData.characters.slice(0, 3);
  
  // Get featured gadgets (first 3)
  const featuredGadgets = batmanData.gadgets.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Biography Section */}
        <section className="py-16 bg-batman-black">
          <div className="batman-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle 
                  title="THE BATMAN" 
                  subtitle="The vigilante protector of Gotham City, a tortured, brooding hero."
                />
                <p className="text-gray-300 mb-6">
                  {batmanData.biography.description}
                </p>
                <div className="space-y-4 text-gray-300">
                  <p><span className="text-batman-yellow font-bold">Real Name:</span> {batmanData.biography.realName}</p>
                  <p><span className="text-batman-yellow font-bold">First Appearance:</span> {batmanData.biography.firstAppearance}</p>
                  <p><span className="text-batman-yellow font-bold">Created by:</span> {batmanData.biography.creator}</p>
                </div>
                <Link href="/biography" className="batman-button inline-block mt-8">
                  Full Biography
                </Link>
              </div>
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <Image
                  src="/images/batMann.jpg"
                  alt="Batman"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Movies Section */}
        <section className="py-16 bg-gradient-to-b from-batman-black to-batman-gray">
          <div className="batman-container">
            <SectionTitle 
              title="BATMAN MOVIES" 
              subtitle="Explore the cinematic universe of the Dark Knight."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/movies" className="batman-button">
                View All Movies
              </Link>
            </div>
          </div>
        </section>
        
        {/* Characters Section */}
        <section className="py-16 bg-batman-black">
          <div className="batman-container">
            <SectionTitle 
              title="KEY CHARACTERS" 
              subtitle="Meet the allies and enemies of the Dark Knight."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCharacters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/characters" className="batman-button">
                View All Characters
              </Link>
            </div>
          </div>
        </section>
        
        {/* Gadgets Section */}
        <section className="py-16 bg-gradient-to-b from-batman-gray to-batman-black">
          <div className="batman-container">
            <SectionTitle 
              title="BATMAN'S GADGETS" 
              subtitle="The high-tech tools that help Batman fight crime."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredGadgets.map((gadget) => (
                <GadgetCard key={gadget.id} gadget={gadget} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/gadgets" className="batman-button">
                View All Gadgets
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
