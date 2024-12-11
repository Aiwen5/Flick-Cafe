// Mock date for testing purposes
// const mockDate = new Date('2024-11-08'); // Change this date to test different weeks

const today = new Date(); // Change to mockDate for testing purposes

const getWeekDates = (startDate) => {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dates.push(date.toDateString());
  }
  return dates;
};

const getCurrentWeekDates = () => {
  const firstDayOfWeek = today.getDate() - today.getDay() + 1; // Making Monday the first day of the week
  const startDate = new Date(today.setDate(firstDayOfWeek));
  return getWeekDates(startDate);
};

const getCurrentWeekNumber = () => {
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  const pastDaysOfYear = (today - startOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
};

const currentWeekNumber = getCurrentWeekNumber();
export const currentWeek = `week${currentWeekNumber % 2 === 0 ? 2 : 1}`; // Alternates weeks // Exported the current week for use in Screenings.jsx 
const currentWeekDates = getCurrentWeekDates();
const MovieDatabase = {
  week1: {
    Monday: {
      title: "Drama Monday",
      subtitle: `The Wolf of Wall Street - ${currentWeekDates[0]}`,
      description: "A darkly humorous biography, 'The Wolf of Wall Street' follows Jordan Belfort's rise to Wall Street fame through corruption and fraud, indulging in a lifestyle of excess. The 1990s set film tracks his eventual fall as his fraudulent activities catch up with him, leading to a dramatic downfall. It lays bare the era's rampant greed and the volatile nature of a system steeped in high-stakes financial manipulation.",
      imageSrc: "/images/wolf-of-wall-street.jpg",
      runTime: 180 // Run time in minutes
    },
    Tuesday: {
      title: "Comedy Tuesday",
      subtitle: `Freaky Friday - ${currentWeekDates[1]}`,
      description: "This uproarious comedy explores the relationship between a mother and daughter who find themselves in each other's bodies, leading to a hilarious journey of mutual understanding and self-discovery. As they navigate their new realities, they gain insights into each other's lives and the familial bonds that hold them together. This heartwarming film combines humor with a touching message about empathy and love, all with a magical twist.",
      imageSrc: "/images/freaky-friday.jpg",
      runTime: 97
    },
    Wednesday: {
      title: "Adventure Wednesday",
      subtitle: `Indiana Jones & the Crystal Skull - ${currentWeekDates[2]}`,
      description: "Indiana Jones and the Crystal Skull is an action-adventure where Indiana Jones races against Soviet agents to find the Crystal Skull of Akator, facing supernatural challenges. Journeying from American academia to Peruvian jungles, he encounters ancient wonders and must leverage his wit and bravery to overcome the perils associated with the skull's mysterious powers. This franchise installment combines thrilling stunts and archaeological intrigue for a captivating adventure.",
      imageSrc: "/images/indiana-jones.jpg",
      runTime: 122
    },
    Thursday: {
      title: "Thriller Thursday",
      subtitle: `The Orphanage - ${currentWeekDates[3]}`,
      description: "The Orphanage is a Spanish horror film in which Laura returns to her childhood home and encounters supernatural occurrences that reveal connections to her past. As she unravels the orphanage's dark history following her son's disappearance, the film blends psychological and supernatural horror, probing deep into themes of loss and maternal bonds, all while maintaining a spine-chilling atmosphere.",
      imageSrc: "/images/the-orphanage.jpg",
      runTime: 105
    },
    Friday: {
      title: "Retro Friday",
      subtitle: `Alfred Hitchcock's Psycho - ${currentWeekDates[4]}`,
      description: "Alfred Hitchcock's 'Psycho,' a 60s classic, revolutionized psychological thrillers. It follows Marion Crane, who meets motel owner Norman Bates after embezzling money. The plot transforms into a disturbing tale of identity and murder, with a shocking twist. Its innovative storytelling and suspenseful direction make it a cinematic masterpiece, leaving an enduring legacy that has influenced countless filmmakers and continues to resonate with viewers today.",
      imageSrc: "/images/psycho.jpeg",
      runTime: 109
    },
    Saturday: {
      title: "Sci-Fi Saturday",
      subtitle: `Blade Runner 2049 - ${currentWeekDates[5]}`,
      description: "Blade Runner 2049 is a visually stunning sci-fi film that follows a new blade runner, LAPD Officer K, as he unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for thirty years.",
      imageSrc: "/images/blade-runner-2049.jpeg",
      runTime: 164
    },
    Sunday: {
      title: "Family Sunday",
      subtitle: `The Lion King - ${currentWeekDates[6]}`,
      description: "The Lion King is a beloved animated film that tells the story of Simba, a young lion who must embrace his role as the rightful king of his homeland following the murder of his father, Mufasa, at the hands of his uncle, Scar. The film is a timeless tale of adventure, family, and the circle of life.",
      imageSrc: "/images/the-lion-king.jpeg",
      runTime: 88
    }
  },
  week2: {
    Monday: {
      title: "Drama Monday",
      subtitle: `The Godfather - ${currentWeekDates[0]}`,
      description: "The Godfather is a crime drama that chronicles the powerful Italian-American crime family of Don Vito Corleone. When the don's youngest son, Michael, reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. The film is a chilling portrait of the Sicilian clan's rise and near fall from power in America.",
      imageSrc: "/images/the-godfather.jpeg",
      runTime: 175
    },
    Tuesday: {
      title: "Comedy Tuesday",
      subtitle: `Superbad - ${currentWeekDates[1]}`,
      description: "Superbad is a coming-of-age comedy that follows two high school friends, Seth and Evan, as they navigate the last weeks of high school and attempt to make it to a party that will change their lives forever. The film is a hilarious and heartfelt look at friendship, growing up, and the awkwardness of adolescence.",
      imageSrc: "/images/superbad.jpeg",
      runTime: 113
    },
    Wednesday: {
      title: "Adventure Wednesday",
      subtitle: `Jurassic Park - ${currentWeekDates[2]}`,
      description: "Jurassic Park is a science fiction adventure film that follows a group of scientists and visitors as they tour a theme park populated by genetically engineered dinosaurs. When the park's security system fails, the dinosaurs escape, leading to a thrilling and dangerous adventure.",
      imageSrc: "/images/jurassic-park.jpg",
      runTime: 127
    },
    Thursday: {
      title: "Thriller Thursday",
      subtitle: `Inception - ${currentWeekDates[3]}`,
      description: "Inception is a science fiction thriller that follows a group of thieves who enter the dreams of others to steal their secrets. The film is a mind-bending exploration of dreams, reality, and the power of the subconscious mind.",
      imageSrc: "/images/inception.jpeg",
      runTime: 148
    },
    Friday: {
      title: "Retro Friday",
      subtitle: `Back to the Future - ${currentWeekDates[4]}`,
      description: "Back to the Future is a science fiction adventure film that follows a teenager, Marty McFly, as he travels back in time to the 1950s and meets his parents as teenagers. The film is a fun and exciting exploration of time travel and the impact of our actions on the future.",
      imageSrc: "/images/back-to-the-future.jpeg",
      runTime: 116
    },
    Saturday: {
      title: "Sci-Fi Saturday",
      subtitle: `The Matrix - ${currentWeekDates[5]}`,
      description: "The Matrix is a science fiction action film that follows a computer hacker, Neo, as he discovers that the world he lives in is a simulated reality created by intelligent machines. The film is a groundbreaking exploration of reality, technology, and the power of the human mind.",
      imageSrc: "/images/the-matrix.jpg",
      runTime: 136
    },
    Sunday: {
      title: "Family Sunday",
      subtitle: `Toy Story - ${currentWeekDates[6]}`,
      description: "Toy Story is an animated family film that follows a group of toys that come to life when their owner, Andy, is not around. The film is a heartwarming and humorous exploration of friendship, loyalty, and the power of imagination.",
      imageSrc: "/images/toy-story.jpeg",
      runTime: 81
    }
  }
};

export default MovieDatabase;