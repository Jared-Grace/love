import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_operator_method_two_symbol } from "./app_learn_js_operator_method_two_symbol.mjs";
import { app_learn_js_slice_pair } from "./app_learn_js_slice_pair.mjs";
import { app_learn_js_starts_with_pair } from "./app_learn_js_starts_with_pair.mjs";
import { app_learn_js_index_of_from_pair } from "./app_learn_js_index_of_from_pair.mjs";
import { app_learn_js_replace_pair } from "./app_learn_js_replace_pair.mjs";
import { app_learn_js_replace_all_pair } from "./app_learn_js_replace_all_pair.mjs";
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
  ('2026-11-22, at the human\'s asking: a.indexOf("joy", from) gives where the first joy at from or after it sits, or -1, so Index of from an index can be stepped through');
  let indexing_from = {
    operator: app_learn_js_operator_method_two_symbol("indexOf"),
    fn: app_learn_js_index_of_from_pair,
  };
  ("2026-11-22, at the human's asking: s.replace(a, b) gives s with only its first a changed to b, and s.replaceAll(a, b) with every a changed, so Replace the first and Replace all can be stepped through");
  let replacing = {
    operator: app_learn_js_operator_method_two_symbol("replace"),
    fn: app_learn_js_replace_pair,
  };
  let replacing_all = {
    operator: app_learn_js_operator_method_two_symbol("replaceAll"),
    fn: app_learn_js_replace_all_pair,
  };
  let all = [slicing_range, starting, indexing_from, replacing, replacing_all];
  return all;
}
