import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

import styles from "./NoteSelector.module.css";

enum Name {
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

interface NoteSelectorProps {
  onNext: () => void;
  string: number;
  fret: number;
}

interface Note {
  name: Name;
  accidental: Accidental | null;
}

const strings = [
  { name: Name.E, accidental: null },
  { name: Name.B, accidental: null },
  { name: Name.G, accidental: null },
  { name: Name.D, accidental: null },
  { name: Name.A, accidental: null },
  { name: Name.E, accidental: null },
];

const chromaticScale: Note[][] = [
  [{ name: Name.A, accidental: null }],
  [
    { name: Name.A, accidental: Accidental.SHARP },
    { name: Name.B, accidental: Accidental.FLAT },
  ],
  [{ name: Name.B, accidental: null }],
  [{ name: Name.C, accidental: null }],
  [
    { name: Name.C, accidental: Accidental.SHARP },
    { name: Name.D, accidental: Accidental.FLAT },
  ],
  [{ name: Name.D, accidental: null }],
  [
    { name: Name.D, accidental: Accidental.SHARP },
    { name: Name.E, accidental: Accidental.FLAT },
  ],
  [{ name: Name.E, accidental: null }],
  [{ name: Name.F, accidental: null }],
  [
    { name: Name.F, accidental: Accidental.SHARP },
    { name: Name.G, accidental: Accidental.FLAT },
  ],
  [{ name: Name.G, accidental: null }],
  [
    { name: Name.G, accidental: Accidental.SHARP },
    { name: Name.A, accidental: Accidental.FLAT },
  ],
];

export default function NoteSelector(props: NoteSelectorProps) {
  const { string, fret, onNext } = props;
  const [selectedName, setSelectedName] = useState<Name | null>(null);
  const [selectedAccidental, setAccidental] = useState<Accidental | null>(null);
  const [isWrong, setIsWrong] = useState<boolean>(false);

  let stringNote = strings[string - 1];
  const stringIndex = chromaticScale.findIndex((notes) => {
    for (const note of notes) {
      if (
        note.name === stringNote.name &&
        note.accidental === stringNote.accidental
      ) {
        return true;
      }
    }

    return false;
  });

  const index = (stringIndex + fret) % chromaticScale.length;
  let notes = chromaticScale[index];

  const match = notes.find(
    (note: Note) =>
      note.name === selectedName && note.accidental === selectedAccidental
  );

  return (
    <div className={styles.container}>
      <ButtonGroup className={styles["note-group"]}>
        <Button
          active={selectedName === Name.A}
          onClick={() => setSelectedName(Name.A)}
        >
          {Name.A}
        </Button>
        <Button
          active={selectedName === Name.B}
          onClick={() => setSelectedName(Name.B)}
        >
          {Name.B}
        </Button>
        <Button
          active={selectedName === Name.C}
          onClick={() => setSelectedName(Name.C)}
        >
          {Name.C}
        </Button>
        <Button
          active={selectedName === Name.D}
          onClick={() => setSelectedName(Name.D)}
        >
          {Name.D}
        </Button>
        <Button
          active={selectedName === Name.E}
          onClick={() => setSelectedName(Name.E)}
        >
          {Name.E}
        </Button>
        <Button
          active={selectedName === Name.F}
          onClick={() => setSelectedName(Name.F)}
        >
          {Name.F}
        </Button>
        <Button
          active={selectedName === Name.G}
          onClick={() => setSelectedName(Name.G)}
        >
          {Name.G}
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          active={selectedAccidental === Accidental.SHARP}
          onClick={() => {
            setAccidental(Accidental.SHARP);
          }}
          title="Sharp"
        >
          &#9839;
        </Button>
        <Button
          active={selectedAccidental === Accidental.FLAT}
          onClick={() => {
            setAccidental(Accidental.FLAT);
          }}
          title="Flat"
        >
          &#9837;
        </Button>
        <Button
          active={selectedAccidental === null}
          onClick={() => {
            setAccidental(null);
          }}
          title="Natural"
        >
          &#9838;
        </Button>
      </ButtonGroup>
      <Button
        color={isWrong ? "danger" : "success"}
        onClick={() => {
          if (match) {
            onNext();
            setSelectedName(null);
            setAccidental(null);
            setIsWrong(false);
          } else {
            setIsWrong(true);
          }
        }}
      >
        Next
      </Button>
    </div>
  );
}
