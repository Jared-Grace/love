import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_two_bounds } from "./app_code_lesson_if_two_bounds.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_if_nested_program_lines } from "./app_code_if_nested_program_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_dots } from "./js_code_if_dots.mjs";
export function app_code_if_nested_explain(root, context) {
  arguments_assert(arguments, 2);
  ("two ifs remembered, then an if inside an if three ways: both true, b false, and a false, which is where the if inside is never reached");
  ("Moved here from If inside an if at the human's asking 2026-10-11, that the Does this section run? before each shape introduce it: which lines run is that lesson's question, so the three ways are where it is first met. If inside an if keeps the last box, a && b, and a reminder of this.");
  let fruits = fruits_of_the_spirit();
  let love = list_get(fruits, 0);
  let joy = list_get(fruits, 1);
  let peace = list_get(fruits, 2);
  let words = [love, joy, peace];
  let box_one = app_code_container_light_blue(root);
  app_code_remember_from_lesson(
    box_one,
    context,
    app_code_lesson_if_two_bounds,
    ["Two ", "if", "s ask two questions, one after the other"],
  );
  let box_two = app_code_container_light_blue(root);
  app_code_div_cycle_code(box_two, [
    "An ",
    "if",
    " can go inside an ",
    "if",
    ":",
  ]);
  let all_lines = app_code_if_nested_program_lines([true, true], words);
  let all_written = list_join_newline(words);
  app_code_code_lines_writes_out(box_two, all_lines, all_written);
  let say_love = app_code_word_console_log_statement(love);
  let say_joy = app_code_word_console_log_statement(joy);
  let say_peace = app_code_word_console_log_statement(peace);
  let if_a = js_code_if_dots("a");
  let if_b = js_code_if_dots("b");
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
    " runs too",
  ]);
  app_code_div_cycle_code(box_two, [
    "",
    say_peace,
    " is outside ",
    if_a,
    ", so ",
    say_peace,
    " always runs",
  ]);
  let box_three = app_code_container_light_blue(root);
  app_code_div_cycle_code(box_three, [
    "But suppose ",
    "b",
    " is ",
    "false",
    ":",
  ]);
  let outer_lines = app_code_if_nested_program_lines([true, false], words);
  let outer_written = list_join_newline([love, peace]);
  app_code_code_lines_writes_out(box_three, outer_lines, outer_written);
  app_code_div_cycle_code(box_three, [
    "",
    "a",
    " is ",
    "true",
    ", so ",
    say_love,
    " runs",
  ]);
  app_code_div_cycle_code(box_three, [
    "",
    "b",
    " is ",
    "false",
    ", so ",
    say_joy,
    " does not run",
  ]);
  let box_four = app_code_container_light_blue(root);
  app_code_div_cycle_code(box_four, [
    "And suppose ",
    "a",
    " is ",
    "false",
    ":",
  ]);
  let none_lines = app_code_if_nested_program_lines([false, true], words);
  app_code_code_lines_writes_out(box_four, none_lines, peace);
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
    " is inside ",
    if_a,
    ", so ",
    if_b,
    " is never reached, even though ",
    "b",
    " is ",
    "true",
  ]);
}
