import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { text_slice } from "./text_slice.mjs";
export function app_code_line_pieces_text(text, pieces, from, to) {
  arguments_assert(arguments, 4);
  ("the text from from to to as it reads once each piece solved wholly within it is written as its value: a + b + c, with a written as 3 and b as 10, reads 3 + 10 + c");
  ("Shared by the trace of a program, which says in words how a line reads at each step, and the stepper, which rewrites the line on the screen, so the words and the screen read the line by one rule. The size of what this gives from the start of a line to a place is where that place now stands, moved by every value solved in before it.");
  ("The pieces are in the order they stand in the line, as adding them keeps them");
  let r = "";
  let at = from;
  for (let piece of pieces) {
    let piece_from = property_get(piece, "from");
    let piece_to = property_get(piece, "to");
    let inside =
      greater_than_equal(piece_from, from) && less_than_equal(piece_to, to);
    if (inside) {
      r = r + text_slice(text, at, piece_from) + property_get(piece, "written");
      at = piece_to;
    }
  }
  r = r + text_slice(text, at, to);
  return r;
}
