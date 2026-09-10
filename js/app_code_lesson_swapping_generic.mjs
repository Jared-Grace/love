import { list_random_item_pair_different } from "./list_random_item_pair_different.mjs";
import { app_code_lesson_swapping_generic_pairs_wanted } from "./app_code_lesson_swapping_generic_pairs_wanted.mjs";
import { app_code_lesson_swapping_generic_pair_code } from "./app_code_lesson_swapping_generic_pair_code.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { ternary } from "./ternary.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_swapping_generic(config) {
  "the shared shape for every swapping lesson: a op b === b op a for two DIFFERENT numbers. config = { name_id, above, true_ops, false_ops, wrap }. An op from true_ops survives the swap so the code is true (the value is unchanged); an op from false_ops flips so it is false (the two sides land on different values). wrap parenthesises each side - (a op b) === (b op a) - which is needed only when op is === or !==, because a === b === b === a would otherwise chain left to right into nonsense. distinct numbers are used because swapping two EQUAL numbers is a no-op that is vacuously true for any operator, so it could not tell the operators apart.";
  let name_id = property_get(config, "name_id");
  let above = property_get(config, "above");
  let true_ops = property_get(config, "true_ops");
  let false_ops = property_get(config, "false_ops");
  let wrap = property_get(config, "wrap");
  function operators_two(want_true) {
    "the two operators for the two examples of this outcome, different from one another wherever the lesson has more than one of that kind to give";
    let ops = ternary(want_true, true_ops, false_ops);
    let both = list_random_item_pair_different(ops);
    return both;
  }
  function expression(op, want_true) {
    "a op b === b op a, the same two different numbers swapped around the operator, picked from the pairs that really land on want_true";
    let pairs = app_code_lesson_swapping_generic_pairs_wanted(
      op,
      want_true,
      wrap,
      eval,
    );
    let pair = list_random_item(pairs);
    let a = pair[0];
    let b = pair[1];
    let code = app_code_lesson_swapping_generic_pair_code(op, a, b, wrap);
    return code;
  }
  function refill() {
    "four examples a screen, true and false alternating";
    "The two true examples are given different operators, and so are the two false ones, wherever the lesson has more than one of that kind. Drawn independently, half of the + * screens showed one of the two twice and never showed the other at all, on a lesson whose intro had just worked through both. Four slots cannot hold the six operators the comparison swapping lessons teach, so the rule is not one of each - it is never the same one twice while another it teaches goes unshown.";
    let trues = operators_two(true);
    let falses = operators_two(false);
    let v = expression(trues[0], true);
    let v2 = expression(falses[0], false);
    let v3 = expression(trues[1], true);
    let v4 = expression(falses[1], false);
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
