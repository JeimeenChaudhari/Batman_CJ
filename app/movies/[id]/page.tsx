import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionTitle from '../../components/SectionTitle';
import batmanData from '../../data/batmanData';

// Define the types for the page props
interface MoviePageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return batmanData.movies.map((movie) => ({
    id: movie.id.toString(),
  }));
}

export default function MoviePage({ params }: MoviePageProps) {
  const movieId = parseInt(params.id);
  const movie = batmanData.movies.find((m) => m.id === movieId);

  if (!movie) {
    notFound();
  }

  // Mock streaming links - in a real app, these would come from your database
  const streamingLinks = [
    { name: 'Netflix', url: 'https://www.netflix.com', icon: '/images/netflix-icon.png' },
    { name: 'HBO Max', url: 'https://www.hbomax.com', icon: '/images/hbo-icon.png' },
    { name: 'Amazon Prime', url: 'https://www.amazon.com/Prime-Video', icon: '/images/prime-icon.png' },
    { name: 'Disney+', url: 'https://www.hotstar.com/in/home', icon: '/images/disney-icon.png' },
  ];

  // Mock trailer URLs - in a real app, these would come from your database
  const trailerUrl = movie.id === 1 
    ? "https://www.youtube.com/embed/neY2xVmOfUM" 
    : movie.id === 2 
    ? "https://www.youtube.com/embed/EXeTwQWrcwY" 
    : movie.id === 3 
    ? "https://www.youtube.com/embed/GokKUqLcvD8" 
    : movie.id === 4 
    ? "https://www.youtube.com/embed/0WWzgGyAH6Y" 
    : "https://www.youtube.com/embed/mqqft2x_Aa4";

  return (
    <div className="min-h-screen flex flex-col bg-batman-black text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Movie Poster */}
        <div className="relative">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: `url(${movie.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.3)'
            }}
          ></div>
          
          <div className="batman-container relative z-10 py-16 md:py-24">
            <Link href="/movies" className="inline-flex items-center text-batman-yellow mb-6 hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Movies
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Movie Poster */}
              <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Movie Details */}
              <div className="w-full md:w-2/3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-batman-yellow">
                  {movie.title}
                </h1>
                <div className="flex flex-wrap items-center mb-4">
                  <span className="text-xl mr-4">{movie.year}</span>
                  <span className="text-xl">Director: {movie.director}</span>
                </div>
                <p className="text-lg md:text-xl mb-8 text-gray-300">
                  {movie.description}
                </p>
                
                {/* Watch Now Section */}
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4 text-batman-yellow">Watch Now</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {streamingLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <div className="w-12 h-12 mb-2 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-center">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trailer Section */}
        <section className="py-16 bg-gray-900">
          <div className="batman-container">
            <SectionTitle title="Official Trailer" />
            <div className="mt-8 aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                className="w-full h-full"
                src={trailerUrl}
                title={`${movie.title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
        
        {/* Related Content Section */}
        <section className="py-16">
          <div className="batman-container">
            <SectionTitle title="More Batman Movies" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {batmanData.movies
                .filter(m => m.id !== movie.id)
                .slice(0, 3)
                .map(relatedMovie => (
                  <div key={relatedMovie.id} className="batman-card group">
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={relatedMovie.image}
                        alt={relatedMovie.title}
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-white">{relatedMovie.title}</h3>
                        <span className="text-batman-yellow font-bold">{relatedMovie.year}</span>
                      </div>
                      <div className="flex justify-end">
                        <Link 
                          href={`/movies/${relatedMovie.id}`}
                          className="text-batman-yellow hover:underline text-sm font-bold"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 