import Image from 'next/image';
import Link from 'next/link';
import { Character } from '../data/batmanData';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className="batman-card group">
      <div className="relative h-72 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          {/* Fallback if image is not available */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <Image
          src={character.image}
          alt={character.name}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{character.name}</h3>
        <p className="text-gray-300 text-sm mb-3">{character.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Actor: {character.actor}</span>
          <Link 
            href={`/characters/${character.id}`}
            className="text-batman-yellow hover:underline text-sm font-bold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard; 