import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { equal } from "./equal.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { integer_random } from "./integer_random.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_operator_bang_double_equal } from "./js_operator_bang_double_equal.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_greater_than } from "./js_operator_greater_than.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { js_operator_triple_equal } from "./js_operator_triple_equal.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_comparing_a_comparison() {
  "a comparison standing where a plain true or false stood: (3 === 5) === false. ONE new idea on top of the previous lesson, which compared two plain true/false values - the left side is now a comparison, so it has to be worked out first and only then compared. That is the very rule the arithmetic-comparison lesson already taught (arithmetic first, then compare), with a comparison in the place arithmetic held, so the step is small. The parentheses are the other half of the idea and are given a reason rather than a rule: without them the line is three comparisons in a row and there is nothing to say which pair goes together. The right side stays a plain true or false here; both sides being comparisons is the swapping lesson. Answer is the code's own true/false value, correct by construction.";
  let name_id = title_name_id();
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
  function title_name_id() {
    "the home title: comparing a comparison with true or false, an Expressions lesson";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        let t = js_keyword_true();
        let f = js_keyword_false();
        html_cycle_code(parent, ["comparing a comparison with ", t, " or ", f]);
      }
      return render;
    }
    let rights = ["comparing a comparison"];
    let left = app_code_category_expressions();
    let built = app_code_lesson_name_id_generic(rights, left, title_get);
    return built;
  }
  function keyword(value) {
    "the code word for a true or false value";
    let on_true = js_keyword_true();
    let on_false = js_keyword_false();
    let word = ternary(value, on_true, on_false);
    return word;
  }
  function comparison_side() {
    "a comparison of two small numbers wrapped in parentheses, with the true or false it works out to";
    let same = js_operator_triple_equal();
    let different = js_operator_bang_double_equal();
    let smaller = js_operator_less_than();
    let bigger = js_operator_greater_than();
    let operators = [same, different, smaller, bigger];
    let operator = list_random_item(operators);
    let symbol = property_get(operator, "operator");
    let fn = property_get(operator, "fn");
    let a = integer_random(2, 9);
    let b = integer_random(2, 9);
    let value = fn(a, b);
    let a_code = text_to(a);
    let b_code = text_to(b);
    let code = text_combine_multiple([
      "(",
      a_code,
      " ",
      symbol,
      " ",
      b_code,
      ")",
    ]);
    let r = {
      code,
      value,
    };
    return r;
  }
  function expression(want_true) {
    "a wrapped comparison, then === or !==, then a plain true or false, with the operator picked so the whole line lands on want_true";
    let left = comparison_side();
    let right_value = list_random_item([true, false]);
    let left_value = property_get(left, "value");
    let agree = equal(left_value, right_value);
    let wanted = equal(agree, want_true);
    let on_true = js_operator_triple_equal_symbol();
    let on_false = js_operator_bang_double_equal_symbol();
    let symbol = ternary(wanted, on_true, on_false);
    let left_code = property_get(left, "code");
    let right_code = keyword(right_value);
    let code = text_combine_multiple([left_code, " ", symbol, " ", right_code]);
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
    "a comparison gives true or false, so a comparison can stand where a plain true or false stood; the parentheses keep the two comparisons apart; then two worked examples";
    let idea = app_code_container_light_blue(root);
    let t = js_keyword_true();
    let f = js_keyword_false();
    html_div_cycle_code(idea, ["A comparison gives ", t, " or ", f]);
    let t2 = js_keyword_true();
    let f2 = js_keyword_false();
    html_div_cycle_code(idea, [
      "So a comparison can stand where a plain ",
      t2,
      " or ",
      f2,
      " stood",
    ]);
    html_div_cycle_code(idea, [
      "We work out the comparison first, then compare the two answers",
    ]);
    let wrapping = app_code_container_light_blue(root);
    html_div_cycle_code(wrapping, [
      "We wrap the comparison in ",
      "(",
      " and ",
      ")",
    ]);
    html_div_cycle_code(wrapping, [
      "Without the ",
      "(",
      " and ",
      ")",
      ", ",
      "3 === 5 === false",
      " is three comparisons in a row",
    ]);
    html_div_cycle_code(wrapping, [
      "The ",
      "(",
      " and ",
      ")",
      " say which two go together first",
    ]);
    let worked = app_code_container_light_blue(root);
    html_div_cycle_code(worked, ["", "3 === 5", " is ", "false"]);
    html_div_cycle_code(worked, ["So ", "(3 === 5) === false", " is ", "true"]);
    html_div_cycle_code(worked, ["", "2 < 5", " is ", "true"]);
    html_div_cycle_code(worked, ["So ", "(2 < 5) !== true", " is ", "false"]);
  }
}
