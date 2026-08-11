import { app_code_lesson_expression_comparison_and_comparison } from "./app_code_lesson_expression_comparison_and_comparison.mjs";
import { app_code_lesson_expression_comparison_and_title_name_id } from "./app_code_lesson_expression_comparison_and_title_name_id.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_comparison_and() {
  "the step from && with plain true/false operands (already learned) to && with a COMPARISON as an operand: 3 < 5 && 2 < 4. The one new idea: each comparison is worked out to true or false FIRST, and only then does && combine them - so a comparison can stand exactly where a true or false stood. Both forms appear: comparison && comparison, and comparison paired with a plain true/false. This is precisely the shape the chained-comparison fix needs (2 < 5 && 5 < 3), so it comes right before the pitfall lesson. Comparisons parse without parentheses because < and > bind tighter than &&. Answer is the code's own true/false value, correct by construction.";
  function and_operands_false() {
    "a pair of truth values whose && is false: at least one is false";
    let patterns = [
      [true, false],
      [false, true],
      [false, false],
    ];
    let pattern = list_random_item(patterns);
    return pattern;
  }
  function operand_truths(want_true) {
    "the two operand truth values: both true for a true &&, otherwise a false-making pair";
    let both_true = [true, true];
    let on_false = and_operands_false();
    let truths = ternary(want_true, both_true, on_false);
    return truths;
  }
  function two_comparisons(want_true) {
    "comparison && comparison";
    let truths = operand_truths(want_true);
    let left = app_code_lesson_expression_comparison_and_comparison(truths[0]);
    let right = app_code_lesson_expression_comparison_and_comparison(truths[1]);
    let code = text_combine_multiple([left, " && ", right]);
    return code;
  }
  function comparison_and_literal(want_true) {
    "comparison && a plain true or false";
    let truths = operand_truths(want_true);
    let left = app_code_lesson_expression_comparison_and_comparison(truths[0]);
    let right = ternary(truths[1], "true", "false");
    let code = text_combine_multiple([left, " && ", right]);
    return code;
  }
  function refill() {
    "four examples a screen: both forms, true and false shown";
    let v = two_comparisons(true);
    let v2 = two_comparisons(false);
    let v3 = comparison_and_literal(true);
    let v4 = comparison_and_literal(false);
    let list = [v, v2, v3, v4];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_expression_comparison_and_title_name_id();
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
  function above(root) {
    "the rule, then it worked once true and once false: each comparison is done first, and only then does && combine them";
    let header = app_code_container_light_blue(root);
    html_div_cycle_code(header, ["A comparison can be one side of ", "&&"]);
    let yes = app_code_container_light_blue(root);
    html_div_cycle_code(yes, [
      "For ",
      "3 < 5 && 2 < 4",
      ", we do ",
      "3 < 5",
      " and ",
      "2 < 4",
      " first",
    ]);
    html_div_cycle_code(yes, [
      "Both are ",
      "true",
      ", so ",
      "true && true",
      " is ",
      "true",
    ]);
    let no = app_code_container_light_blue(root);
    html_div_cycle_code(no, [
      "For ",
      "7 > 2 && 5 > 8",
      ", we do ",
      "7 > 2",
      " and ",
      "5 > 8",
      " first",
    ]);
    html_div_cycle_code(no, [
      "That is ",
      "true",
      " and ",
      "false",
      ", so ",
      "true && false",
      " is ",
      "false",
    ]);
  }
}
