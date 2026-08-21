import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_repeated } from "./text_repeated.mjs";
import { text_size } from "./text_size.mjs";

export function text_right_aligned(text, width) {
  arguments_assert(arguments, 2);
  "This text with enough spaces put in front of it to reach the given width, so that a column of them ends on the same character.";
  "For a column of numbers read down rather than across: the ones and the tens and the hundreds line up under each other, and a reader can see the shape of the column without reading any of it. Text already at the width or past it is handed back untouched, because cutting it would lose the thing the column was made to show.";
  "The other padding in this repo puts the filler on both sides. That one is for a word being set apart from what is around it; this one is for a column, and a column is aligned on one edge.";
  let size = text_size(text);
  let short = greater_than(width, size);
  if (short) {
    let missing = subtract(width, size);
    let spaces = text_repeated(" ", missing);
    let aligned = text_combine(spaces, text);
    return aligned;
  }
  return text;
}
