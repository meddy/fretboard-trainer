import React, { useState } from "react";
import { Progress } from "reactstrap";

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
  const [started, setStarted] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <Fretboard {...position} />
      <NoteSelector
        onNext={() => {
          setPosition(randomNotePosition());
        }}
        onStart={() => setStarted(true)}
        started={started}
        {...position}
      />
      <Progress value={100} />
    </div>
  );
}

export default App;
