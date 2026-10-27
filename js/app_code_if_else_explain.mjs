import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_dots } from "./js_code_if_dots.mjs";
import { js_code_else_dots } from "./js_code_else_dots.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_and_if_not } from "./app_code_lesson_if_and_if_not.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_if_else_program_lines } from "./app_code_if_else_program_lines.mjs";
export function app_code_if_else_explain(root, context) {
  arguments_assert(arguments, 2);
  ("if (a) beside if (!a) remembered, then the same program written with else, with a true and then false");
  ("The explanation of the Does this section run? before Else, at the human's asking 2026-10-11, since that lesson is now where else is first met. Else itself only remembers it, at the human's later asking the same day that each section-run lesson introduce its shape.");
  let bang = js_operator_bang_symbol();
  let fruits = fruits_of_the_spirit();
  let name = "a";
  let opposite = text_combine(bang, name);
  let love = list_get(fruits, 0);
  let joy = list_get(fruits, 1);
  let words = [love, joy];
  let statement_love = app_code_word_console_log_statement(love);
  let statement_joy = app_code_word_console_log_statement(joy);
  let if_dots = js_code_if_dots(name);
  let if_not_dots = js_code_if_dots(opposite);
  let else_dots = js_code_else_dots();
  let box_one = app_code_container_light_blue(root);
  app_code_remember_from_lesson(
    box_one,
    context,
    app_code_lesson_if_and_if_not,
    ["", "if (a)", " beside ", "if (!a)", " runs one of the two:"],
  );
  let setup = js_code_let_json_statement(name, true);
  let if_yes = js_code_if_lines(name, statement_love);
  let if_no = js_code_if_lines(opposite, statement_joy);
  let both_lines = list_concat_multiple([[setup], if_yes, if_no]);
  app_code_code_lines_writes_out(box_one, both_lines, love);
  let box_two = app_code_container_light_blue(root);
  app_code_div_cycle_code(box_two, [
    "",
    else_dots,
    " says the same as ",
    if_not_dots,
    " in fewer words, as long as nothing changes ",
    name,
    " in between:",
  ]);
  let true_lines = app_code_if_else_program_lines(name, true, words);
  app_code_code_lines_writes_out(box_two, true_lines, love);
  app_code_div_cycle_code(box_two, [
    "",
    name,
    " is ",
    "true",
    ", so ",
    statement_love,
    " inside ",
    if_dots,
    " runs",
  ]);
  let box_three = app_code_container_light_blue(root);
  app_code_div_cycle_code(box_three, [
    "But suppose ",
    name,
    " is ",
    "false",
    ":",
  ]);
  let false_lines = app_code_if_else_program_lines(name, false, words);
  app_code_code_lines_writes_out(box_three, false_lines, joy);
  app_code_div_cycle_code(box_three, [
    "",
    name,
    " is ",
    "false",
    ", so ",
    statement_joy,
    " inside ",
    else_dots,
    " runs",
  ]);
  let box_four = app_code_container_light_blue(root);
  app_code_div_cycle_code(box_four, [
    "So ",
    else_dots,
    " runs when ",
    if_dots,
    " does not, so exactly one of ",
    if_dots,
    " and ",
    else_dots,
    " runs, every time",
  ]);
}
