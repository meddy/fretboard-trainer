import React, { useEffect, useState } from "react";

import { FretPosition } from "./FretPosition";
import Note, { chromaticScale } from "./Note";
import NoteLabel from "./NoteLabel";
import styles from "./NoteSelector.module.css";

interface NoteSelectorProps {
  onMatch: () => void;
  position: FretPosition;
}

export default function NoteSelector(props: NoteSelectorProps) {
  const { position, onMatch } = props;
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const matchingNote = Note.positionToNote(position);

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
