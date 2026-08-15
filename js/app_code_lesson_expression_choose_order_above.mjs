import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_lesson_expression_choose_order_expression } from "./app_code_lesson_expression_choose_order_expression.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
export function app_code_lesson_expression_choose_order_above(root) {
  arguments_assert(arguments, 1);
  ("what the new quiz is for, and what it does that the earlier ones did not");
  let times = js_operator_asterisk_symbol();
  let plus = js_operator_plus_symbol();
  let card = app_code_container_light_blue(root);
  let item = app_code_lesson_expression_choose_order_expression(true);
  let line = app_code_expression_code(item);
  app_code_lesson_suppose_solve_line(card, "Suppose", line);
  html_div_cycle_code(card, [
    "This time we do not answer the whole line at once",
  ]);
  html_div_cycle_code(card, ["We choose which operator to solve first"]);
  html_div_cycle_code(card, [
    "The quiz solves that one for us, and shows what is left",
  ]);
  html_div_cycle_code(card, ["Then we choose the next one"]);
  let rule_card = app_code_container_light_blue(root);
  html_div_cycle_code(rule_card, [
    "An operator can be solved when both of its sides are numbers already",
  ]);
  html_div_cycle_code(rule_card, [
    "So in ",
    "1 + 2 * 3",
    " we solve the ",
    times,
    " before the ",
    plus,
  ]);
}
