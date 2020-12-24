export enum Name {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
}

export enum Accidental {
  SHARP = "\u266F",
  FLAT = "\u266D",
}

export interface Tone {
  name: Name;
  accidental: Accidental | null;
}

export default class Note {
  tones: Tone[];

  constructor(tones: Tone[]) {
    this.tones = tones;
  }

  isEqual(note: Note) {
    return note.tones.every((otherTone) =>
      this.tones.find(
        (tone) =>
          otherTone.name === tone.name &&
          otherTone.accidental === tone.accidental
      )
    );
  }

  getKey() {
    return this.tones.reduce(
      (acc, note) => (acc.length ? `${acc}-${note.name}` : note.name),
      ""
    );
  }
}

export const chromaticScale: Note[] = [
  new Note([{ name: Name.A, accidental: null }]),
  new Note([
    { name: Name.A, accidental: Accidental.SHARP },
    { name: Name.B, accidental: Accidental.FLAT },
  ]),
  new Note([{ name: Name.B, accidental: null }]),
  new Note([{ name: Name.C, accidental: null }]),
  new Note([
    { name: Name.C, accidental: Accidental.SHARP },
    { name: Name.D, accidental: Accidental.FLAT },
  ]),
  new Note([{ name: Name.D, accidental: null }]),
  new Note([
    { name: Name.D, accidental: Accidental.SHARP },
    { name: Name.E, accidental: Accidental.FLAT },
  ]),
  new Note([{ name: Name.E, accidental: null }]),
  new Note([{ name: Name.F, accidental: null }]),
  new Note([
    { name: Name.F, accidental: Accidental.SHARP },
    { name: Name.G, accidental: Accidental.FLAT },
  ]),
  new Note([{ name: Name.G, accidental: null }]),
  new Note([
    { name: Name.G, accidental: Accidental.SHARP },
    { name: Name.A, accidental: Accidental.FLAT },
  ]),
];

export const strings = [
  new Note([{ name: Name.E, accidental: null }]),
  new Note([{ name: Name.B, accidental: null }]),
  new Note([{ name: Name.G, accidental: null }]),
  new Note([{ name: Name.D, accidental: null }]),
  new Note([{ name: Name.A, accidental: null }]),
  new Note([{ name: Name.E, accidental: null }]),
];
