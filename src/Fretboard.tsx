import React from "react";
import clsx from "clsx";

import styles from "./Fretboard.module.css";
import { FretPosition } from "./FretPosition";
import Note from "./Note";

interface FretboardProps {
  position: FretPosition;
  showOctaves: boolean;
}

const rows = Array.from(Array(11).keys()); // 6 strings + 5 fretboard spaces
const columns = Array.from(Array(24).keys()); // 11 frets + 5 fretboard spaces + nut
const inlays = [
  { row: 3, column: 23 },
  { row: 5, column: 5 },
  { row: 5, column: 9 },
  { row: 5, column: 13 },
  { row: 5, column: 17 },
  { row: 9, column: 23 },
];

export default function Fretboard(props: FretboardProps) {
  const { position, showOctaves } = props;
  const { string, fret } = position;
  const mainNote = Note.positionToNote(position);
  const scale = mainNote.getMajorScale();
  let currentString = 0;
  let currentFret = 0;
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
        {rows.map((row) => {
          currentFret = 0;
          const isString = row % 2 === 0;
          if (isString) {
            currentString++;
          }
          return columns.map((column) => {
            const isFret = column % 2 === 0;
            if (isFret) {
              currentFret++;
            }
            const isNut = column === 0;
            // const note = isString
            //   ? Note.positionToNote({
            //       string: currentString,
            //       fret: currentFret,
            //     })
            //   : null;
            const match =
              isString &&
              !isFret &&
              fret === currentFret &&
              string === currentString;
            const octave = false; //!match && mainNote.isEqual(note);
            const isScale = false; //!match && scale.find((scaleNote) => note.isEqual(scaleNote));
            const key = `${row}-${column}`;

            const inlay = inlays.find(
              (inlay) => row === inlay.row && column === inlay.column
            );

            return (
              <div
                className={clsx({
                  [styles.string]: isString,
                  [styles.nut]: isNut && !isString,
                  [styles.fret]: isFret && !isNut && !isString,
                  [styles.wood]: !isFret && !isNut && !isString,
                })}
                key={key}
              >
                {match && (
                  <div
                    className={clsx({
                      [styles.note]: true,
                    })}
                  />
                )}
                {showOctaves && octave && false && (
                  <div
                    className={clsx({
                      [styles.note]: true,
                      [styles["octave-note"]]: octave,
                    })}
                  />
                )}
                {isScale && !octave && false && (
                  <div
                    className={clsx({
                      [styles.note]: true,
                      [styles["scale-note"]]: true,
                    })}
                  />
                )}
                {inlay && (
                  <div
                    className={clsx({
                      [styles.inlay]: true,
                      [styles["inlay-offset"]]: row !== 5,
                    })}
                  />
                )}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
