import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import GadgetCard from "../components/GadgetCard";
import batmanData from "../data/batmanData";

export default function GadgetsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-batman-black text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: "url('/TheDarkknight.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.3)'
            }}
          ></div>
          
          <div className="batman-container relative z-10 py-24 md:py-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-batman-yellow">
              BATMAN'S GADGETS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl">
              Explore the high-tech arsenal that helps Batman fight crime in Gotham City.
            </p>
          </div>
        </div>
        
        {/* Gadgets Section */}
        <section className="py-16 bg-batman-black">
          <div className="batman-container">
            <SectionTitle 
              title="BATMAN'S ARSENAL" 
              subtitle="The cutting-edge technology that gives Batman his edge."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {batmanData.gadgets.map((gadget) => (
                <GadgetCard key={gadget.id} gadget={gadget} />
              ))}
            </div>
            
            <div className="mt-16">
              <SectionTitle 
                title="BATMAN'S TECHNOLOGY" 
                subtitle="The science behind Batman's crime-fighting equipment."
              />
              
              <div className="space-y-8 text-gray-300">
                <p>
                  Batman relies on an impressive array of gadgets and technology to compensate for his lack of superpowers. These tools, often developed by Wayne Enterprises' Applied Sciences Division or by Batman himself, give him the edge he needs to combat Gotham's criminal element.
                </p>
                
                <p>
                  The Batmobile is perhaps Batman's most iconic piece of equipment. This high-performance vehicle has evolved over the years from a modified production car to a custom-built, heavily armored tank with military-grade weaponry and advanced stealth capabilities.
                </p>
                
                <p>
                  Batman's utility belt is another essential tool, containing a variety of gadgets including Batarangs (bat-shaped throwing weapons), smoke pellets, a grappling gun, forensic tools, and various other devices that help him in his crime-fighting activities.
                </p>
                
                <p>
                  The Batsuit itself is a technological marvel, offering protection against bullets, knives, fire, and electricity while maintaining flexibility for combat. Modern iterations include enhanced strength, built-in communications systems, and various sensory enhancements.
                </p>
                
                <p>
                  Batman's arsenal continues to evolve with each new challenge he faces, demonstrating his adaptability and resourcefulness in his never-ending war on crime in Gotham City.
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