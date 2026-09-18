import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_note_name_mark_opacity() {
  arguments_assert(arguments, 0);
  ("how much of the note's own colour the two mark characters are drawn in, so they stand a step behind the name they hold");
  ("Less of the same colour rather than a colour of its own, so the palette gains no extra grey and a note whose colour is ever changed keeps its marks a step behind it without anything being changed twice.");
  ("The mark has a job to do and must stay visible doing it - a reader who cannot tell two colours apart has nothing else saying the letter is a name - so this is a step back and not a fade to nothing.");
  let o = "0.55";
  return o;
}
