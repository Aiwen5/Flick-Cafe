import React from 'react';
import styles from './Banner.module.css';

// note: put this outside of the main container that has padding/max-width on your page for banner to show up properly

export default function Banner({ bannerText, bannerDesc, bannerImage }) {
  return (
    <div className={styles.bannerContainer}>
      <img className={styles.bannerImage} src={bannerImage} alt="banner" />
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerText}>{bannerText}</h2>
        <div className={styles.bannerDesc}>{bannerDesc}</div>
      </div>
    </div>
  );
}