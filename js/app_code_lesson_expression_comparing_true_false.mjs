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
  "=== and !== on plain true and false, the prerequisite the swapping lessons were already leaning on: every === the learner has met so far had numbers or strings on both sides, and nothing had ever compared two true/false values. ONE new idea, and nothing else: the equality operators read true and false the same way they read numbers. A comparison standing where a plain true or false stood is a second idea and gets its own lesson (comparing a comparison), which in turn is what the swapping lesson's (a === b) === (b === a) needs. Only four true/false combinations exist, so the quiz enumerates all four rather than sampling, picks two for true and two for false, and never repeats a line on a screen. Answer is the code's own true/false value, correct by construction.";
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
  function combinations() {
    "the four ways two true/false values can sit either side of the operator";
    let list = [
      {
        left: true,
        right: true,
      },
      {
        left: true,
        right: false,
      },
      {
        left: false,
        right: true,
      },
      {
        left: false,
        right: false,
      },
    ];
    return list;
  }
  function line(combination, want_true) {
    "one combination written out, with the operator picked so the line lands on want_true: === when the two sides already agree, !== when they differ";
    let left = property_get(combination, "left");
    let right = property_get(combination, "right");
    let same = equal(left, right);
    let wanted = equal(same, want_true);
    let on_true = js_operator_triple_equal_symbol();
    let on_false = js_operator_bang_double_equal_symbol();
    let symbol = ternary(wanted, on_true, on_false);
    let left_code = keyword(left);
    let right_code = keyword(right);
    let code = text_combine_multiple([left_code, " ", symbol, " ", right_code]);
    return code;
  }
  function lines(want_true) {
    "all four combinations written out, every one landing on want_true";
    function mapper(combination) {
      let code = line(combination, want_true);
      return code;
    }
    let all = combinations();
    let mapped = list_map(all, mapper);
    return mapped;
  }
  function refill() {
    "four examples a screen, true and false alternating, no two the same";
    let trues = list_shuffle_take(lines(true), 2);
    let falses = list_shuffle_take(lines(false), 2);
    let list = [trues[0], falses[0], trues[1], falses[1]];
    return list;
  }
  function above(root) {
    "=== and !== on plain true and false, worked out three times: the same pair, a different pair, and the not-equal reading";
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
  }
}
