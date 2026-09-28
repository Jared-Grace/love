import { not_equal } from "./not_equal.mjs";
import { app_code_number_pointed_parts } from "./app_code_number_pointed_parts.mjs";
import { app_code_pointer_color_or_null } from "./app_code_pointer_color_or_null.mjs";
import { app_code_code_dark_lines_pointed_cut } from "./app_code_code_dark_lines_pointed_cut.mjs";
export function app_code_code_dark_lines_number_part_pointed(pointers) {
  "a painter for a program on more than one line that colours part of a number as well as a whole one: the 3 at the end of 123 when a pointer names 3, or the 12 in front of it when a pointer names 12 - so the program under the last-digit lessons is coloured as their writing is, asked by the human 2026-09-28";
  "A painter of its own rather than the pointed painter taught to cut numbers, because that one colours the programs of lessons that point at a 1, and would then colour the 1 of every 10 and 12 in them.";
  function cut(piece) {
    let found = app_code_number_pointed_parts(pointers, piece);
    if (not_equal(found, null)) {
      return found;
    }
    let color = app_code_pointer_color_or_null(pointers, piece);
    let drawn = [[piece, color]];
    return drawn;
  }
  let paint = app_code_code_dark_lines_pointed_cut(cut);
  return paint;
}
