import { js_true_false_word } from "./js_true_false_word.mjs";
import { app_code_lesson_expression_parentheses_one_side_title_name_id } from "./app_code_lesson_expression_parentheses_one_side_title_name_id.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_comparison_side } from "./app_code_comparison_side.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { equal } from "./equal.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_get } from "./property_get.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_parentheses_one_side() {
  "( and ) around a comparison, on the one line where they change nothing: (3 === 5) === false. The previous lesson wrote that same line flat - 3 === 5 === false - and said so deliberately, because parentheses there would have been a rule the learner could not yet see the need for. Here they are the whole lesson and nothing else moves: the same shape, the same answer, one new pair of symbols. Meeting them on a line whose value they do not change is what makes the next lesson safe, where both sides are comparisons and the parentheses decide the answer for real.";
  "Only the LEFT side is wrapped. Wrapping the right as well is the next lesson, and doing it here would put two new things in one step - brackets, and a comparison standing on the right - when only one of them is this lesson's idea.";
  let name_id = app_code_lesson_expression_parentheses_one_side_title_name_id();
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
  function expression(want_true) {
    "a comparison wrapped in ( and ), then === or !==, then a plain true or false, with the operator picked so the whole line lands on want_true";
    let left = app_code_comparison_side();
    let right_value = list_random_item([true, false]);
    let agree = property_equals(left, "value", right_value);
    let wanted = equal(agree, want_true);
    let on_true = js_operator_triple_equal_symbol();
    let on_false = js_operator_bang_double_equal_symbol();
    let symbol = ternary(wanted, on_true, on_false);
    let left_code = property_get(left, "code");
    let right_code = js_true_false_word(right_value);
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    let code = text_combine_multiple([
      open,
      left_code,
      close,
      " ",
      symbol,
      " ",
      right_code,
    ]);
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
  function above(root) {
    "what ( and ) do, that they change nothing on this shape, then the same line worked out twice";
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    let idea = app_code_container_light_blue(root);
    html_div_cycle_code(idea, [
      "We can put ",
      open,
      " and ",
      close,
      " around a comparison",
    ]);
    html_div_cycle_code(idea, [
      "",
      "(3 === 5)",
      " means the same as ",
      "3 === 5",
    ]);
    html_div_cycle_code(idea, [
      "The ",
      open,
      " and ",
      close,
      " show that whatever is inside is solved before whatever is outside",
    ]);
    let first = app_code_container_light_blue(root);
    html_div_cycle_code(first, ["", "3 === 5", " is ", "false"]);
    html_div_cycle_code(first, ["So ", "(3 === 5) === false", " is ", "true"]);
    let second = app_code_container_light_blue(root);
    html_div_cycle_code(second, ["", "2 < 5", " is ", "true"]);
    html_div_cycle_code(second, ["So ", "(2 < 5) !== true", " is ", "false"]);
  }
}
