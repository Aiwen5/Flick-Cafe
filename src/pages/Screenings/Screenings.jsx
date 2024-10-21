import React from 'react';
import styles from './Screenings.module.css';
import MovieCard from '../../components/MovieCard/MovieCard';
import Banner from '../../components/Banner/Banner';

export default function Screenings() {
  return (
    <>
      <Banner
        bannerText="Screenings"
        bannerDesc="Experience the joy of movies with curated screenings of classics and new hits. Enjoy great coffee and treats in a cozy setting as you immerse yourself in the movie.
        Check back every week for an updated curation!"
        bannerImage="/images/screenings-banner.png"
      />
      <div className={styles.screeningsContainer}>
        <p className={styles.description}>Flicks of the Week – Nightly at 6 PM</p>

        <MovieCard
          title="Drama Monday"
          subtitle="The Wolf of Wall Street - December 4, 2023"
          description="A darkly humorous biography, 'The Wolf of Wall Street' follows Jordan Belfort's rise to Wall Street fame through corruption and fraud, indulging in a lifestyle of excess. The 1990s set film tracks his eventual fall as his fraudulent activities catch up with him, leading to a dramatic downfall. It lays bare the era's rampant greed and the volatile nature of a system steeped in high-stakes financial manipulation."
          imageSrc="/images/wolf-of-wall-street.jpg"
        />

        <MovieCard
          title="Comedy Tuesday"
          subtitle="Freaky Friday - December 5, 2023"
          description="This uproarious comedy explores the relationship between a mother and daughter who find themselves in each other's bodies, leading to a hilarious journey of mutual understanding and self-discovery. As they navigate their new realities, they gain insights into each other's lives and the familial bonds that hold them together. This heartwarming film combines humor with a touching message about empathy and love, all with a magical twist."
          imageSrc="/images/freaky-friday.jpg"
        />

        <MovieCard
          title="Adventure Wednesday"
          subtitle="Indiana Jones & the Crystal Skull - December 6, 2023"
          description="Indiana Jones and the Crystal Skull is an action-adventure where Indiana Jones races against Soviet agents to find the Crystal Skull of Akator, facing supernatural challenges. Journeying from American academia to Peruvian jungles, he encounters ancient wonders and must leverage his wit and bravery to overcome the perils associated with the skull's mysterious powers. This franchise installment combines thrilling stunts and archaeological intrigue for a captivating adventure."
          imageSrc="/images/indiana-jones.jpg"
        />

        <MovieCard
          title="Thriller Thursday"
          subtitle="The Orphanage - December 7, 2023"
          description="The Orphanage is a Spanish horror film in which Laura returns to her childhood home and encounters supernatural occurrences that reveal connections to her past. As she unravels the orphanage's dark history following her son's disappearance, the film blends psychological and supernatural horror, probing deep into themes of loss and maternal bonds, all while maintaining a spine-chilling atmosphere."
          imageSrc="/images/the-orphanage.jpg"
        />

        <MovieCard
          title="Retro Friday"
          subtitle="Alfred Hitchcock's Psycho - December 8, 2023"
          description="Alfred Hitchcock's 'Psycho,' a 60s classic, revolutionized psychological thrillers. It follows Marion Crane, who meets motel owner Norman Bates after embezzling money. The plot transforms into a disturbing tale of identity and murder, with a shocking twist. Its innovative storytelling and suspenseful direction make it a cinematic masterpiece, leaving an enduring legacy that has influenced countless filmmakers and continues to resonate with viewers today."
          imageSrc="/images/psycho.jpeg"
        />
      </div>
    </>
  );
}