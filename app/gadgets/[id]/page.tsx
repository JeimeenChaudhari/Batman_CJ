import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionTitle from "../../components/SectionTitle";
import batmanData from "../../data/batmanData";

interface GadgetPageProps {
  params: {
    id: string;
  };
}

export default function GadgetPage({ params }: GadgetPageProps) {
  const gadgetId = parseInt(params.id);
  
  // Find the gadget with the matching ID
  const gadget = batmanData.gadgets.find((g) => g.id === gadgetId);
  
  // If gadget not found, return 404
  if (!gadget) {
    notFound();
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-batman-black text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: `url('${gadget.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.3)'
            }}
          ></div>
          
          <div className="batman-container relative z-10 py-24 md:py-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-batman-yellow">
              {gadget.name.toUpperCase()}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl">
              {gadget.description}
            </p>
          </div>
        </div>
        
        {/* Gadget Details Section */}
        <section className="py-16 bg-batman-black">
          <div className="batman-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={gadget.image}
                  alt={gadget.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              
              <div>
                <SectionTitle 
                  title={gadget.name.toUpperCase()}
                  subtitle="Technical Specifications"
                />
                
                <div className="space-y-6 text-gray-300">
                  <p>
                    {gadget.description} This advanced piece of Batman's arsenal plays a crucial role in his crime-fighting activities throughout Gotham City.
                  </p>
                  
                  <div className="bg-batman-gray p-6 rounded-lg">
                    <h3 className="text-batman-yellow font-bold text-xl mb-4">Features</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Advanced Wayne Enterprises technology</li>
                      <li>Custom-built for Batman's specifications</li>
                      <li>Regularly upgraded with cutting-edge improvements</li>
                      <li>Designed for stealth and efficiency</li>
                    </ul>
                  </div>
                  
                  <p>
                    Like all of Batman's equipment, the {gadget.name.toLowerCase()} is constantly being refined and improved to meet the evolving challenges of Gotham's criminal underworld.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Link href="/gadgets" className="batman-button">
                    Back to All Gadgets
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Gadgets Section */}
        <section className="py-16 bg-gradient-to-b from-batman-gray to-batman-black">
          <div className="batman-container">
            <SectionTitle 
              title="OTHER GADGETS"
              subtitle="Explore more of Batman's arsenal"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {batmanData.gadgets
                .filter(g => g.id !== gadgetId)
                .slice(0, 3)
                .map(relatedGadget => (
                  <div key={relatedGadget.id} className="batman-card">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={relatedGadget.image}
                        alt={relatedGadget.name}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-white mb-2">{relatedGadget.name}</h3>
                      <Link 
                        href={`/gadgets/${relatedGadget.id}`}
                        className="text-batman-yellow hover:underline text-sm font-bold"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
