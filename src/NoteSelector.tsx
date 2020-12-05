import React, { useEffect, useState } from "react";

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

  const [name, setName] = useState<Name | null>(null);
  const [accidental, setAccidental] = useState<Accidental | null>(null);

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

  const notes = chromaticScale[(stringIndex + fret) % chromaticScale.length];
  const isMatch = notes.find(
    (note: Note) => note.name === name && note.accidental === accidental
  );

  const onNameClick = (name: Name) => () => {
    setName(name);
    setAccidental(null);
  };

  useEffect(() => {
    if (isMatch) {
      onNext();
      setName(null);
      setAccidental(null);
    }
  }, [onNext, isMatch, name, accidental]);

  return (
    <div className={styles.container}>
      <div>
        <label>
          <input
            checked={name === Name.A}
            onClick={onNameClick(Name.A)}
            type="radio"
          />
          {Name.A}
        </label>
        <label>
          <input
            checked={name === Name.B}
            onClick={onNameClick(Name.B)}
            type="radio"
          />
          {Name.B}
        </label>
        <label>
          <input
            checked={name === Name.C}
            onClick={onNameClick(Name.C)}
            type="radio"
          />
          {Name.C}
        </label>
        <label>
          <input
            checked={name === Name.D}
            onClick={onNameClick(Name.D)}
            type="radio"
          />
          {Name.D}
        </label>
        <label>
          <input
            checked={name === Name.E}
            onClick={onNameClick(Name.E)}
            type="radio"
          />
          {Name.E}
        </label>
        <label>
          <input
            checked={name === Name.F}
            onClick={onNameClick(Name.F)}
            type="radio"
          />
          {Name.F}
        </label>
        <label>
          <input
            checked={name === Name.G}
            onClick={onNameClick(Name.G)}
            type="radio"
          />
          {Name.G}
        </label>
      </div>
      <div>
        <label>
          <input
            checked={accidental === Accidental.SHARP}
            disabled={name === Name.B || name === Name.E}
            onClick={() => setAccidental(Accidental.SHARP)}
            title="Sharp"
            type="radio"
          />
          &#9839;
        </label>
        <label>
          <input
            checked={accidental === Accidental.FLAT}
            disabled={name === Name.C || name === Name.F}
            onClick={() => setAccidental(Accidental.FLAT)}
            title="Flat"
            type="radio"
          />
          &#9837;
        </label>
        <label>
          <input
            checked={accidental === null}
            onClick={() => setAccidental(null)}
            title="Natural"
            type="radio"
          />
          &#9838;
        </label>
      </div>
    </div>
  );
}
