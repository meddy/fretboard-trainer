import React, { useEffect, useState } from "react";
import { Badge, Button, ButtonGroup } from "reactstrap";

import styles from "./Controls.module.css";
import Timer from "./Timer";

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

interface ControlsProps {
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

export default function Controls(props: ControlsProps) {
  const { string, fret, onNext } = props;

  const [name, setName] = useState<Name | null>(null);
  const [accidental, setAccidental] = useState<Accidental | null>(null);
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);

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

  useEffect(() => {
    setAccidental(null);
  }, [name]);

  return (
    <div className={`mb-1 ${styles.container}`}>
      <div className="d-flex justify-content-center mb-1">
        <ButtonGroup className="mr-1">
          <Button active={name === Name.A} onClick={() => setName(Name.A)}>
            {Name.A}
          </Button>
          <Button active={name === Name.B} onClick={() => setName(Name.B)}>
            {Name.B}
          </Button>
          <Button active={name === Name.C} onClick={() => setName(Name.C)}>
            {Name.C}
          </Button>
          <Button active={name === Name.D} onClick={() => setName(Name.D)}>
            {Name.D}
          </Button>
          <Button active={name === Name.E} onClick={() => setName(Name.E)}>
            {Name.E}
          </Button>
          <Button active={name === Name.F} onClick={() => setName(Name.F)}>
            {Name.F}
          </Button>
          <Button active={name === Name.G} onClick={() => setName(Name.G)}>
            {Name.G}
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button
            active={accidental === Accidental.SHARP}
            disabled={name === Name.B || name === Name.E}
            onClick={() => setAccidental(Accidental.SHARP)}
            title="Sharp"
          >
            &#9839;
          </Button>
          <Button
            active={accidental === Accidental.FLAT}
            disabled={name === Name.C || name === Name.F}
            onClick={() => setAccidental(Accidental.FLAT)}
            title="Flat"
          >
            &#9837;
          </Button>
          <Button
            active={accidental === null}
            onClick={() => setAccidental(null)}
            title="Natural"
          >
            &#9838;
          </Button>
        </ButtonGroup>
      </div>
      <div>
        {started && (
          <>
            <Button
              block
              className="mb-1"
              color={isWrong ? "danger" : "success"}
              disabled={name === null}
              onClick={() => {
                if (isMatch) {
                  onNext();
                  setName(null);
                  setAccidental(null);
                  setIsWrong(false);
                  setScore(score + 1);
                } else {
                  setIsWrong(true);
                }
              }}
            >
              Check&nbsp;
              <Badge color="primary">{score}</Badge>
            </Button>
            <Timer started onFinish={() => {}} />
          </>
        )}
        {!started && (
          <Button block color="primary" onClick={() => setStarted(true)}>
            Start
          </Button>
        )}
      </div>
    </div>
  );
}
