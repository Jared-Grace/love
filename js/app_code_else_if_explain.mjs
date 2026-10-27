import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_dots } from "./js_code_if_dots.mjs";
import { js_code_else_if_dots } from "./js_code_else_if_dots.mjs";
import { js_code_else_one_line } from "./js_code_else_one_line.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_in_else } from "./app_code_lesson_if_in_else.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_else_if_nested_lines } from "./app_code_else_if_nested_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_else_if_program_lines } from "./app_code_else_if_program_lines.mjs";
export function app_code_else_if_explain(root, context) {
  arguments_assert(arguments, 2);
  ("an if inside an else remembered, then the same program written with else if, then a true");
  ("Moved here from the lesson straight after at the human's asking 2026-10-11, as for If inside an if and Else: the Does this section run? before each shape introduces it. That lesson keeps a reminder of this.");
  let fruits = fruits_of_the_spirit();
  let love = list_get(fruits, 0);
  let joy = list_get(fruits, 1);
  let peace = list_get(fruits, 2);
  let words = [love, joy, peace];
  let say_love = app_code_word_console_log_statement(love);
  let if_a = js_code_if_dots("a");
  let if_b = js_code_if_dots("b");
  let else_if_b = js_code_else_if_dots("b");
  let else_with_if = js_code_else_one_line(if_b);
  let box_one = app_code_container_light_blue(root);
  app_code_remember_from_lesson(box_one, context, app_code_lesson_if_in_else, [
    "An ",
    "if",
    " can go inside an ",
    "else",
  ]);
  let box_two = app_code_container_light_blue(root);
  app_code_div_cycle_code(box_two, [
    "Here ",
    if_b,
    " is the only line inside ",
    "else",
    ":",
  ]);
  let nested = app_code_else_if_nested_lines([false, true], words);
  let written = list_join_newline([joy, peace]);
  app_code_code_lines_writes_out(box_two, nested, written);
  let box_three = app_code_container_light_blue(root);
  app_code_div_cycle_code(box_three, [
    "So ",
    else_with_if,
    " can be written shorter as ",
    else_if_b,
    ":",
  ]);
  let chain_lines = app_code_else_if_program_lines([false, true], words);
  app_code_code_lines_writes_out(box_three, chain_lines, written);
  app_code_div_cycle_code(box_three, [
    "",
    "a",
    " is ",
    "false",
    " and ",
    "b",
    " is ",
    "true",
    ", so the lines inside ",
    else_if_b,
    " run",
  ]);
  let box_four = app_code_container_light_blue(root);
  app_code_div_cycle_code(box_four, ["But suppose ", "a", " is ", "true", ":"]);
  let love_lines = app_code_else_if_program_lines([true, true], words);
  let love_written = list_join_newline([love, peace]);
  app_code_code_lines_writes_out(box_four, love_lines, love_written);
  app_code_div_cycle_code(box_four, [
    "",
    "a",
    " is ",
    "true",
    ", so ",
    say_love,
    " inside ",
    if_a,
    " runs",
  ]);
  app_code_div_cycle_code(box_four, [
    "",
    else_if_b,
    " is not reached, even though ",
    "b",
    " is ",
    "true",
  ]);
}
