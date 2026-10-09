import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_else_if_else_lines_multiple } from "./js_code_if_else_if_else_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { js_code_if_dots } from "./js_code_if_dots.mjs";
import { js_code_else_if_dots } from "./js_code_else_if_dots.mjs";
import { js_code_else_one_line } from "./js_code_else_one_line.mjs";
import { js_code_else_dots } from "./js_code_else_dots.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_else_if } from "./app_code_lesson_else_if.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_if_ab_logged } from "./app_code_lesson_if_ab_logged.mjs";
export function app_code_lesson_else_if_else() {
  arguments_assert(arguments, 0);
  ('else if then else: let a = false; let b = false; if (a) { console.log("love"); } else if (b) { console.log("joy"); } else { console.log("peace"); } console.log("patience"); writes out peace and patience');
  ("The one new fact is that an else if can be followed by an else, whose lines run when neither a nor b is true. The program is the one from Else if with an else added after else if (b) { ... }, so that else is the only new piece.");
  ("Recommended by Claude 2026-10-09 as the step after Else if, and chosen by the human.");
  ("There is one else here, so a sentence names it as else { ... }; the else if is named else if (b) { ... }, so the two cannot be mistaken for each other.");
  ("The four programs are a and b each true or false. With a true, b true and b false write out the same, since neither else if (b) { ... } nor else { ... } is reached.");
  ("Reading forwards, the wrong answers offered are what the other programs write out, each once. Reading backwards, the wrong program changes one name so that it writes out something else: a when a is true, since b changes nothing then, and b when a is false.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let fruits = fruits_of_the_spirit();
  function program_lines(values, words) {
    "let a = first value; let b = second value; if (a) { console.log(first word); } else if (b) { console.log(second word); } else { console.log(third word); } console.log(fourth word);";
    let value_a = list_get(values, 0);
    let setup_a = js_code_let_json_statement("a", value_a);
    let value_b = list_get(values, 1);
    let setup_b = js_code_let_json_statement("b", value_b);
    let item = list_get(words, 0);
    let statement = app_code_word_console_log_statement(item);
    let item2 = list_get(words, 1);
    let statement2 = app_code_word_console_log_statement(item2);
    let item3 = list_get(words, 2);
    let statement3 = app_code_word_console_log_statement(item3);
    let chain = js_code_if_else_if_else_lines_multiple(
      "a",
      [statement],
      "b",
      [statement2],
      [statement3],
    );
    let item4 = list_get(words, 3);
    let statement4 = app_code_word_console_log_statement(item4);
    let lines = list_concat_multiple([[setup_a, setup_b], chain, [statement4]]);
    return lines;
  }
  function above(root, context) {
    "else if remembered, then an else added after it, three ways";
    let love = list_get(fruits, 0);
    let joy = list_get(fruits, 1);
    let peace = list_get(fruits, 2);
    let patience = list_get(fruits, 3);
    let words4 = [love, joy, peace, patience];
    let say_love = app_code_word_console_log_statement(love);
    let say_joy = app_code_word_console_log_statement(joy);
    let say_patience = app_code_word_console_log_statement(patience);
    let if_a = js_code_if_dots("a");
    let if_b = js_code_if_dots("b");
    let else_if_b = js_code_else_if_dots("b");
    let else_with_if = js_code_else_one_line(if_b);
    let else_dots = js_code_else_dots();
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_else_if, [
      "",
      else_with_if,
      " can be written shorter as ",
      else_if_b,
    ]);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "An ",
      else_if_b,
      " can have an ",
      "else",
      " after it:",
    ]);
    let peace_lines = program_lines([false, false], words4);
    let peace_written = list_join_newline([peace, patience]);
    app_code_code_lines_writes_out(box_two, peace_lines, peace_written);
    html_div_cycle_code(box_two, [
      "",
      "a",
      " is ",
      "false",
      " and ",
      "b",
      " is ",
      "false",
      ", so the lines inside ",
      else_dots,
      " run",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, ["But suppose ", "b", " is ", "true", ":"]);
    let joy_lines = program_lines([false, true], words4);
    let joy_written = list_join_newline([joy, patience]);
    app_code_code_lines_writes_out(box_three, joy_lines, joy_written);
    html_div_cycle_code(box_three, [
      "",
      "b",
      " is ",
      "true",
      ", so ",
      say_joy,
      " inside ",
      else_if_b,
      " runs and ",
      else_dots,
      " is not reached",
    ]);
    let box_four = app_code_container_light_blue(root);
    html_div_cycle_code(box_four, ["And suppose ", "a", " is ", "true", ":"]);
    let love_lines = program_lines([true, true], words4);
    let love_written = list_join_newline([love, patience]);
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
      "Neither ",
      else_if_b,
      " nor ",
      else_dots,
      " is reached",
    ]);
    html_div_cycle_code(box_four, [
      "",
      say_patience,
      " comes after ",
      else_dots,
      ", so ",
      say_patience,
      " always runs",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Else if and else",
    "else if (b) { ... } else { ... }",
  );
  let lesson = app_code_lesson_if_ab_logged(
    fruits,
    program_lines,
    4,
    false,
    above,
    name_id,
  );
  return lesson;
}
