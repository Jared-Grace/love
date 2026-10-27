import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_dots } from "./js_code_if_dots.mjs";
import { js_code_else_dots } from "./js_code_else_dots.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_nested } from "./app_code_lesson_if_nested.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_if_else_in_if_program_lines } from "./app_code_if_else_in_if_program_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
export function app_code_if_else_in_if_explain(root, context) {
  arguments_assert(arguments, 2);
  ("an if inside an if remembered, then an if and else inside an if three ways");
  ("Moved here from the lesson straight after at the human's asking 2026-10-11, as for If inside an if and Else: the Does this section run? before each shape introduces it. That lesson keeps a reminder of this.");
  let fruits = fruits_of_the_spirit();
  let love = list_get(fruits, 0);
  let joy = list_get(fruits, 1);
  let peace = list_get(fruits, 2);
  let patience = list_get(fruits, 3);
  let words = [love, joy, peace, patience];
  let say_joy = app_code_word_console_log_statement(joy);
  let say_peace = app_code_word_console_log_statement(peace);
  let say_patience = app_code_word_console_log_statement(patience);
  let if_a = js_code_if_dots("a");
  let if_b = js_code_if_dots("b");
  let else_dots = js_code_else_dots();
  let box_one = app_code_container_light_blue(root);
  app_code_remember_from_lesson(box_one, context, app_code_lesson_if_nested, [
    "An ",
    "if",
    " can go inside an ",
    "if",
  ]);
  let box_two = app_code_container_light_blue(root);
  app_code_div_cycle_code(box_two, [
    "An ",
    "if",
    " and ",
    "else",
    " can go inside an ",
    "if",
    ":",
  ]);
  let all_lines = app_code_if_else_in_if_program_lines([true, true], words);
  let all_written = list_join_newline([love, joy, patience]);
  app_code_code_lines_writes_out(box_two, all_lines, all_written);
  app_code_div_cycle_code(box_two, [
    "",
    "a",
    " is ",
    "true",
    ", so the lines inside ",
    if_a,
    " run",
  ]);
  app_code_div_cycle_code(box_two, [
    "",
    "b",
    " is ",
    "true",
    ", so ",
    say_joy,
    " inside ",
    if_b,
    " runs",
  ]);
  let box_three = app_code_container_light_blue(root);
  app_code_div_cycle_code(box_three, [
    "But suppose ",
    "b",
    " is ",
    "false",
    ":",
  ]);
  let else_lines = app_code_if_else_in_if_program_lines([true, false], words);
  let else_written = list_join_newline([love, peace, patience]);
  app_code_code_lines_writes_out(box_three, else_lines, else_written);
  app_code_div_cycle_code(box_three, [
    "",
    "b",
    " is ",
    "false",
    ", so ",
    say_peace,
    " inside ",
    else_dots,
    " runs",
  ]);
  let box_four = app_code_container_light_blue(root);
  app_code_div_cycle_code(box_four, [
    "And suppose ",
    "a",
    " is ",
    "false",
    ":",
  ]);
  let none_lines = app_code_if_else_in_if_program_lines([false, true], words);
  app_code_code_lines_writes_out(box_four, none_lines, patience);
  app_code_div_cycle_code(box_four, [
    "",
    "a",
    " is ",
    "false",
    ", so no line inside ",
    if_a,
    " runs",
  ]);
  app_code_div_cycle_code(box_four, [
    "",
    if_b,
    " and ",
    else_dots,
    " are both inside ",
    if_a,
    ", so neither ",
    if_b,
    " nor ",
    else_dots,
    " is reached",
  ]);
  app_code_div_cycle_code(box_four, [
    "",
    say_patience,
    " is outside ",
    if_a,
    ", so ",
    say_patience,
    " always runs",
  ]);
}
