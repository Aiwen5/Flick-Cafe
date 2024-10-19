import React from 'react';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.heading}>Menu Page</h1>
      <p className={styles.description}>This is the menu page.</p>
    </div>
  );
}