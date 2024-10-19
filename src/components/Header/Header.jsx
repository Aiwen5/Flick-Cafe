import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { FaShoppingBag, FaUser } from 'react-icons/fa';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/WhiteLogo.svg" alt="flick cafe logo" />
        <h1>flick cafe</h1>
      </Link>
      <nav className={styles.nav}>
        <Link to="/menu" className={styles.navItem}>Menu</Link>
        <Link to="/screenings" className={styles.navItem}>Screenings</Link>
        <Link to="/contact" className={styles.navItem}>Contact Us</Link>
      </nav>
      <div className={styles.icons}>
        <FaShoppingBag className={styles.icon} />
        <FaUser className={styles.icon} />
      </div>
    </header>
  );
}