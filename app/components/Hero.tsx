'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left side - Main content */}
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

          {/* Right side - Creator profile */}
          <div className="flex flex-col items-center gap-3 lg:ml-8">
            <div
              className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-batman-yellow shadow-lg shadow-batman-yellow/50 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
              aria-label="View full profile image"
            >
              <Image
                src="/The Weekend.jpg"
                alt="Jeimeen Chaudhari"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-1">Made by</p>
              <p className="text-batman-yellow font-bold text-lg">Jeimeen Chaudhari</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bat silhouette */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-12 z-20">
        <svg viewBox="0 0 100 50" fill="var(--batman-yellow)">
          <path d="M100,0 L80,20 C70,30 60,40 50,40 C40,40 30,30 20,20 L0,0 C20,15 35,25 50,25 C65,25 80,15 100,0 Z" />
        </svg>
      </div>

      {/* Modal for full image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] animate-fadeIn">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-batman-yellow transition-colors text-4xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Full image */}
            <div className="relative w-full h-[80vh] rounded-lg overflow-hidden border-4 border-batman-yellow shadow-2xl shadow-batman-yellow/50">
              <Image
                src="/The Weekend.jpg"
                alt="Jeimeen Chaudhari - Full Image"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image caption */}
            <div className="text-center mt-4">
              <p className="text-batman-yellow font-bold text-2xl">Jeimeen Chaudhari</p>
              <p className="text-gray-400 mt-2">Web Developer & Batman Enthusiast</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;