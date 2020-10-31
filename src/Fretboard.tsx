import React from "react";
import clsx from "clsx";

import styles from "./Fretboard.module.css";

interface FretboardProps {
  string: number;
  fret: number;
}

const strings = [1, 2, 3, 4, 5];
const frets = Array.from(Array(13).keys());
const inlays = [
  { string: 2, fret: 12 },
  { string: 3, fret: 3 },
  { string: 3, fret: 5 },
  { string: 3, fret: 7 },
  { string: 3, fret: 9 },
  { string: 4, fret: 12 },
];

export default function Fretboard(props: FretboardProps) {
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
        {strings.map((string) =>
          frets.map((fret) => {
            const match = props.string === string && props.fret === fret;
            if (fret === 0) {
              return (
                <div
                  className={clsx({
                    [styles.note]: match,
                    [styles["open-note"]]: match,
                    [styles["sixth-string-note"]]: props.string === 6,
                  })}
                  key={`${string}-${fret}`}
                />
              );
            }

            return (
              <div className={styles.fret} key={`${string}-${fret}`}>
                {match && (
                  <div
                    className={clsx({
                      [styles.note]: true,
                      [styles["sixth-string-note"]]: props.string === 6,
                    })}
                  />
                )}
                {inlays
                  .filter(
                    (inlay) => string === inlay.string && fret === inlay.fret
                  )
                  .map(() => (
                    <div
                      className={clsx({
                        [styles.inlay]: true,
                        [styles["inlay-top"]]: string === 2,
                        [styles["inlay-bottom"]]: string === 4,
                      })}
                      key={`${string}-${fret}-inlay`}
                    />
                  ))}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
