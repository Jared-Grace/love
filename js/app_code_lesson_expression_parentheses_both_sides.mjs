import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_comparison_side } from "./app_code_comparison_side.mjs";
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
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { property_get } from "./property_get.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_parentheses_both_sides() {
  "both sides a comparison, each wrapped: (3 === 5) === (5 === 3). The previous lesson put ( and ) around one comparison, where they changed nothing; here they change the answer, which is what earns them. Written flat, 3 === 5 === 5 === 3 is worked out left to right and is a different line with a different value, so the parentheses are not decoration - they are what makes the line say what it means.";
  "This is the shape the swapping lesson needs, and it is taught here on its own so that swapping teaches only swapping.";
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
    "the home title: a comparison inside ( and ) on both sides, an Expressions lesson";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        let open = js_code_parenthesis_left();
        let close = js_code_parenthesis_right();
        html_cycle_code(parent, [
          "a comparison inside ",
          open,
          " and ",
          close,
          " on both sides",
        ]);
      }
      return render;
    }
    let rights = ["parentheses both sides"];
    let left = app_code_category_expressions();
    let built = app_code_lesson_name_id_generic(rights, left, title_get);
    return built;
  }
  function wrapped() {
    "one comparison already wrapped in ( and ), with the true or false it works out to";
    let side = app_code_comparison_side();
    let inner = property_get(side, "code");
    let value = property_get(side, "value");
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    let code = text_combine_multiple([open, inner, close]);
    let r = {
      code,
      value,
    };
    return r;
  }
  function expression(want_true) {
    "a wrapped comparison, then === or !==, then another wrapped comparison, with the operator picked so the whole line lands on want_true";
    let left = wrapped();
    let right = wrapped();
    let left_value = property_get(left, "value");
    let right_value = property_get(right, "value");
    let agree = equal(left_value, right_value);
    let wanted = equal(agree, want_true);
    let on_true = js_operator_triple_equal_symbol();
    let on_false = js_operator_bang_double_equal_symbol();
    let symbol = ternary(wanted, on_true, on_false);
    let left_code = property_get(left, "code");
    let right_code = property_get(right, "code");
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
    "recall what ( and ) do, then both sides wrapped and worked out, then why the parentheses are needed here when they were not needed before";
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    let recall = app_code_container_light_blue(root);
    html_div_cycle_code(recall, [
      "Remember: ",
      open,
      " and ",
      close,
      " around a comparison work it out on its own",
    ]);
    let both = app_code_container_light_blue(root);
    html_div_cycle_code(both, [
      "Both sides of ",
      "===",
      " can be a comparison",
    ]);
    html_div_cycle_code(both, [
      "",
      "3 === 5",
      " is ",
      "false",
      ", and ",
      "5 === 3",
      " is ",
      "false",
    ]);
    html_div_cycle_code(both, [
      "So ",
      "(3 === 5) === (5 === 3)",
      " is ",
      "true",
    ]);
    let needed = app_code_container_light_blue(root);
    html_div_cycle_code(needed, [
      "Here we need the ",
      open,
      " and ",
      close,
    ]);
    html_div_cycle_code(needed, [
      "Without them we would write ",
      "3 === 5 === 5 === 3",
    ]);
    html_div_cycle_code(needed, [
      "JavaScript works that out left to right, which is not what we mean",
    ]);
  }
}
