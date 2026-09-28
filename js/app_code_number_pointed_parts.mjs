import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_code_pointer_color_or_null } from "./app_code_pointer_color_or_null.mjs";
export function app_code_number_pointed_parts(pointers, piece) {
  "a piece of code ending in a number, cut where a pointer names part of that number: what comes before the number, the number but its last digit, that last digit - or the .3 after a dot - and what follows, each as a pair of its text and its colour, or null for a part no pointer names; so with the 3 pointed 123 is 12 and a coloured 3, with the 12 pointed 12.3 is a coloured 12 and .3, and Math.floor(123 is Math.floor( then 12 and 3";
  "Null when nothing is to be cut: the piece does not end in a number of two or more digits, or no pointer names either part. The caller then colours the piece whole, as a pointed line does, so a pointer naming a whole number still reaches it.";
  "Written once for the writing and the code both, so the 3 in 123 is cut the same way in a sentence and in the program under it, asked by the human 2026-09-28.";
  let found = piece.match(/^(\D*)(\d*)(\.?\d)(\D*)$/);
  if (equal(found, null)) {
    return null;
  }
  let body = found[2];
  let tail = found[3];
  if (equal(body, "")) {
    return null;
  }
  let color_body = app_code_pointer_color_or_null(pointers, body);
  let color_tail = app_code_pointer_color_or_null(pointers, tail);
  if (equal(color_body, null) && equal(color_tail, null)) {
    return null;
  }
  let all = [
    [found[1], null],
    [body, color_body],
    [tail, color_tail],
    [found[4], null],
  ];
  function lambda(pair) {
    let neq = not_equal(pair[0], "");
    return neq;
  }
  let parts = all.filter(lambda);
  return parts;
}
