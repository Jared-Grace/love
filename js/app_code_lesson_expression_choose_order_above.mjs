import { app_code_lesson_expression_choose_order_rule_parts } from "./app_code_lesson_expression_choose_order_rule_parts.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_lesson_expression_choose_order_expression } from "./app_code_lesson_expression_choose_order_expression.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_above(root) {
  arguments_assert(arguments, 1);
  ("what the new quiz is for, and what it does that the earlier ones did not");
  let card = app_code_container_light_blue(root);
  let item = app_code_lesson_expression_choose_order_expression(true);
  let line = app_code_expression_code(item);
  app_code_lesson_suppose_solve_line(card, "Suppose", line);
  html_div_cycle_code(card, [
    "Eventually we will teach you to solve this all at once",
  ]);
  html_div_cycle_code(card, [
    "But, for now, we will teach you to solve this step-by-step",
  ]);
  let rule_card = app_code_container_light_blue(root);
  ("the rule said of the very line the card above supposed, rather than of a line invented for the saying - the same words read twice about two different lines would set a learner comparing them for what changed");
  let parts = app_code_lesson_expression_choose_order_rule_parts("In ", line);
  html_div_cycle_code(rule_card, parts);
}
