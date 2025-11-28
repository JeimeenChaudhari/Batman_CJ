import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import CharacterCard from "../components/CharacterCard";
import batmanData from "../data/batmanData";

export default function CharactersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-batman-black text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: "url('/images/batman-characters.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.3)'
            }}
          ></div>
          
          <div className="batman-container relative z-10 py-24 md:py-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-batman-yellow">
              BATMAN CHARACTERS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl">
              Meet the heroes, villains, and allies that populate Batman's world.
            </p>
          </div>
        </div>
        
        {/* Characters Section */}
        <section className="py-16 bg-batman-black">
          <div className="batman-container">
            <SectionTitle 
              title="KEY CHARACTERS" 
              subtitle="The most important figures in Batman's universe."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {batmanData.characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
            
            <div className="mt-16">
              <SectionTitle 
                title="THE BATMAN UNIVERSE" 
                subtitle="The rich tapestry of characters that make up Batman's world."
              />
              
              <div className="space-y-8 text-gray-300">
                <p>
                  Batman's world is populated by a diverse cast of characters, from his trusted allies to his dangerous enemies. Over the decades, these characters have evolved and developed, becoming iconic figures in their own right.
                </p>
                
                <p>
                  The "Bat-Family" consists of Batman's closest allies, including Alfred Pennyworth, his loyal butler and father figure; various Robins who have served as his sidekicks; Batgirl; and Nightwing, the grown-up identity of the first Robin, Dick Grayson. These characters support Batman in his mission and often operate independently as heroes in their own right.
                </p>
                
                <p>
                  Batman's rogues gallery is widely considered one of the most compelling collections of villains in comic book history. The Joker, his archenemy, is a chaotic and unpredictable criminal mastermind. Other notable villains include Catwoman, a cat burglar with a complex relationship with Batman; the Penguin, a crime lord with a bird-like appearance; the Riddler, who leaves puzzles and riddles at crime scenes; and Two-Face, a former district attorney whose face and personality were split in two after an acid attack.
                </p>
                
                <p>
                  The Gotham City Police Department, led by Commissioner James Gordon, represents the legitimate face of law enforcement in Gotham. While often outmatched by the city's criminal element, Gordon and a few honest cops work alongside Batman to protect the city.
                </p>
                
                <p>
                  These characters, along with many others, create a rich and complex world for Batman to navigate, filled with moral ambiguity, personal conflicts, and epic battles between good and evil.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 