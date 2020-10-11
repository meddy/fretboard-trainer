import React from 'react';
import styles from './Fretboard.module.css';

// 150
// 144
// 139
// 131
// 123
// 116
// 108
// 106
// 97
// 90
// 84

export default function Fretboard() {
  return <div className={styles.container}>
    {/* 1st */}
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    {/* 2nd */}
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret}>
      <div className={styles.inlay} />
    </div>
    {/* 3rd */}
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret}>
      <div className={styles.inlay} />
    </div>
    <div className={styles.fret} />
    <div className={styles.fret}>
      <div className={styles.inlay} />
    </div>
    <div className={styles.fret} />
    <div className={styles.fret}>
      <div className={styles.inlay} />
    </div>
    <div className={styles.fret} />
    <div className={styles.fret}>
      <div className={styles.inlay} />
    </div>
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    {/* 4th */}
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret}>
      <div className={styles.inlay} />
    </div>
    {/* 5th */}
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    <div className={styles.fret} />
    {/* 6th */}
  </div>;
}
