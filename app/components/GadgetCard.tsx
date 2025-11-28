import Image from 'next/image';
import Link from 'next/link';

interface GadgetProps {
  gadget: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
}

const GadgetCard = ({ gadget }: GadgetProps) => {
  return (
    <div className="batman-card group">
      <div className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          {/* Fallback if image is not available */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <Image
          src={gadget.image}
          alt={gadget.name}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{gadget.name}</h3>
        <p className="text-gray-300 text-sm mb-4">{gadget.description}</p>
        <Link 
          href={`/gadgets/${gadget.id}`}
          className="text-batman-yellow hover:underline text-sm font-bold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default GadgetCard; 