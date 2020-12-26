import React from "react";

import Note from "./Note";

interface NoteLabelProps {
  note: Note;
}

export default function NoteLabel(props: NoteLabelProps) {
  const { note } = props;
  const [toneA, toneB] = note.tones;
  return (
    <div>
      {!!toneA && (
        <var key={`${toneA.name}-${toneA.accidental}`}>
          {toneA.name}
          {!!toneA.accidental && <sup>{toneA.accidental}</sup>}
        </var>
      )}
      {!!toneB && "/"}
      {!!toneB && (
        <var key={`${toneB.name}-${toneB.accidental}`}>
          {toneB.name}
          {!!toneB.accidental && <sup>{toneB.accidental}</sup>}
        </var>
      )}
    </div>
  );
}
