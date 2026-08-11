import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { js_true_false_word } from "./js_true_false_word.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_comparing_a_comparison_worked_example(
  root,
  lead,
  code,
  value,
  operator,
  right_value,
) {
  arguments_assert(arguments, 6);
  ("one line walked through a replacement at a time: the line we start with, the comparison being swapped for its answer, what that leaves, what that comes to, and the whole line's answer");
  ("The lead word is given by the caller because it says where this walkthrough sits in the run of them. The first follows from the rule just stated, so it is So; each one after is another of the same, so it is And. A second walkthrough opening with So would claim to follow from the first, which it does not");
  ("Five lines rather than one because the move this lesson teaches happens in the middle - the comparison is gone and its answer is sitting where it stood. A line that jumped straight to the final true or false would hide the only new step in the lesson, and the learner would have to take the answer on trust");
  ("The last two lines are worked out by the operator's own function rather than typed, so the example cannot say something the code would not do");
  let card = app_code_container_light_blue(root);
  let answer = js_true_false_word(value);
  let symbol = property_get(operator, "operator");
  let right_code = js_true_false_word(right_value);
  let whole = text_combine_multiple([code, " ", symbol, " ", right_code]);
  let stood_in = text_combine_multiple([answer, " ", symbol, " ", right_code]);
  let fn = property_get(operator, "fn");
  let ended = fn(value, right_value);
  let ended_code = js_true_false_word(ended);
  let opening = text_combine(lead, " for ");
  html_div_cycle_code(card, [opening, whole]);
  html_div_cycle_code(card, ["We replace the ", code, " with ", answer]);
  html_div_cycle_code(card, ["And then we have ", stood_in]);
  html_div_cycle_code(card, ["And ", stood_in, " is ", ended_code]);
  html_div_cycle_code(card, ["So ", whole, " is ", ended_code]);
}
