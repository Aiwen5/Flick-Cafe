import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <main className={styles.homeContainer}>
        <div className={styles.bannerContainer}>
          <img className={styles.bannerImage} src="/images/homebanner.png" alt="banner image"/>
          <h2 className={styles.bannerText}>Coffee & Movie Glamour</h2>
          <Link className={styles.ctaLink} to="/menu">
            <button className={styles.ctaButton}>ORDER NOW</button>
          </Link>
        </div>

        <section className={styles.galleryContainer}>
          <div className={styles.galleryCard}>
            <img alt="gallery image" src="/images/gallery1.png" />
            <h4>CRAFTED BREWS</h4>
            <p>Our skilled baristas pour passion into every cup. Experience the artistry in each sip as we blend the finest beans to perfection.</p>
          </div>
          <div className={styles.galleryCard}>
            <img alt="gallery image" src="/images/gallery2.png" />
            <h4>NIGHTLY SCREENINGS</h4>
            <p>Immerse yourself in cinematic wonders. Join us every evening for handpicked movies, creating an atmosphere that's perfect for film enthusiasts.</p>
          </div>
          <div className={styles.galleryCard}>
            <img alt="gallery image" src="/images/gallery3.png" />
            <h4>COMMUNITY VIBES</h4>
            <p>Flick Cafe is more than a place; it's a community. Gather with friends, enjoy quality coffee, and make memories in our cozy, cinematic haven.</p>
          </div>
        </section>
      </main>
    </>
  );
}