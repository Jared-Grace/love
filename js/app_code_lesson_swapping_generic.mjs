import { app_code_lesson_swapping_generic_side } from "./app_code_lesson_swapping_generic_side.mjs";
import { range_from } from "./range_from.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_swapping_generic(config) {
  "the shared shape for every swapping lesson: a op b === b op a for two DIFFERENT numbers. config = { name_id, above, true_ops, false_ops, wrap }. An op from true_ops survives the swap so the code is true (the value is unchanged); an op from false_ops flips so it is false (the two sides land on different values). wrap parenthesises each side - (a op b) === (b op a) - which is needed only when op is === or !==, because a === b === b === a would otherwise chain left to right into nonsense. distinct numbers are used because swapping two EQUAL numbers is a no-op that is vacuously true for any operator, so it could not tell the operators apart.";
  let name_id = property_get(config, "name_id");
  let above = property_get(config, "above");
  let true_ops = property_get(config, "true_ops");
  let false_ops = property_get(config, "false_ops");
  let wrap = property_get(config, "wrap");
  function operator_random(want_true) {
    "an operator whose swap is true when want_true, otherwise one whose swap is false";
    let ops = ternary(want_true, true_ops, false_ops);
    let op = list_random_item(ops);
    return op;
  }
  function pair_code(op, a, b) {
    "the whole line for one pair of numbers: a op b === b op a, each side parenthesised when wrap is on";
    let left = app_code_lesson_swapping_generic_side(a, op, b, wrap);
    let right = app_code_lesson_swapping_generic_side(b, op, a, wrap);
    let code = text_combine_multiple([left, " === ", right]);
    return code;
  }
  function pairs_wanted(op, want_true) {
    "every pair of different small numbers whose line really does land on want_true, found by working the line out rather than by trusting the operator it was built from";
    "An operator that flips for almost every pair can still land on the same value for one of them: 2 ** 4 and 4 ** 2 are both 16. Written down as a false example that line reads true, and it contradicts the very rule the lesson is teaching, so the learner is shown a counterexample as if it were support. Two of the 448 pairs the divide lesson can build do this";
    "The check is derived from the line itself, so an operator added to true_ops or false_ops later cannot bring the same fault back in quietly - it is caught for whatever operator has it, not for the one that happened to have it first";
    let numbers = range_from(2, 9);
    let pairs = [];
    function left_lambda(a) {
      function right_lambda(b) {
        let same_number = equal(a, b);
        if (same_number) {
          return;
        }
        let code = pair_code(op, a, b);
        let value = eval(code);
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
  function expression(want_true) {
    "a op b === b op a, the same two different numbers swapped around the operator, picked from the pairs that really land on want_true";
    let op = operator_random(want_true);
    let pairs = pairs_wanted(op, want_true);
    let pair = list_random_item(pairs);
    let a = pair[0];
    let b = pair[1];
    let code = pair_code(op, a, b);
    return code;
  }
  function refill() {
    "four examples a screen, true and false alternating";
    let v = expression(true);
    let v2 = expression(false);
    let v3 = expression(true);
    let v4 = expression(false);
    let list = [v, v2, v3, v4];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 4,
    decoys: app_code_comparison_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
    forwards_answer_count_override: 2,
  });
  return lesson;
}
