import React, { useState } from "react";

import styles from "./App.module.css";
import Fretboard from "./Fretboard";
import { randomNotePosition } from "./FretPosition";
import NoteSelector from "./NoteSelector";

function App() {
  const [position, setPosition] = useState(randomNotePosition());
  return (
    <div className={styles.container}>
      <Fretboard position={position} showOctaves />
      <NoteSelector
        onMatch={() => {
          setPosition(randomNotePosition());
        }}
        position={position}
      />
    </div>
  );
}

export default App;
