import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

import styles from "./NoteSelector.module.css";

enum Note {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
}

enum Accidental {
  SHARP = "sharp",
  FLAT = "flat",
}

export default function NoteSelector() {
  const [note, setSelectedNote] = useState<Note | null>(null);
  const [accidental, setAccidental] = useState<Accidental | null>(null);

  return (
    <div className={styles.container}>
      <ButtonGroup className={styles["note-group"]}>
        <Button
          active={note === Note.A}
          onClick={() => setSelectedNote(Note.A)}
        >
          {Note.A}
        </Button>
        <Button
          active={note === Note.B}
          onClick={() => setSelectedNote(Note.B)}
        >
          {Note.B}
        </Button>
        <Button
          active={note === Note.C}
          onClick={() => setSelectedNote(Note.C)}
        >
          {Note.C}
        </Button>
        <Button
          active={note === Note.D}
          onClick={() => setSelectedNote(Note.D)}
        >
          {Note.D}
        </Button>
        <Button
          active={note === Note.E}
          onClick={() => setSelectedNote(Note.E)}
        >
          {Note.E}
        </Button>
        <Button
          active={note === Note.F}
          onClick={() => setSelectedNote(Note.F)}
        >
          {Note.F}
        </Button>
        <Button
          active={note === Note.G}
          onClick={() => setSelectedNote(Note.G)}
        >
          {Note.G}
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          active={accidental === Accidental.SHARP}
          onClick={() => setAccidental(Accidental.SHARP)}
        >
          &#9839;
        </Button>
        <Button
          active={accidental === Accidental.FLAT}
          onClick={() => setAccidental(Accidental.FLAT)}
        >
          &#9837;
        </Button>
      </ButtonGroup>
      <Button color="success">Next</Button>
    </div>
  );
}
