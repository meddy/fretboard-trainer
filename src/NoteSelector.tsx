import React, { useEffect, useState } from "react";

import Note, { chromaticScale, strings } from "./Note";
import NoteLabel from "./NoteLabel";
import styles from "./NoteSelector.module.css";

interface NoteSelectorProps {
  onMatch: () => void;
  string: number;
  fret: number;
}

export default function NoteSelector(props: NoteSelectorProps) {
  const { string, fret, onMatch } = props;

  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  let openStringNote = strings[string - 1];
  const stringIndex = chromaticScale.findIndex((note) =>
    openStringNote.isEqual(note)
  );
  const matchingNote =
    chromaticScale[(stringIndex + fret) % chromaticScale.length];

  useEffect(() => {
    let timeoutId: number;
    if (selectedNote && selectedNote.isEqual(matchingNote)) {
      timeoutId = window.setTimeout(() => {
        setSelectedNote(null);
        onMatch();
      }, 500);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [selectedNote, matchingNote, onMatch]);

  return (
    <div className={styles.container}>
      {chromaticScale.map((note) => {
        return (
          <label key={note.getKey()}>
            <input
              checked={selectedNote ? note.isEqual(selectedNote) : false}
              onChange={() => {
                setSelectedNote(note);
              }}
              type="radio"
            />
            <NoteLabel note={note} />
          </label>
        );
      })}
    </div>
  );
}
