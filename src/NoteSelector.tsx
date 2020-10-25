import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

export default function NoteSelector() {
  const [note, setSelectedNote] = useState<string | null>(null);

  return (
    <>
      <ButtonGroup>
        <Button active={note === "A"} onClick={() => setSelectedNote("A")}>
          A
        </Button>
        <Button active={note === "B"} onClick={() => setSelectedNote("B")}>
          B
        </Button>
        <Button active={note === "C"} onClick={() => setSelectedNote("C")}>
          C
        </Button>
        <Button active={note === "D"} onClick={() => setSelectedNote("D")}>
          D
        </Button>
        <Button active={note === "E"} onClick={() => setSelectedNote("E")}>
          E
        </Button>
        <Button active={note === "F"} onClick={() => setSelectedNote("F")}>
          F
        </Button>
        <Button active={note === "G"} onClick={() => setSelectedNote("G")}>
          G
        </Button>
      </ButtonGroup>
      <div>
        <label>
          <input id="flat" name="accidental" type="radio" value="flat" />
          &#9839;
        </label>
        <label>
          <input id="sharp" name="accidental" type="radio" value="sharp" />
          &#9837;
        </label>
      </div>
    </>
  );
}
