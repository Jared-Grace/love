import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { text_replace } from "./text_replace.mjs";
export function app_code_parentheses_flat_decoys(question, answer) {
  arguments_assert(arguments, 2);
  ("the tailored wrong answer for any parentheses lesson: the value of this very line with the ( and ) taken away. That is the whole mistake such a lesson exists to prevent - a learner who does not yet believe the brackets matter reads (1 + 2) * 3 as 1 + 2 * 3 and answers 7. Offering that number is what makes choosing 9 an act of reading the brackets rather than of arithmetic.");
  ("For a line where the brackets change nothing it equals the real answer, and the multiple choice then drops it as a duplicate - so it is safe on every shape, including the ones written to show brackets that change nothing.");
  let open = js_code_parenthesis_left();
  let close = js_code_parenthesis_right();
  let without_open = text_replace(question, open, "");
  let flat = text_replace(without_open, close, "");
  let value = eval(flat);
  let r = [value];
  return r;
}
