import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-batman-black text-white py-8 mt-16">
      <div className="batman-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-batman-yellow text-xl mb-4">BATMAN</h3>
            <p className="text-gray-400">
              Explore the world of the Dark Knight, from his origins to his latest adventures.
            </p>
          </div>
          <div>
            <h3 className="text-batman-yellow text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-batman-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/biography" className="text-gray-400 hover:text-batman-yellow transition-colors">
                  Biography
                </Link>
              </li>
              <li>
                <Link href="/movies" className="text-gray-400 hover:text-batman-yellow transition-colors">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/characters" className="text-gray-400 hover:text-batman-yellow transition-colors">
                  Characters
                </Link>
              </li>
              <li>
                <Link href="/gadgets" className="text-gray-400 hover:text-batman-yellow transition-colors">
                  Gadgets
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-batman-yellow text-xl mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-batman-yellow transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-batman-yellow transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/copyright" className="text-gray-400 hover:text-batman-yellow transition-colors">
                  Copyright Information
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; {currentYear} Batman Fan Site. All rights reserved. Batman and all related characters are property of DC Comics.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 