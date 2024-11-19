import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

const placeholderImage = 'https://placehold.co/290x400';

export default function MovieCard({ title, subtitle, description, imageSrc = placeholderImage }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageSrc} alt={`${title} Poster`} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
};