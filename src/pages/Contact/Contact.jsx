import React from 'react';
import styles from './Contact.module.css';
import Button from '../../components/Button/Button';
import Banner from '../../components/Banner/Banner';

export default function Contact() {
  return (
    <>
      <Banner
        bannerText="Contact Us"
        bannerDesc="Let us know your thoughts and what movies you want to see next!
        Your input matters, and we value the feedback that helps shape your cinematic and coffee experience."
        bannerImage="/images/contactbanner.png"
      />
      <div className={styles.contactContainer}>
        <h1 className={styles.heading}>Contact Us</h1>
        <form className={styles.contactForm}>
          <label className={styles.label} htmlFor="name">Name:</label>
          <input className={styles.input} type="text" id="name" name="name" placeholder="Your name" />

          <label className={styles.label} htmlFor="email">Email:</label>
          <input className={styles.input} type="email" id="email" name="email" placeholder="Your email" />

          <label className={styles.label} htmlFor="message">Message:</label>
          <textarea className={styles.textarea} id="message" name="message" placeholder="Your message"></textarea>

          <Button type="submit">Send</Button>
        </form>
      </div>
    </>

  );
}