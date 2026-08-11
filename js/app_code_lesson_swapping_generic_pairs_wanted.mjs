import { arguments_assert } from "./arguments_assert.mjs";
import { range_from } from "./range_from.mjs";
import { equal } from "./equal.mjs";
import { app_code_lesson_swapping_generic_pair_code } from "./app_code_lesson_swapping_generic_pair_code.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function app_code_lesson_swapping_generic_pairs_wanted(
  op,
  want_true,
  wrap,
  evaluate,
) {
  arguments_assert(arguments, 4);
  ("every pair of different small numbers whose line really does land on want_true, found by working the line out rather than by trusting the operator it was built from");
  ("An operator that flips for almost every pair can still land on the same value for one of them: 2 ** 4 and 4 ** 2 are both 16. Written down as a false example that line reads true, and it contradicts the very rule the lesson is teaching, so the learner is shown a counterexample as if it were support. Two of the 448 pairs the divide lesson can build do this");
  ("The check is derived from the line itself, so an operator added to true_ops or false_ops later cannot bring the same fault back in quietly - it is caught for whatever operator has it, not for the one that happened to have it first");
  ("What works a line out is handed in rather than named here, and it has to be. The one that does it answers to a word this file cannot bind - a name reserved by the language, which a parameter may not wear - so the caller passes it and this end calls it by an ordinary word.");
  let numbers = range_from(2, 9);
  let pairs = [];
  function left_lambda(a) {
    function right_lambda(b) {
      let same_number = equal(a, b);
      if (same_number) {
        return;
      }
      let code = app_code_lesson_swapping_generic_pair_code(op, a, b, wrap);
      let value = evaluate(code);
      let wanted = equal(value, want_true);
      if (wanted) {
        let pair = [a, b];
        list_add(pairs, pair);
      }
    }
    each(numbers, right_lambda);
  }
  each(numbers, left_lambda);
  return pairs;
}
