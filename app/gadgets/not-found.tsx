import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GadgetNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-batman-black">
        <div className="batman-container py-24 md:py-32 text-center">
          <div className="w-24 h-24 mx-auto mb-8 bg-batman-yellow rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-12 h-12">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l11-11 1.5 1.5-11 11-1.5-1.5z" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-batman-yellow">
            GADGET NOT FOUND
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Even Batman can't find this gadget. It may have been moved to the Batcave or doesn't exist.
          </p>
          
          <Link href="/gadgets" className="batman-button">
            Return to Gadgets
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 