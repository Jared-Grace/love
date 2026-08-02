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
export function app_code_lesson_expression_comparing_true_false() {
  "=== and !== on true and false, the prerequisite the swapping lessons were already leaning on: every === the learner has met so far had numbers or strings on both sides, and nothing had ever compared two true/false values. Two steps. First the plain form - true === true, true !== false - which is the single new idea that the equality operators read true and false the same way they read numbers. Then a comparison standing where a plain true or false stood, wrapped in ( ) so the two comparisons stay apart: 3 === 5 is false, so (3 === 5) === false is true. That second step is the same rule the arithmetic-comparison lesson already taught - work each side out FIRST, then compare - with a comparison in the place arithmetic held. Both shapes appear in the quiz, half with a plain keyword on the left and half with a wrapped comparison. Answer is the code's own true/false value, correct by construction.";
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
    "the home title: comparing true and false, an Expressions lesson";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        let t = js_keyword_true();
        let f = js_keyword_false();
        html_cycle_code(parent, ["comparing ", t, " and ", f]);
      }
      return render;
    }
    let rights = ["comparing true false"];
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
  function keyword_side() {
    "a plain true or false, with the value it holds";
    let value = list_random_item([true, false]);
    let code = keyword(value);
    let r = {
      code,
      value,
    };
    return r;
  }
  function comparison_side() {
    "a comparison of two small numbers wrapped in parentheses, with the true or false it works out to";
    let r2 = js_operator_triple_equal();
    let o = js_operator_bang_double_equal();
    let o2 = js_operator_less_than();
    let o3 = js_operator_greater_than();
    let operators = [r2, o, o2, o3];
    let operator = list_random_item(operators);
    let symbol = property_get(operator, "operator");
    let fn = property_get(operator, "fn");
    let a = integer_random(2, 9);
    let b = integer_random(2, 9);
    let value = fn(a, b);
    let t2 = text_to(a);
    let t3 = text_to(b);
    let code = text_combine_multiple(["(", t2, " ", symbol, " ", t3, ")"]);
    let r = {
      code,
      value,
    };
    return r;
  }
  function left_side() {
    "the left of the line: half the time a plain true or false, half the time a wrapped comparison";
    let makers = [keyword_side, comparison_side];
    let maker = list_random_item(makers);
    let r = maker();
    return r;
  }
  function expression(want_true) {
    "left === right or left !== right, with the operator picked so the whole line lands on want_true: === when the two sides already agree, !== when they differ";
    let left = left_side();
    let right = keyword_side();
    let left_value = property_get(left, "value");
    let right_value = property_get(right, "value");
    let same = equal(left_value, right_value);
    let wanted = equal(same, want_true);
    let on_true2 = js_operator_triple_equal_symbol();
    let on_false2 = js_operator_bang_double_equal_symbol();
    let symbol = ternary(wanted, on_true2, on_false2);
    let value2 = property_get(left, "code");
    let value3 = property_get(right, "code");
    let code = text_combine_multiple([value2, " ", symbol, " ", value3]);
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
    "first === and !== on plain true and false, then a comparison wrapped in ( ) standing where a plain true or false stood";
    let plain = app_code_container_light_blue(root);
    let s = js_operator_triple_equal_symbol();
    let s2 = js_operator_bang_double_equal_symbol();
    let t4 = js_keyword_true();
    let f2 = js_keyword_false();
    html_div_cycle_code(plain, [
      "",
      s,
      " and ",
      s2,
      " also work on ",
      t4,
      " and ",
      f2,
    ]);
    html_div_cycle_code(plain, ["", "true === true", " is ", "true"]);
    html_div_cycle_code(plain, ["", "true === false", " is ", "false"]);
    html_div_cycle_code(plain, ["", "false !== true", " is ", "true"]);
    let inside = app_code_container_light_blue(root);
    let t5 = js_keyword_true();
    let f3 = js_keyword_false();
    html_div_cycle_code(inside, ["A comparison gives ", t5, " or ", f3]);
    let t6 = js_keyword_true();
    let f4 = js_keyword_false();
    html_div_cycle_code(inside, [
      "So a comparison can stand where a plain ",
      t6,
      " or ",
      f4,
      " stood",
    ]);
    html_div_cycle_code(inside, [
      "We wrap the comparison in ",
      "(",
      " and ",
      ")",
      " to keep the two comparisons apart",
    ]);
    html_div_cycle_code(inside, [
      "We work out the comparison first, then compare the two answers",
    ]);
    let worked = app_code_container_light_blue(root);
    html_div_cycle_code(worked, ["", "3 === 5", " is ", "false"]);
    html_div_cycle_code(worked, ["So ", "(3 === 5) === false", " is ", "true"]);
    html_div_cycle_code(worked, ["", "2 < 5", " is ", "true"]);
    html_div_cycle_code(worked, ["So ", "(2 < 5) !== true", " is ", "false"]);
  }
}
