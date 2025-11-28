'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-batman-black py-4 sticky top-0 z-50 shadow-md">
      <div className="batman-container flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-1">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <Image
              src="/logo_BM.png"
              alt="Batman Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-bold text-batman-yellow">BATMAN</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-batman-yellow transition-colors">
            Home
          </Link>
          <Link href="/biography" className="text-white hover:text-batman-yellow transition-colors">
            Biography
          </Link>
          <Link href="/movies" className="text-white hover:text-batman-yellow transition-colors">
            Movies
          </Link>
          <Link href="/characters" className="text-white hover:text-batman-yellow transition-colors">
            Characters
          </Link>
          <Link href="/gadgets" className="text-white hover:text-batman-yellow transition-colors">
            Gadgets
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-batman-black border-t border-gray-700 mt-2">
          <div className="batman-container py-2 space-y-2">
            <Link
              href="/"
              className="block py-2 text-white hover:text-batman-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/biography"
              className="block py-2 text-white hover:text-batman-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Biography
            </Link>
            <Link
              href="/movies"
              className="block py-2 text-white hover:text-batman-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Movies
            </Link>
            <Link
              href="/characters"
              className="block py-2 text-white hover:text-batman-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Characters
            </Link>
            <Link
              href="/gadgets"
              className="block py-2 text-white hover:text-batman-yellow transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gadgets
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 