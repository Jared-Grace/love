import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_else_if_lines_multiple } from "./js_code_if_else_if_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { js_code_if_dots } from "./js_code_if_dots.mjs";
import { js_code_else_if_dots } from "./js_code_else_if_dots.mjs";
import { js_code_else_one_line } from "./js_code_else_one_line.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_in_else } from "./app_code_lesson_if_in_else.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_if_ab_logged } from "./app_code_lesson_if_ab_logged.mjs";
export function app_code_lesson_else_if() {
  arguments_assert(arguments, 0);
  ('else if: let a = false; let b = true; if (a) { console.log("love"); } else if (b) { console.log("joy"); } console.log("peace"); writes out joy and peace');
  ("The one new fact is that when an if is the only line inside an else, else { if (b) { ... } } can be written shorter as else if (b) { ... }, and the program does the same thing. The program shown first is an if inside an else, from An if inside an else, with nothing else inside that else, so the shorter way is the only new piece.");
  ("Asked for by the human 2026-10-09, after an if inside an else was found to be what else if means, and the course had no lesson on else if.");
  ("The condition is said plainly: only when the if is the only line inside the else. In An if inside an else the else also holds a line before the if, so that program cannot be written with else if.");
  ("The four programs are a and b each true or false. With a true, b true and b false write out the same, since else if (b) { ... } is then not reached.");
  ("Reading forwards, the wrong answers offered are what the other programs write out, each once. Reading backwards, the wrong program changes one name so that it writes out something else: a when a is true, since b changes nothing then, and b when a is false.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let fruits = fruits_of_the_spirit();
  function setups_of(values) {
    let value_a = list_get(values, 0);
    let setup_a = js_code_let_json_statement("a", value_a);
    let value_b = list_get(values, 1);
    let setup_b = js_code_let_json_statement("b", value_b);
    let setups = [setup_a, setup_b];
    return setups;
  }
  function program_lines(values, words) {
    "let a = first value; let b = second value; if (a) { console.log(first word); } else if (b) { console.log(second word); } console.log(third word);";
    let setups = setups_of(values);
    let item = list_get(words, 0);
    let statement = app_code_word_console_log_statement(item);
    let item2 = list_get(words, 1);
    let statement2 = app_code_word_console_log_statement(item2);
    let chain = js_code_if_else_if_lines_multiple("a", [statement], "b", [
      statement2,
    ]);
    let item3 = list_get(words, 2);
    let statement3 = app_code_word_console_log_statement(item3);
    let lines = list_concat_multiple([setups, chain, [statement3]]);
    return lines;
  }
  function nested_lines(values, words) {
    "the same program written with an if inside an else: if (a) { ... } else { if (b) { ... } }";
    let setups2 = setups_of(values);
    let item4 = list_get(words, 0);
    let statement4 = app_code_word_console_log_statement(item4);
    let item5 = list_get(words, 1);
    let statement5 = app_code_word_console_log_statement(item5);
    let inner = js_code_if_lines_multiple("b", [statement5]);
    let outer = js_code_if_else_lines_multiple("a", [statement4], inner);
    let item6 = list_get(words, 2);
    let statement6 = app_code_word_console_log_statement(item6);
    let lines2 = list_concat_multiple([setups2, outer, [statement6]]);
    return lines2;
  }
  function above(root, context) {
    "an if inside an else remembered, then the same program written with else if, then a true";
    let love = list_get(fruits, 0);
    let joy = list_get(fruits, 1);
    let peace = list_get(fruits, 2);
    let words4 = [love, joy, peace];
    let say_love = app_code_word_console_log_statement(love);
    let if_a = js_code_if_dots("a");
    let if_b = js_code_if_dots("b");
    let else_if_b = js_code_else_if_dots("b");
    let else_with_if = js_code_else_one_line(if_b);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_if_in_else,
      ["An ", "if", " can go inside an ", "else"],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "Here ",
      if_b,
      " is the only line inside ",
      "else",
      ":",
    ]);
    let nested = nested_lines([false, true], words4);
    let written = list_join_newline([joy, peace]);
    app_code_code_lines_writes_out(box_two, nested, written);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "So ",
      else_with_if,
      " can be written shorter as ",
      else_if_b,
      ":",
    ]);
    let chain_lines = program_lines([false, true], words4);
    app_code_code_lines_writes_out(box_three, chain_lines, written);
    html_div_cycle_code(box_three, [
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
    html_div_cycle_code(box_four, ["But suppose ", "a", " is ", "true", ":"]);
    let love_lines = program_lines([true, true], words4);
    let love_written = list_join_newline([love, peace]);
    app_code_code_lines_writes_out(box_four, love_lines, love_written);
    html_div_cycle_code(box_four, [
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
    html_div_cycle_code(box_four, [
      "",
      else_if_b,
      " is not reached, even though ",
      "b",
      " is ",
      "true",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Else if",
    "else if (b) { ... }",
  );
  let lesson = app_code_lesson_if_ab_logged(
    fruits,
    program_lines,
    3,
    false,
    above,
    name_id,
  );
  return lesson;
}
