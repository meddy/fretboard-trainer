import React, { useState } from "react";

import styles from "./App.module.css";
import Fretboard from "./Fretboard";
import NoteSelector from "./NoteSelector";

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomNotePosition() {
  return {
    string: getRandomInt(1, 6),
    fret: getRandomInt(0, 12),
  };
}

function App() {
  const [position, setPosition] = useState(randomNotePosition());
  return (
    <div className={styles.container}>
      <Fretboard {...position} />
      <NoteSelector
        onMatch={() => {
          setPosition(randomNotePosition());
        }}
        {...position}
      />
    </div>
  );
}

export default App;
