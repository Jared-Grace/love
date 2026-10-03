import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_code_dark_lines_pointed_cut } from "./app_code_code_dark_lines_pointed_cut.mjs";
export function app_code_code_dark_lines_part_pointed(part, color) {
  arguments_assert(arguments, 2);
  ("a painter for a program on more than one line, drawing it as the pointed painter does but putting the colour behind the first place part is written, such as n % 2, which is more than one whole name or number and so is something a pointer cannot name; asked by the human 2026-10-03 so the remainder in Is a number even wears its colour in the program too");
  ("The pieces the shared walk hands over are counted rather than matched, because a piece cannot see the one after it: the whole names and numbers before part are counted once from the program, and the colour is on from the first of part's own to the last, with what lies between them.");
  let word = /^(\d+|[A-Za-z_]\w*)$/;
  let words = /\b(\d+|[A-Za-z_]\w*)\b/g;
  function paint(component, code) {
    let at = code.indexOf(part);
    let before = code.slice(0, at).match(words) || [];
    let inside_part = part.match(words) || [];
    let first = before.length;
    let last = first + inside_part.length - 1;
    let count = 0;
    let on = false;
    function cut(piece) {
      if (!word.test(piece)) {
        let drawn = [[piece, on ? color : null]];
        return drawn;
      }
      if (count === first) {
        on = true;
      }
      let drawn = [[piece, on ? color : null]];
      if (count === last) {
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
