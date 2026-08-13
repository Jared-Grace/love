import { arguments_assert } from "./arguments_assert.mjs";
import { text_and_empty_not_is } from "./text_and_empty_not_is.mjs";
import { not } from "./not.mjs";
import { text_comma_run_longest } from "./text_comma_run_longest.mjs";
import { equal } from "./equal.mjs";
import { text_split_comma_nested } from "./text_split_comma_nested.mjs";
export function text_split_comma_nested_or_empty(t) {
  "What a command line receives where it used to take a flat comma-joined word: no text at all means no arguments, one word means one argument, and everything deeper is nested the way it was written.";
  "The whole of what this adds over the plain one is answering a bare word as a list holding it. That question is left open where the nesting itself is decided, because a list of one thing and a bare thing are genuinely two different things and neither reading has been needed yet. It is answered here rather than there because a caller taking arguments off a command line is not asking it - a command given one argument was given a list of one argument, and there was never a second reading of that.";
  "So the deferral stays whole where it belongs, and the one seam that cannot wait for it does not have to.";
  arguments_assert(arguments, 1);
  let some = text_and_empty_not_is(t);
  let none = not(some);
  if (none) {
    let empty = [];
    return empty;
  }
  let depth = text_comma_run_longest(t);
  let word = equal(depth, 0);
  if (word) {
    let alone = [t];
    return alone;
  }
  let nested = text_split_comma_nested(t);
  return nested;
}
