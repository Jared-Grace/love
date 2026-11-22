import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_operator_method_two_symbol } from "./app_learn_js_operator_method_two_symbol.mjs";
import { app_learn_js_slice_pair } from "./app_learn_js_slice_pair.mjs";
import { app_learn_js_starts_with_pair } from "./app_learn_js_starts_with_pair.mjs";
export function app_learn_js_operators_solvable_method_two() {
  arguments_assert(arguments, 0);
  ("each action of two things a code lesson steps through, with the function that works it out: the thing acted on on the left, and its two things, as a pair, on the right");
  let slicing_range = {
    operator: app_learn_js_operator_method_two_symbol("slice"),
    fn: app_learn_js_slice_pair,
  };
  ("2026-11-22, at the human's asking: s.startsWith(sep, i) asks whether sep is there at index i, so the lesson after Is the separator here? can be stepped through");
  let starting = {
    operator: app_learn_js_operator_method_two_symbol("startsWith"),
    fn: app_learn_js_starts_with_pair,
  };
  let all = [slicing_range, starting];
  return all;
}
