import React from "react";

import styles from "./Fretboard.module.css";

export default function Fretboard() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          (1)<span className={styles["info-note"]}>E</span>
        </div>
        <div>
          (2)<span className={styles["info-note"]}>B</span>
        </div>
        <div>
          (3)<span className={styles["info-note"]}>G</span>
        </div>
        <div>
          (4)<span className={styles["info-note"]}>D</span>
        </div>
        <div>
          (5)<span className={styles["info-note"]}>A</span>
        </div>
        <div>
          (6)<span className={styles["info-note"]}>E</span>
        </div>
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
