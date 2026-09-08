import { arguments_assert } from "./arguments_assert.mjs";
import { text_trim_right } from "./text_trim_right.mjs";
import { text_trim } from "./text_trim.mjs";
import { subtract } from "./subtract.mjs";
import { text_size } from "./text_size.mjs";
export function text_indent_size(line) {
  arguments_assert(arguments, 1);
  ("How far in from the left a line of writing starts, counted in characters.");
  ("It measures from the right-hand end inwards rather than by walking the front of the line, because the two trims already in the repo answer it between them: what is left after taking the blank off both ends, against what is left after taking it off the end only. The difference is the front.");
  ("A line holding nothing but blanks is entirely indent by that reckoning, which is the answer that keeps it from ever being negative.");
  let ended = text_trim_right(line);
  let both = text_trim(line);
  let left = text_size(ended);
  let right = text_size(both);
  let front = subtract(left, right);
  return front;
}
