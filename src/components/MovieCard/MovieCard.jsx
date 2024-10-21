import React from 'react';
import styles from './MovieCard.module.css';

export default function MovieCard({ title, subtitle, description, imageSrc }) {
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