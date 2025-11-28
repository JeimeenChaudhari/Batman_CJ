import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import MovieCard from "../components/MovieCard";
import batmanData from "../data/batmanData";

export default function MoviesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-batman-black text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: "url('/images/batman-movies.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.3)'
            }}
          ></div>
          
          <div className="batman-container relative z-10 py-24 md:py-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-batman-yellow">
              BATMAN MOVIES
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl">
              Explore the cinematic universe of the Dark Knight, from his first appearance on the big screen to his latest adventures.
            </p>
          </div>
        </div>
        
        {/* Movies Section */}
        <section className="py-16 bg-batman-black">
          <div className="batman-container">
            <SectionTitle 
              title="ALL BATMAN FILMS" 
              subtitle="A complete collection of Batman's cinematic journey through the years."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {batmanData.movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            
            <div className="mt-16">
              <SectionTitle 
                title="BATMAN FILM HISTORY" 
                subtitle="The evolution of Batman on the big screen."
              />
              
              <div className="space-y-8 text-gray-300">
                <p>
                  Batman has been a fixture in cinema since the 1940s, with his first theatrical appearance in a 15-part serial. However, it wasn't until Tim Burton's 1989 film "Batman" starring Michael Keaton that the character truly became a cinematic icon.
                </p>
                
                <p>
                  The character has been portrayed by numerous actors over the decades, each bringing their own interpretation to the role. From Adam West's campy 1960s version to Christian Bale's gritty portrayal in Christopher Nolan's Dark Knight trilogy, and more recently, Ben Affleck and Robert Pattinson, Batman continues to evolve on screen.
                </p>
                
                <p>
                  Christopher Nolan's Dark Knight trilogy, in particular, is often credited with redefining the superhero genre, proving that comic book adaptations could be both critically acclaimed and commercially successful. "The Dark Knight" (2008) is widely regarded as one of the greatest superhero films ever made, with Heath Ledger's posthumous Oscar-winning performance as the Joker.
                </p>
                
                <p>
                  The future of Batman in cinema remains bright, with new interpretations and stories continuing to captivate audiences worldwide. As filmmaking technology advances and storytelling techniques evolve, Batman's cinematic adventures will undoubtedly continue to push the boundaries of the superhero genre.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 