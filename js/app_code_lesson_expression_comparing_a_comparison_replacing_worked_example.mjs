import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_expression_comparing_a_comparison_replaced_lines } from "./app_code_lesson_expression_comparing_a_comparison_replaced_lines.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_true_false_word } from "./js_true_false_word.mjs";
export function app_code_lesson_expression_comparing_a_comparison_replacing_worked_example(
  root,
  code,
  value,
  operator,
  right_value,
) {
  arguments_assert(arguments, 5);
  ("the rule this lesson teaches and the first line it is used on, in one card: the comparison is worth a true or false, so it is replaced by that true or false, and the line that is left is one the learner already knows how to read");
  ("The rule stood on a card of its own until now, and the walkthrough under it opened by supposing the line the screen had already put up two cards earlier. So a learner met the same sentence twice with a rule card wedged between the copies, and had to notice nothing had changed. The rule and the line it is used on are one movement, so they are one card, and the sentence is said once - at the top, where it is the question the whole screen answers.");
  ("It opens on the fact rather than on the line, because the line is already standing above it. 3 === 5 is false is the reason for the step under it, and So we replace names the step as following from that reason.");
  let card = app_code_container_light_blue(root);
  let answer = js_true_false_word(value);
  html_div_cycle_code(card, ["", code, " is ", answer]);
  html_div_cycle_code(card, ["So we replace the ", code, " with ", answer]);
  app_code_lesson_expression_comparing_a_comparison_replaced_lines(
    card,
    code,
    value,
    operator,
    right_value,
    "Then",
  );
}
