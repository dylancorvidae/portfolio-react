import React from 'react';
import styles from './Header.css';

export default function AboutPicContainer() {
  return (
    <>
      <header>
        <h1 className={styles.typewriter} id="header-h1">DYLAN CORVIDAE</h1>
        <h2 className={styles.typewriter2} id="header-h2">FRONT-END DEVELOPER</h2>
      </header>
    </>
  );
}