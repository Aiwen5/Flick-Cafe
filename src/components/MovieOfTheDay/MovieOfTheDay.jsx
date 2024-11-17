import PropTypes from 'prop-types';
import styles from './MovieOfTheDay.module.css';
import MovieDatabase from '../../data/MovieDatabase';

const placeholderImage = 'https://placehold.co/290x400';

function getMovieOfTheDay() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  const dayName = days[today];
  const currentWeek = `week${Math.ceil((new Date().getDate() - 1) / 7) % 2 === 0 ? 2 : 1}`;
  return MovieDatabase[currentWeek][dayName];
}

export default function MovieOfTheDay() {
  const movie = getMovieOfTheDay();
  const imageToShow = movie.imageSrc || placeholderImage;

  return (
    <div className={styles.movieOfTheDayCard}>
      <img className={styles.image} src={imageToShow} alt={`${movie.title} Poster`} />
      <div className={styles.content}>
        <h2 className={styles.title}>{movie.title}</h2>
        <h3 className={styles.subtitle}>{movie.subtitle}</h3>
        <p className={styles.description}>{movie.description}</p>
      </div>
    </div>
  );
}

MovieOfTheDay.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
};

MovieOfTheDay.defaultProps = {
  imageSrc: placeholderImage,
};