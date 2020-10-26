import React from "react";

import styles from "./App.module.css";
import Fretboard from "./Fretboard";
import NoteSelector from "./NoteSelector";

function App() {
  return (
    <div className={styles.container}>
      <Fretboard />
      <NoteSelector />
    </div>
  );
}

export default App;
