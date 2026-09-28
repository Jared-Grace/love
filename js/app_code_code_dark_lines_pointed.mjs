import { app_code_code_dark_lines_pointed_cut } from "./app_code_code_dark_lines_pointed_cut.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_pointer_color_or_null } from "./app_code_pointer_color_or_null.mjs";
export function app_code_code_dark_lines_pointed(pointers) {
  arguments_assert(arguments, 1);
  ("a painter for a program on more than one line, drawing it as the note-dimming writer does and then giving each whole number a pointer names that pointer's colour behind it - so the 7 in let chair = 7; wears the green the 7 wears in the writing and the picture above it");
  ("Only whole numbers and whole names standing on their own are coloured: a digit inside a name, such as the 2 in a2, is part of the name and is left as it is, and a name is coloured only when a pointer lists it, so row is coloured and rows_before is not. Names were added at the human's word, 2026-09-28, so the names row and column wear the colours those words wear in the writing.");
  function cut(piece) {
    "the piece whole, in the colour a pointer names it by, or none";
    let color = app_code_pointer_color_or_null(pointers, piece);
    let drawn = [[piece, color]];
    return drawn;
  }
  let paint = app_code_code_dark_lines_pointed_cut(cut);
  return paint;
}
