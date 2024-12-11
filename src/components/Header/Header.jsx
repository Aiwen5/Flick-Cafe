import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import CartOverlay from '../Menu/CartOverlay';
import styles from './Header.module.css';

export default function Header({ overlayCategories, setOverlayCategories }) {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [itemQtyState, setItemQtyState] = useState();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const existingCategories = JSON.parse(localStorage.getItem("cartItems")) || {};
    setOverlayCategories(existingCategories);
  }, [setOverlayCategories]);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/WhiteLogo.svg" alt="flick cafe logo" />
        <h1>flick cafe</h1>
      </Link>
      <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
        <Link to="/menu" className={styles.navItem} onClick={toggleMenu}>Menu</Link>
        <Link to="/screenings" className={styles.navItem} onClick={toggleMenu}>Screenings</Link>
        <Link to="/reviews" className={styles.navItem} onClick={toggleMenu}>Reviews</Link>
        <Link to="/contact" className={styles.navItem} onClick={toggleMenu}>Contact Us</Link>
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
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <CartOverlay
        cartItems={overlayCategories}
        setOverlayCategories={setOverlayCategories}
        setOverlayOpen={setOverlayOpen}
        overlayOpen={overlayOpen}
        setItemQtyState={setItemQtyState}
      />
    </header>
  );
}