import React from "react";
import clsx from "clsx";

import styles from "./Fretboard.module.css";

interface FretboardProps {
  string: number;
  fret: number;
}

const rows = [1, 2, 3, 4, 5];
const columns = Array.from(Array(13).keys());
const inlays = [
  { row: 2, column: 12 },
  { row: 3, column: 3 },
  { row: 3, column: 5 },
  { row: 3, column: 7 },
  { row: 3, column: 9 },
  { row: 4, column: 12 },
];

export default function Fretboard(props: FretboardProps) {
  const { string, fret } = props;
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
        {rows.map((row) =>
          columns.map((column) => {
            const match =
              fret === column &&
              (string === row || (string === 6 && row === 5));
            const key = `${row}-${column}`;

            // open string notes
            if (column === 0) {
              return (
                <div
                  className={clsx({
                    [styles.nut]: true,
                    [styles.note]: match,
                    [styles["open-note"]]: match,
                    [styles["sixth-string-note"]]: string === 6,
                  })}
                  key={key}
                />
              );
            }

            const inlay = inlays.find(
              (inlay) => row === inlay.row && column === inlay.column
            );
            return (
              <div className={styles.fret} key={key}>
                {match && (
                  <div
                    className={clsx({
                      [styles.note]: true,
                      [styles["sixth-string-note"]]: props.string === 6,
                    })}
                  />
                )}
                {inlay && (
                  <div
                    className={clsx({
                      [styles.inlay]: true,
                      [styles["inlay-top"]]: row === 2,
                      [styles["inlay-bottom"]]: row === 4,
                    })}
                    key={`${key}-inlay`}
                  />
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
