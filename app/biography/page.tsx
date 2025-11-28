import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import batmanData from "../data/batmanData";

export default function BiographyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-batman-black text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: "url('/public/BBB.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.3)'
            }}
          ></div>
          
          <div className="batman-container relative z-10 py-24 md:py-32">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-batman-yellow">
              BATMAN BIOGRAPHY
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl">
              The complete story of the Dark Knight, from his tragic origins to his ongoing crusade against crime.
            </p>
          </div>
        </div>
        
        {/* Main Biography Section */}
        <section className="py-16 bg-batman-black">
          <div className="batman-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-batman-gray rounded-lg overflow-hidden mb-8">
                    <div className="relative h-80 w-full">
                      <Image
                        src="/public/BatmanBegins.jpg"
                        alt="Batman"
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-batman-yellow mb-4">Batman Profile</h3>
                      <div className="space-y-3 text-gray-300">
                        <p><span className="text-batman-yellow font-bold">Real Name:</span> {batmanData.biography.realName}</p>
                        <p><span className="text-batman-yellow font-bold">First Appearance:</span> {batmanData.biography.firstAppearance}</p>
                        <p><span className="text-batman-yellow font-bold">Created by:</span> {batmanData.biography.creator}</p>
                        <p><span className="text-batman-yellow font-bold">Abilities:</span> Master detective, martial arts expert, peak human physical condition, advanced technology</p>
                        <p><span className="text-batman-yellow font-bold">Base of Operations:</span> Gotham City, Batcave</p>
                        <p><span className="text-batman-yellow font-bold">Affiliations:</span> Justice League, Bat-Family</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-2">
                <SectionTitle 
                  title="THE DARK KNIGHT'S STORY" 
                  subtitle="From tragedy to legend: The complete biography of Batman."
                />
                
                <div className="space-y-8 text-gray-300">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Origins</h3>
                    <p className="mb-4">
                      Bruce Wayne was born to wealthy physician Dr. Thomas Wayne and his wife Martha, who were themselves members of the prestigious Wayne and Kane families of Gotham City. When he was very young, Bruce's mother and father were murdered before his eyes by a mugger named Joe Chill, leaving Bruce an orphan.
                    </p>
                    <p className="mb-4">
                      The tragic event left Bruce traumatized and filled with a desire for justice. He swore an oath to rid the city of the evil that had taken his parents' lives. He spent his youth traveling the world, training himself to intellectual and physical perfection and learning a variety of crime-fighting skills, including chemistry, criminology, forensics, martial arts, gymnastics, disguise, and escape artistry.
                    </p>
                    <p className="mb-4">
                      Bruce's childhood was forever altered that fateful night in Crime Alley (formerly Park Row). After leaving the Monarch Theater with his parents, they were confronted by Joe Chill, who demanded Martha's pearl necklace. When Thomas tried to protect his wife, Chill shot him, followed by Martha. Young Bruce was left standing between his parents' bodies, forever scarred by the experience.
                    </p>
                    <p>
                      Following the murder, Bruce was raised by the Wayne family butler, Alfred Pennyworth, who became a father figure to him. Despite Alfred's best efforts, Bruce grew increasingly obsessed with avenging his parents' deaths and fighting the criminal element that plagued Gotham City.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Training and Education</h3>
                    <p className="mb-4">
                      Bruce's global training journey began after he dropped out of Princeton University. He traveled to Asia, Europe, Africa, and the Americas, seeking out the world's greatest masters in various disciplines. In the Far East, he trained with martial arts masters including the ninja Kirigi and the assassin Shiva.
                    </p>
                    <p className="mb-4">
                      In Tibet, Bruce trained with Henri Ducard, a master detective who taught him advanced manhunting techniques. He studied with Chu Chin Li and Tsunemoto in Japan, learning martial arts and sword fighting. In Korea, he trained with the detective Harvey Harris, while in France, he studied with the renowned escape artist Giovanni Zatara.
                    </p>
                    <p>
                      Bruce also received training from the League of Assassins under Ra's al Ghul, though he ultimately rejected their violent methods. Throughout his training, Bruce pushed his body and mind to their absolute limits, mastering dozens of martial arts styles, detective techniques, and survival skills that would later serve him as Batman.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Becoming Batman</h3>
                    <p className="mb-4">
                      Upon returning to Gotham in his early twenties, Bruce made several attempts to join the fight against crime. He realized that he needed to strike fear into the hearts of criminals. During this contemplation, a bat crashed through his window, inspiring him to take on the persona of Batman.
                    </p>
                    <p className="mb-4">
                      With the assistance of his loyal butler Alfred Pennyworth, who raised him after his parents' death, Bruce established a secret headquarters in the caves beneath Wayne Manor, the Batcave. There, he developed an array of technology and equipment to aid in his war on crime, including the Batmobile, Batarangs, and his iconic Batsuit.
                    </p>
                    <p className="mb-4">
                      Bruce's first Batsuit was relatively simple, consisting of a gray bodysuit, blue cape and cowl, and yellow utility belt. Over time, the suit evolved to incorporate advanced armor plating, communications technology, and various defensive capabilities. The suit's design has always maintained the bat motif, with the iconic bat symbol on the chest serving both as a symbol and, in some versions, as a strategic target to draw fire to the most heavily armored portion of the suit.
                    </p>
                    <p>
                      Batman's early years were chronicled in the "Year One" storyline, which detailed his first encounters with key allies like Lieutenant James Gordon and early adversaries in the Gotham underworld. These formative experiences shaped his approach to crime-fighting and established his reputation as a mysterious, almost supernatural force in Gotham's criminal underworld.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">The Dark Knight of Gotham</h3>
                    <p className="mb-4">
                      As Batman, Bruce fights an assortment of villains such as the Joker, Penguin, Riddler, Two-Face, Ra's al Ghul, Scarecrow, Poison Ivy, and Catwoman, among others. He is aided in this by his sidekicks, including various Robins, Batgirl, and Nightwing, as well as his butler Alfred and Commissioner James Gordon.
                    </p>
                    <p className="mb-4">
                      Unlike most superheroes, Batman does not possess any superpowers; rather, he relies on his genius intellect, physical prowess, martial arts abilities, detective skills, science and technology, vast wealth, intimidation, and indomitable will. A large assortment of villains make up Batman's rogues gallery, including his archenemy, the Joker.
                    </p>
                    <p className="mb-4">
                      Batman's relationship with Gotham City is complex and symbiotic. He views himself as the city's protector, yet his presence has arguably attracted more dangerous and theatrical criminals. The emergence of "costumed criminals" like the Joker, Riddler, and Two-Face has been attributed to Batman's own theatrical approach to crime-fighting, creating an escalation that Commissioner Gordon and Batman have often discussed.
                    </p>
                    <p>
                      Despite this, Batman remains committed to his no-killing rule, believing that crossing that line would make him no better than the criminals he fights. This moral code has been tested numerous times, particularly in his confrontations with the Joker, whose heinous crimes have pushed Batman to his ethical limits.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">The Bat-Family</h3>
                    <p className="mb-4">
                      Though Batman began his crusade alone, he eventually recognized the need for allies. The first addition to the "Bat-Family" was Dick Grayson, a young circus acrobat whose parents were murdered by a mobster. Bruce saw himself in the orphaned boy and took him in, training him to become the first Robin. Dick later outgrew the Robin identity and became Nightwing, establishing himself as a hero in his own right.
                    </p>
                    <p className="mb-4">
                      Jason Todd became the second Robin after Batman caught him attempting to steal the tires from the Batmobile. Jason's tenure as Robin ended tragically when he was brutally murdered by the Joker, only to be later resurrected and become the anti-hero Red Hood. Tim Drake, who deduced Batman's identity through detective work, became the third Robin, bringing a more analytical approach to the role.
                    </p>
                    <p className="mb-4">
                      Bruce's biological son with Talia al Ghul, Damian Wayne, eventually became the fourth Robin. Raised by the League of Assassins, Damian's integration into the Bat-Family has been challenging but has helped him develop beyond his violent upbringing.
                    </p>
                    <p>
                      The Bat-Family also includes several Batgirls: Barbara Gordon (who later became Oracle after being paralyzed by the Joker, and eventually returned to the Batgirl role), Cassandra Cain, and Stephanie Brown. Other members include Katherine Kane (Batwoman), Luke Fox (Batwing), and Jean-Paul Valley (Azrael), each bringing unique skills and perspectives to Batman's mission.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Notable Story Arcs</h3>
                    <p className="mb-4">
                      Batman's long publishing history includes several landmark storylines that have defined the character. "The Killing Joke" explored the possible origin of the Joker and featured the shooting of Barbara Gordon. "A Death in the Family" chronicled the death of Jason Todd at the Joker's hands, while "Knightfall" saw Batman's back broken by Bane and his temporary replacement by Jean-Paul Valley.
                    </p>
                    <p className="mb-4">
                      "No Man's Land" depicted Gotham City abandoned by the U.S. government following a devastating earthquake, with Batman and his allies fighting to restore order. "Hush" introduced the childhood friend turned enemy Thomas Elliot and featured a mystery involving nearly all of Batman's rogues gallery.
                    </p>
                    <p className="mb-4">
                      "Court of Owls" revealed a secret society that had been controlling Gotham from the shadows for centuries, challenging Batman's understanding of the city he thought he knew completely. "Batman R.I.P." and "Final Crisis" dealt with Batman's apparent death and his journey through time before returning to the present.
                    </p>
                    <p>
                      These stories, among many others, have explored different facets of Batman's character, from his detective skills to his relationships, his moral code, and his psychological makeup, contributing to the rich tapestry that makes Batman one of the most complex and enduring characters in popular culture.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Batman Beyond the Comics</h3>
                    <p className="mb-4">
                      Batman's influence extends far beyond comic books. The 1960s "Batman" television series starring Adam West presented a campy, lighthearted version of the character that contrasted with his darker comic book portrayal but introduced Batman to a wider audience.
                    </p>
                    <p className="mb-4">
                      Tim Burton's films "Batman" (1989) and "Batman Returns" (1992) starring Michael Keaton returned to a darker interpretation, while Christopher Nolan's "Dark Knight Trilogy" with Christian Bale presented a more grounded, realistic take on the character. More recently, Matt Reeves' "The Batman" starring Robert Pattinson emphasized Batman's detective skills and noir influences.
                    </p>
                    <p className="mb-4">
                      In animation, "Batman: The Animated Series" is widely regarded as one of the finest adaptations of the character, with Kevin Conroy's voice performance setting the standard for how Batman should sound. The series spawned the DC Animated Universe and influenced comics, games, and other media.
                    </p>
                    <p>
                      The "Arkham" video game series allowed players to step into Batman's boots, combining detective work, stealth, and combat in critically acclaimed titles that captured the essence of the character. These various interpretations across different media have contributed to Batman's status as a global cultural icon.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Legacy</h3>
                    <p className="mb-4">
                      Batman's legacy extends far beyond Gotham City. As a founding member of the Justice League, he works alongside other superheroes like Superman and Wonder Woman to protect the world from various threats. Despite his lack of superpowers, his tactical genius and preparedness make him an invaluable member of the team.
                    </p>
                    <p className="mb-4">
                      Over the years, Batman has trained numerous protégés, creating what is known as the "Bat-Family." This includes various Robins (Dick Grayson, Jason Todd, Tim Drake, Damian Wayne), Batgirls (Barbara Gordon, Cassandra Cain, Stephanie Brown), and others like Huntress and Batwing. Each member carries on Batman's mission in their own way, expanding his influence throughout Gotham and beyond.
                    </p>
                    <p className="mb-4">
                      Batman's impact on popular culture is immeasurable. The bat symbol is one of the most recognizable logos in the world. His stories have influenced countless other characters and narratives across various media. The exploration of themes like justice, trauma, and redemption through Batman's character has added depth to the superhero genre.
                    </p>
                    <p>
                      Perhaps Batman's greatest legacy is his demonstration that ordinary humans can achieve extraordinary things through determination, preparation, and an unwavering moral compass. Despite his often grim demeanor, Batman ultimately represents hope—hope that one person can make a difference, that tragedy can be transformed into purpose, and that justice can prevail even in the darkest of times.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 