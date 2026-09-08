import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_size } from "./text_size.mjs";
import { text_take } from "./text_take.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { equal } from "./equal.mjs";
export function text_indent_size(line) {
  arguments_assert(arguments, 1);
  ("How far in from the left a line of writing starts, counted in spaces.");
  ("It walks the front of the line rather than subtracting two trimmed sizes, because trimming takes tabs and newlines off as well and would then count them as indent - and a tab is one character standing for several columns, so counting it as one space would be a quiet lie either way. Spaces are what this repo indents with, so spaces are what is counted.");
  ("A line holding nothing but spaces is entirely indent by that reckoning, which is the answer that keeps it from ever being negative.");
  let front = 0;
  let z = text_size(line);
  while (less_than(front, z)) {
    let s = text_slice_from(line, front);
    let one = text_take(s, 1);
    let space = equal(one, " ");
    if (not(space)) {
      break;
    }
    front = front + 1;
  }
  return front;
}
