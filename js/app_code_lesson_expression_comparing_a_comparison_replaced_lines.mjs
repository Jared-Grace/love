import { app_code_lesson_expression_comparing_a_comparison_line } from "./app_code_lesson_expression_comparing_a_comparison_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_true_false_word } from "./js_true_false_word.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_comparing_a_comparison_replaced_lines(
  card,
  code,
  value,
  operator,
  right_value,
  then_lead,
) {
  arguments_assert(arguments, 6);
  ("the three lines that close a walkthrough once the replacement has been made: what the line is now, what that comes to, and what the line we started with is therefore worth");
  ("Said in the one place because both walkthroughs on this screen end the same way, and two copies could drift into two ways of finishing while both looked right.");
  ("The last two lines are worked out by the operator's own function rather than typed, so the example cannot say something the code would not do.");
  ("The joining word is the caller's, because it says how this tail hangs off what came before it. The card that opens by stating a fact reaches the replacement in one step and says Then we have; the card that opens by supposing a line has a step in between and says And then we have. A single wording would be right on one card and a stumble on the other.");
  let answer = js_true_false_word(value);
  let symbol = property_get(operator, "operator");
  let right_code = js_true_false_word(right_value);
  let whole = app_code_lesson_expression_comparing_a_comparison_line(
    code,
    operator,
    right_value,
  );
  let stood_in = text_combine_multiple([answer, " ", symbol, " ", right_code]);
  let fn = property_get(operator, "fn");
  let ended = fn(value, right_value);
  let ended_code = js_true_false_word(ended);
  let opening = text_combine(then_lead, " we have ");
  html_div_cycle_code(card, [opening, stood_in]);
  html_div_cycle_code(card, ["", stood_in, " is ", ended_code]);
  html_div_cycle_code(card, ["So ", whole, " is ", ended_code]);
}
