import React, { useState } from "react";
import { Progress } from "reactstrap";

import styles from "./App.module.css";
import Controls from "./Controls";
import Fretboard from "./Fretboard";

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
      <Controls
        onNext={() => setPosition(randomNotePosition())}
        {...position}
      />
    </div>
  );
}

export default App;
