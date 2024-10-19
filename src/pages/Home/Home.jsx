import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.heading}>Welcome to Flick Cafe</h1>
      <p className={styles.description}>Enjoy a cup of coffee while watching your favorite movies!</p>
    </div>
  );
}