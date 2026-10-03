import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_pointer_color_or_null } from "./app_code_pointer_color_or_null.mjs";
import { app_code_code_dark_lines_pointed_cut } from "./app_code_code_dark_lines_pointed_cut.mjs";
export function app_code_code_dark_lines_part_pointed(pointers, part, color) {
  arguments_assert(arguments, 3);
  ("a painter for a program on more than one line, drawing it as the pointed painter does but putting the colour behind the first place part is written, such as n % 2, which is more than one whole name or number and so is something a pointer cannot name; asked by the human 2026-10-03 so the remainder in Is a number even wears its colour in the program too");
  ("Outside part, each whole name or number is coloured as the pointed painter colours it, so a program can colour both a name that holds the remainder, such as left, and the n % 2 that works it out.");
  ("The pieces the shared walk hands over are counted rather than matched, because a piece cannot see the one after it: the whole names and numbers before part are counted once from the program, and the colour is on from the first of part's own to the last, with what lies between them.");
  let word = /^(\d+|[A-Za-z_]\w*)$/;
  let words = /\b(\d+|[A-Za-z_]\w*)\b/g;
  function paint(component, code) {
    let at = code.indexOf(part);
    let before = code.slice(0, at).match(words) || [];
    let inside_part = part.match(words) || [];
    let first = before.length;
    let last = subtract(first + inside_part.length, 1);
    let count = 0;
    let on = false;
    function cut(piece) {
      let b = word.test(piece);
      if (not(b)) {
        let drawn = [[piece, on ? color : null]];
        return drawn;
      }
      if (equal(count, first)) {
        on = true;
      }
      let pointed = app_code_pointer_color_or_null(pointers, piece);
      let drawn = [[piece, on ? color : pointed]];
      if (equal(count, last)) {
        on = false;
      }
      count = count + 1;
      return drawn;
    }
    let draw = app_code_code_dark_lines_pointed_cut(cut);
    draw(component, code);
  }
  return paint;
}
