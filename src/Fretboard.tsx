import React from "react";

import styles from "./Fretboard.module.css";

export default function Fretboard() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>(1) E</div>
        <div>(2) B</div>
        <div>(3) G</div>
        <div>(4) D</div>
        <div>(5) A</div>
        <div>(6) E</div>
      </div>
      <div className={styles.fretboard}>
        <div className={styles.nut} />
        {/* 1st */}
        <div className={styles.fret}>
          <div className={styles.note} />
        </div>
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
          <div className={styles.note} />
        </div>
        <div className={styles.fret}>
          <div className={styles.note} />
        </div>
        {/* 2nd */}
        <div className={styles.nut} />
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
          <div className={`${styles.inlay} ${styles["inlay-top"]}`} />
        </div>
        {/* 3rd */}
        <div className={styles.nut} />
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
        <div className={styles.nut} />
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
          <div className={`${styles.inlay} ${styles["inlay-bottom"]}`} />
        </div>
        {/* 5th */}
        <div className={styles.nut} />
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
      </div>
    </div>
  );
}
