import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_dots } from "./js_code_if_dots.mjs";
import { js_code_if_one_line } from "./js_code_if_one_line.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_nested } from "./app_code_lesson_if_nested.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_if_after_nested_program_lines } from "./app_code_if_after_nested_program_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
export function app_code_if_after_nested_explain(root, context) {
  arguments_assert(arguments, 2);
  ("an if inside an if remembered, then an if after it, then the program with a false, which is where the if inside is never reached and the if after still runs");
  ("Moved here from An if after an if inside an if at the human's asking 2026-10-11, as for If inside an if and Else: the Does this section run? before each shape introduces it. That lesson keeps a reminder of this.");
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
  let if_joy = js_code_if_one_line("b", say_joy);
  let if_peace = js_code_if_one_line("b", say_peace);
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
    " can also go after an ",
    "if",
    ":",
  ]);
  let all_lines = app_code_if_after_nested_program_lines([true, true], words);
  let all_written = list_join_newline(words);
  app_code_code_lines_writes_out(box_two, all_lines, all_written);
  app_code_div_cycle_code(box_two, ["", if_joy, " is inside ", if_a]);
  app_code_div_cycle_code(box_two, [
    "",
    if_peace,
    " is after ",
    if_a,
    ", so ",
    if_peace,
    " is not inside ",
    if_a,
  ]);
  let box_three = app_code_container_light_blue(root);
  app_code_div_cycle_code(box_three, [
    "But suppose ",
    "a",
    " is ",
    "false",
    ":",
  ]);
  let none_lines = app_code_if_after_nested_program_lines([false, true], words);
  let none_written = list_join_newline([peace, patience]);
  app_code_code_lines_writes_out(box_three, none_lines, none_written);
  app_code_div_cycle_code(box_three, [
    "",
    "a",
    " is ",
    "false",
    ", so no line inside ",
    if_a,
    " runs",
  ]);
  app_code_div_cycle_code(box_three, ["So ", if_joy, " is never reached"]);
  app_code_div_cycle_code(box_three, [
    "",
    "b",
    " is ",
    "true",
    ", so ",
    say_peace,
    " inside ",
    if_peace,
    " still runs",
  ]);
  app_code_div_cycle_code(box_three, [
    "",
    say_patience,
    " is outside every ",
    "if",
    ", so ",
    say_patience,
    " always runs",
  ]);
}
