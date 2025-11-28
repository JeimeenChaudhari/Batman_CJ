import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '../data/batmanData';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="batman-card group">
      <div className="relative h-80 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          {/* Fallback if image is not available */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
          </svg>
        </div>
        <Image
          src={movie.image}
          alt={movie.title}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{movie.title}</h3>
          <span className="text-batman-yellow font-bold">{movie.year}</span>
        </div>
        <p className="text-gray-300 text-sm mb-4">{movie.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Director: {movie.director}</span>
          <Link 
            href={`/movies/${movie.id}`}
            className="text-batman-yellow hover:underline text-sm font-bold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard; 