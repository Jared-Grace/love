import { app_code_lesson_expression_comparison_and_card_one_side } from "./app_code_lesson_expression_comparison_and_card_one_side.mjs";
import { app_code_lesson_expression_comparison_and_and_operands_false } from "./app_code_lesson_expression_comparison_and_and_operands_false.mjs";
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
import { ternary } from "./ternary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_comparison_and() {
  "the step from && with plain true/false operands (already learned) to && with a COMPARISON as an operand: 3 < 5 && 2 < 4. The one new idea: each comparison is worked out to true or false FIRST, and only then does && combine them - so a comparison can stand exactly where a true or false stood. Both forms appear: comparison && comparison, and comparison paired with a plain true/false. This is precisely the shape the chained-comparison fix needs (2 < 5 && 5 < 3), so it comes right before the pitfall lesson. Comparisons parse without parentheses because < and > bind tighter than &&. Answer is the code's own true/false value, correct by construction.";
  function operand_truths(want_true) {
    "the two operand truth values: both true for a true &&, otherwise a false-making pair";
    let both_true = [true, true];
    let on_false =
      app_code_lesson_expression_comparison_and_and_operands_false();
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
    "the rule, then one side changed, then both sides changed, worked once true and once false: each comparison is done first, and only then does && combine them";
    "The one-side form is worked first because it is the single step from the && the learner already has. They know true && false; replacing ONE operand with a comparison changes one thing. The card used to open on 3 < 5 && 2 < 4, which replaces both at once - two changes shown as one, and the header sentence says one side, so the first example contradicted the line above it.";
    let header = app_code_container_light_blue(root);
    html_div_cycle_code(header, ["A comparison can be one side of ", "&&"]);
    app_code_lesson_expression_comparison_and_card_one_side(root);
    let yes = app_code_container_light_blue(root);
    html_div_cycle_code(yes, ["Both sides of ", "&&", " can be comparisons"]);
    html_div_cycle_code(yes, [
      "For ",
      "3 < 5 && 2 < 4",
      ", we do ",
      "3 < 5",
      " and ",
      "2 < 4",
      " before ",
      "&&",
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
      "Likewise, for ",
      "7 > 2 && 5 > 8",
      ", we do ",
      "7 > 2",
      " and ",
      "5 > 8",
      " before ",
      "&&",
    ]);
    ("Each comparison named beside its own value. That was singular standing for a pair, and worse, it left which of the two came out false unsaid - the card above can say Both are true because the two agree there and nothing is lost by not separating them, but here they differ, and the difference is the whole example. A learner reading That is true and false has no way to tell whether 7 > 2 was the false one.");
    html_div_cycle_code(no, [
      "",
      "7 > 2",
      " is ",
      "true",
      " and ",
      "5 > 8",
      " is ",
      "false",
    ]);
    html_div_cycle_code(no, ["So ", "true && false", " is ", "false"]);
  }
}
