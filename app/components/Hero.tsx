import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative bg-batman-black text-white">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('/images/batman-hero2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)'
        }}
      ></div>
      
      {/* Content */}
      <div className="batman-container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-batman-yellow">
            THE DARK KNIGHT
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Explore the world of Batman, Gotham's vigilante hero who fights against crime and corruption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/biography" className="batman-button inline-block text-center">
              Discover Batman
            </Link>
            <Link 
              href="/movies" 
              className="inline-block text-center border-2 border-batman-yellow text-batman-yellow font-bold py-3 px-6 rounded hover:bg-batman-yellow hover:text-batman-black transition-all duration-300"
            >
              Explore Movies
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bat silhouette */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-12 z-20">
        <svg viewBox="0 0 100 50" fill="var(--batman-yellow)">
          <path d="M100,0 L80,20 C70,30 60,40 50,40 C40,40 30,30 20,20 L0,0 C20,15 35,25 50,25 C65,25 80,15 100,0 Z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero; 