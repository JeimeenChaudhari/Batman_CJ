import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function MovieNotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-batman-black text-white">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="batman-container py-16 text-center">
          <div className="mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-batman-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-batman-yellow">Movie Not Found</h1>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            The Batman movie you're looking for seems to have disappeared into the shadows of Gotham.
          </p>
          <Link 
            href="/movies" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-batman-yellow hover:bg-yellow-500 transition-colors"
          >
            Return to Movies
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 