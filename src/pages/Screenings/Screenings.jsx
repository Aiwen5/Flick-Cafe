import styles from './Screenings.module.css';
import MovieCard from '../../components/MovieCard/MovieCard';
import Banner from '../../components/Banner/Banner';
import MovieOfTheDay from '../../components/MovieOfTheDay/MovieOfTheDay';
import MovieDatabase, { currentWeek } from '../../data/MovieDatabase';

export default function Screenings() {
  return (
    <>
      <Banner
        bannerText="Screenings"
        bannerDesc="Experience the joy of movies with curated screenings of classics and new hits. Enjoy great coffee and treats in a cozy setting as you immerse yourself in the movie.
        Check back every week for an updated curation!"
        bannerImage="/images/screeningsbanner1.png"
      />
      <div className={styles.screeningsContainer}>
        <section className={styles.movieOfTheDaySection}>
          <p className={styles.description}>Today&apos;s Featured Movie</p>
          <MovieOfTheDay />
        </section>
        <p className={styles.description}>Flicks of the Week – Nightly at 6 PM</p>
        {Object.keys(MovieDatabase[currentWeek]).map((day) => (
          <MovieCard
            key={day}
            title={MovieDatabase[currentWeek][day].title}
            subtitle={MovieDatabase[currentWeek][day].subtitle}
            description={MovieDatabase[currentWeek][day].description}
            imageSrc={MovieDatabase[currentWeek][day].imageSrc}
          />
        ))}
      </div>
    </>
  );
}