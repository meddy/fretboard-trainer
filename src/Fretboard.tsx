import React from "react";
import clsx from "clsx";

import styles from "./Fretboard.module.css";
import { FretPosition } from "./FretPosition";
import Note from "./Note";

interface FretboardProps {
  position: FretPosition;
  showOctaves: boolean;
}

const rows = [1, 2, 3, 4, 5, 6];
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
  const { position } = props;
  const { string, fret } = position;
  const mainNote = Note.positionToNote(position);
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
          return columns.map((column) => {
            const stringMatch = string === row;
            const match = fret === column && stringMatch;
            const key = `${row}-${column}`;

            const note = Note.positionToNote({ string: row, fret: column });
            const octave = !match && mainNote.isEqual(note);

            // open string notes
            if (column === 0) {
              return (
                <div
                  className={clsx({
                    [styles.nut]: true,
                  })}
                  key={key}
                />
              );
            }

            const inlay = inlays.find(
              (inlay) => row === inlay.row && column === inlay.column
            );
            return (
              <div
                className={clsx({
                  [styles.fret]: true,
                  [styles["open-note"]]: stringMatch && fret === 0,
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
                {octave && (
                  <div
                    className={clsx({
                      [styles.note]: true,
                      [styles["octave-note"]]: octave,
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
