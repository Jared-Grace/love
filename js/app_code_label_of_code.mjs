import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function app_code_label_of_code(value) {
  arguments_assert(arguments, 1);
  ("the label over what a piece of code came to, named after the kind of thing that came out of it - a value of code, a logged output of code");
  ("The worked example and the boxes read before the questions start both label the same half of the same card, so the words are made in one place. Two labels differing by a letter would read as two different things being shown.");
  let s = text_combine(value, " of code: ");
  let r = text_first_upper_to(s);
  return r;
}
