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

        <section className={styles.infoOuterContainer}>
          <div className={styles.infoInnerContainer}>
            <img className={styles.largeImage} alt="gallery image" src="/images/gallery4.png" />
            <div className={styles.textContainer}>
              <h4>WHERE CAFFEINE MEETS CINEMA</h4>
              <p>Welcome to Flick Cafe, where the timeless glamour of 1920s art deco meets a modern juxtaposition of cinema and coffee. The name “Flick” is a slang term for film, commonly used in the 1920s, evoking an era where ech reel unfolded stories that captivated hearts and ignited imaginations.</p>

              <p>Stepping into Flick Cafe is like entering a cinematic time capsule, blending seamlessly with the contemporary buzz of caffeine-fueled conversations and the soft glow of digital screens.</p>

              <p>Nestled in the heart of Burnaby, Flick Cafe is not just a coffee shop—it's a unique, nostalgic yet modern atmosphere, making it an ideal hangout spot for teens, millennials, and movie lovers of all ages.</p>
            </div>
          </div>
        </section>

        <section className={styles.infoOuterContainer}>
          <div className={styles.infoInnerContainer}>
            <div className={styles.textContainer}>
              <h4>HOW WE BREW ENTERTAINMENT</h4>
              <p>Flick Cafe invites you to indulge in the perfect blend of freshly brewed coffee and curated cinematic experiences. Our menu not only includes the coffee shop essentials, but also proudly serves popcorn, candy, and other movie snack necessities, creating a delightful pairing of classic concessions with your favorite brew.</p>

              <p>From Monday to Friday, immerse yourself in nightly movie screenings across genres, with a chosen movie each evening, offering a diverse lineup to cater to every cinematic taste. </p>

              <p>The weekend brings a twist where customers can participate in an in-store poll to choose what they wish to see, putting the power of movie selection in the hands of our vibrant community. Join us for a unique blend of coffee, cinema, and community that defines Flick Cafe's distinctive charm.</p>
            </div>
            <img className={styles.largeImage} alt="gallery image" src="/images/gallery5.png" />
          </div>
        </section>
      </main>
    </>
  );
}