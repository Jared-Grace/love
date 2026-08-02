import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_swapping_generic(config) {
  "the shared shape for every swapping lesson: a op b === b op a for two DIFFERENT numbers. config = { name_id, above, true_ops, false_ops, wrap }. An op from true_ops survives the swap so the code is true (the value is unchanged); an op from false_ops flips so it is false (the two sides land on different values). wrap parenthesises each side - (a op b) === (b op a) - which is needed only when op is === or !==, because a === b === b === a would otherwise chain left to right into nonsense. distinct numbers are used because swapping two EQUAL numbers is a no-op that is vacuously true for any operator, so it could not tell the operators apart.";
  let name_id = property_get(config, "name_id");
  let above = property_get(config, "above");
  let true_ops = property_get(config, "true_ops");
  let false_ops = property_get(config, "false_ops");
  let wrap = property_get(config, "wrap");
  function distinct_pair() {
    "two different small numbers, so swapping actually changes the order";
    let a = integer_random(2, 9);
    let b_raw = integer_random(2, 9);
    let collide = equal(a, b_raw);
    let on_true = add(b_raw, 1);
    let b = ternary(collide, on_true, b_raw);
    let pair = [a, b];
    return pair;
  }
  function operator_random(want_true) {
    "an operator whose swap is true when want_true, otherwise one whose swap is false";
    let ops = ternary(want_true, true_ops, false_ops);
    let op = list_random_item(ops);
    return op;
  }
  function side(left_number, op, right_number) {
    "one side of the equality: a number, the operator, another number; parenthesised when wrap is on";
    let left = text_to(left_number);
    let right = text_to(right_number);
    let inner = text_combine_multiple([left, " ", op, " ", right]);
    let wrapped = text_combine_multiple(["(", inner, ")"]);
    let code = ternary(wrap, wrapped, inner);
    return code;
  }
  function expression(want_true) {
    "a op b === b op a, the same two numbers swapped around the operator";
    let op = operator_random(want_true);
    let pair = distinct_pair();
    let a = pair[0];
    let b = pair[1];
    let left = side(a, op, b);
    let right = side(b, op, a);
    let code = text_combine_multiple([left, " === ", right]);
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
