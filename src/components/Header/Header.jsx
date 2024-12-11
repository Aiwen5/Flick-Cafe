import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { FaShoppingBag, FaUser } from 'react-icons/fa';
import CartOverlay from '../Menu/CartOverlay';

export default function Header({overlayCategories, setOverlayCategories}) {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [itemQtyState, setItemQtyState] = useState();

  useEffect(() => {
    const existingCategories = JSON.parse(localStorage.getItem("cartItems")) || {};
    setOverlayCategories(existingCategories)
  }, [setOverlayCategories])
  
  useEffect(() => {
    if (overlayOpen) {
      document.body.classList.add("overlay-open");
    } else {
      document.body.classList.remove("overlay-open");
    }

    return () => {
      document.body.classList.remove("overlay-open");
    };
  }, [overlayOpen]);
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/WhiteLogo.svg" alt="flick cafe logo" />
        <h1>flick cafe</h1>
      </Link>
      <nav className={styles.nav}>
        <Link to="/menu" className={styles.navItem}>Menu</Link>
        <Link to="/screenings" className={styles.navItem}>Screenings</Link>
        <Link to="/reviews" className={styles.navItem}> Reviews</Link>
        <Link to="/contact" className={styles.navItem}>Contact Us</Link>
      </nav>
      <div className={styles.icons}>
        <button className={styles.icon} onClick={() => setOverlayOpen(true)}>
          <FaShoppingBag />
          {!!itemQtyState && (
            <div className={styles.indicator}>
              {itemQtyState}
            </div>
          )}
        </button>
        <FaUser className={styles.icon} />
        
      </div>
      <CartOverlay cartItems={overlayCategories} {...{setOverlayCategories, setOverlayOpen, overlayOpen, setItemQtyState}} />
    </header>
  );
}