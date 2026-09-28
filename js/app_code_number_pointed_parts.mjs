import { text_combine } from "./text_combine.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_code_pointer_color_or_null } from "./app_code_pointer_color_or_null.mjs";
export function app_code_number_pointed_parts(pointers, piece) {
  "a piece of code ending in a number, cut where a pointer names part of that number: what comes before the number, the number but its last digit, that last digit - or the .3 after a dot - and what follows, each as a pair of its text and its colour, or null for a part no pointer names; so with the 3 pointed 123 is 12 and a coloured 3, with the 12 pointed 12.3 is a coloured 12 and .3, and Math.floor(123 is Math.floor( then 12 and 3";
  "Null when nothing is to be cut: the piece does not end in a number of two or more digits, or no pointer names either part. The caller then colours the piece whole, as a pointed line does, so a pointer naming a whole number still reaches it.";
  "Written once for the writing and the code both, so the 3 in 123 is cut the same way in a sentence and in the program under it, asked by the human 2026-09-28.";
  "THE DOT AND THE DIGIT AFTER IT TOO, asked by the human 2026-09-28 for the all-but-the-last-digit lesson: in 12.3 the dot and the 3 each take a colour of their own. The dot is named by a pointer on the dot, and the digit after it by a pointer on the dot and the digit together, such as .3, so a pointer on 3 still colours the 3 of 123 and never the 3 after a dot. A number that is only a dot and a digit, such as .3, is cut the same way. Not picked: a pointer on 3 reaching the 3 after a dot as well, which would colour the 3 of 123 in the lesson where only the 12 is coloured.";
  let found = piece.match(/^(\D*?)(\d*)(\.?)(\d)(\D*)$/);
  if (equal(found, null)) {
    return null;
  }
  let body = found[2];
  let dot = found[3];
  let digit = found[4];
  if (equal(body, "") && equal(dot, "")) {
    return null;
  }
  let color_body = app_code_pointer_color_or_null(pointers, body);
  let color_dot = app_code_pointer_color_or_null(pointers, dot);
  let digit_named = text_combine(dot, digit);
  let color_digit = app_code_pointer_color_or_null(pointers, digit_named);
  if (
    equal(color_body, null) &&
    equal(color_dot, null) &&
    equal(color_digit, null)
  ) {
    return null;
  }
  let all = [
    [found[1], null],
    [body, color_body],
    [dot, color_dot],
    [digit, color_digit],
    [found[5], null],
  ];
  function lambda(pair) {
    let neq = not_equal(pair[0], "");
    return neq;
  }
  let parts = all.filter(lambda);
  return parts;
}
