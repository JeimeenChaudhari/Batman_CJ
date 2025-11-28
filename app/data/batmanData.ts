export interface Movie {
  id: number;
  title: string;
  year: number;
  director: string;
  description: string;
  image: string;
}

export interface Character {
  id: number;
  name: string;
  actor: string;
  description: string;
  image: string;
}

export interface BatmanData {
  biography: {
    realName: string;
    firstAppearance: string;
    creator: string;
    description: string;
  };
  movies: Movie[];
  characters: Character[];
  gadgets: {
    id: number;
    name: string;
    description: string;
    image: string;
  }[];
}

const batmanData: BatmanData = {
  biography: {
    realName: "Bruce Wayne",
    firstAppearance: "Detective Comics #27 (May 1939)",
    creator: "Bob Kane and Bill Finger",
    description: "Batman is the superhero protector of Gotham City, a tortured, brooding vigilante dressed as a bat who fights against evil and strikes fear into the hearts of criminals everywhere. In his public identity he is Bruce Wayne, billionaire industrialist and notorious playboy. Although he has no superhuman powers, he is one of the world's smartest men and greatest fighters. His physical prowess, technical ingenuity, and tactical thinking make him an incredibly dangerous opponent. He is also a founding member of the Justice League."
  },
  movies: [
    {
      id: 1,
      title: "Batman Begins",
      year: 2005,
      director: "Christopher Nolan",
      description: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
      image: "/images/batman-begins.jpg"
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      director: "Christopher Nolan",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      image: "/images/dark-knight.jpg"
    },
    {
      id: 3,
      title: "The Dark Knight Rises",
      year: 2012,
      director: "Christopher Nolan",
      description: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
      image: "/images/dark-knight-rises.jpg"
    },
    {
      id: 4,
      title: "Batman v Superman: Dawn of Justice",
      year: 2016,
      director: "Zack Snyder",
      description: "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
      image: "/images/batman-v-superman.jpg"
    },
    {
      id: 5,
      title: "The Batman",
      year: 2022,
      director: "Matt Reeves",
      description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
      image: "/images/the-batman.jpg"
    }
  ],
  characters: [
    {
      id: 1,
      name: "Bruce Wayne / Batman",
      actor: "Various (Christian Bale, Ben Affleck, Robert Pattinson)",
      description: "The billionaire owner of Wayne Enterprises who dedicates himself to protecting Gotham City from its criminal underworld as a masked vigilante.",
      image: "/images/batman.jpg"
    },
    {
      id: 2,
      name: "Alfred Pennyworth",
      actor: "Various (Michael Caine, Jeremy Irons, Andy Serkis)",
      description: "Bruce Wayne's loyal butler and confidant who helps maintain his secret identity as Batman.",
      image: "/images/alfred.jpg"
    },
    {
      id: 3,
      name: "The Joker",
      actor: "Various (Heath Ledger, Joaquin Phoenix)",
      description: "Batman's archenemy, a criminal mastermind with a clown-like appearance and a sadistic sense of humor.",
      image: "/images/JOKER.jpeg"
    },
    {
      id: 4,
      name: "Catwoman",
      actor: "Various (Anne Hathaway, Zoë Kravitz)",
      description: "A skilled thief with an ambiguous moral code who has a complex relationship with Batman.",
      image: "/images/catwoman.jpg"
    },
    {
      id: 5,
      name: "Commissioner James Gordon",
      actor: "Various (Gary Oldman, Jeffrey Wright)",
      description: "The commissioner of the Gotham City Police Department and a close ally of Batman.",
      image: "/images/gordon.jpg"
    }
  ],
  gadgets: [
    {
      id: 1,
      name: "Batmobile",
      description: "Batman's primary vehicle, equipped with advanced technology and weaponry.",
      image: "/BatMobile.webp"
    },
    {
      id: 2,
      name: "Batarang",
      description: "A bat-shaped throwing weapon used by Batman for combat and distraction.",
      image: "/Batarang.jpg"
    },
    {
      id: 3,
      name: "Batsuit",
      description: "A protective suit that not only conceals Batman's identity but also provides protection against various threats.",
      image: "/Batsuit.jpg"
    },
    {
      id: 4,
      name: "Grappling Gun",
      description: "A device that fires a grappling hook attached to a high-tensile wire, allowing Batman to scale buildings and swing between structures.",
      image: "/GrapplingGun.jpeg"
    },
    {
      id: 5,
      name: "Utility Belt",
      description: "A specialized belt that contains various tools and gadgets that Batman uses in his crime-fighting activities.",
      image: "/UtilityBelt.webp"
    },
    {
      id: 6,
      name: "Bat-Computer",
      description: "A powerful supercomputer located in the Batcave that Batman uses for research, analysis, and monitoring Gotham City.",
      image: "/BatComputer.jpeg"
    },
    {
      id: 7,
      name: "Smoke Pellets",
      description: "Small capsules that release a dense smoke screen, allowing Batman to make quick escapes or disorient enemies.",
      image: "/Smokepellet.jpg"
    },
    {
      id: 8,
      name: "Batclaw",
      description: "A hand-held device that shoots a claw-like projectile, allowing Batman to grab distant objects or enemies.",
      image: "/BatClaw.jpeg"
    },
    {
      id: 9,
      name: "Detective Vision",
      description: "A special mode in Batman's cowl that allows him to see through walls, track enemies, and analyze crime scenes.",
      image: "/DetectiveVidon.jpg"
    },
    {
      id: 10,
      name: "Batwing",
      description: "Batman's personal aircraft, used for aerial surveillance and rapid transportation across Gotham City.",
      image: "/Batwing.jpeg"
    }
  ]
};

export default batmanData; 