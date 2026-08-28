import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_timing_held_open(held, opened) {
  arguments_assert(arguments, 2);
  ("$plain held");
  ("$plain opened");
  ("Loads a passage into the tapping, keeping whatever times were already recorded for it and putting the cursor back at the first line.");
  ("THE TIMES COME BACK AND THE PLACE DOES NOT. What was recorded before is worth keeping - it is the expensive part - but where somebody had got to is not, because a person opening a passage again is opening it in a new sitting and has to hear where they are before they can tap. Restoring a cursor would drop them into the middle of a song with no idea what the last line they heard was.");
  ("A line that was never timed comes in as nothing rather than as a zero. Zero is a real moment in a song, the very first one, so a line standing at zero because nobody has heard it yet is indistinguishable from a line that genuinely begins there.");
  function line_text(line) {
    let r = line.text;
    return r;
  }
  function line_start(line) {
    let r2 = line.start;
    return r2;
  }
  held.texts = opened.lines.map(line_text);
  held.starts = opened.lines.map(line_start);
  held.cursor = 0;
}
