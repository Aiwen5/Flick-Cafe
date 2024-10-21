import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}> 
        <div className={styles.footerSection}>
          <h3>Location</h3>
          <p>1920 Willingdon Ave, Burnaby, BC, Canada</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Hours</h3>
          <p>Mon-Fri: 9am-10pm<br />Sat-Sun: 11am-10pm<br />Screenings: 6pm Nightly</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Careers</h3>
          <p>Work at Flick Cafe<br />Corporate<br />Retail<br />Diversity and Inclusion</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Connect with Us</h3>
          <div className={styles.socialIcons}>
            <img src="https://via.placeholder.com/30" alt="Facebook" />
            <img src="https://via.placeholder.com/30" alt="Twitter" />
            <img src="https://via.placeholder.com/30" alt="Instagram" />
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2023 Flick Cafe Co. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
