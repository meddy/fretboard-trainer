import React, { useState } from "react";

import styles from "./App.module.css";
import Fretboard from "./Fretboard";
import { randomNotePosition } from "./FretPosition";
import NoteSelector from "./NoteSelector";

function App() {
  const [showOctaves, setShowOctaves] = useState(false);
  const [position, setPosition] = useState(randomNotePosition());
  return (
    <div className={styles.container}>
      <Fretboard position={position} showOctaves={showOctaves} />
      <NoteSelector
        onMatch={() => {
          setPosition(randomNotePosition());
        }}
        position={position}
      />
      <div className={styles.options}>
        <button onClick={() => setShowOctaves(!showOctaves)} type="button">
          Show Octaves
        </button>
        <button onClick={() => setPosition(randomNotePosition)} type="button">
          New Note
        </button>
      </div>
    </div>
  );
}

export default App;
