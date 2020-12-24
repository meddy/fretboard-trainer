export interface FretPosition {
  string: number;
  fret: number;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomNotePosition(): FretPosition {
  return {
    string: getRandomInt(1, 6),
    fret: getRandomInt(0, 12),
  };
}
