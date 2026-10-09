import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { js_code_if_dots } from "./js_code_if_dots.mjs";
import { js_code_else_dots } from "./js_code_else_dots.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_nested } from "./app_code_lesson_if_nested.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_if_ab_logged } from "./app_code_lesson_if_ab_logged.mjs";
export function app_code_lesson_if_else_in_if() {
  arguments_assert(arguments, 0);
  ('an if and else inside an if: let a = true; let b = false; if (a) { console.log("love"); if (b) { console.log("joy"); } else { console.log("peace"); } } console.log("patience"); writes out love, peace and patience');
  ("The one new fact is that an if with an else can sit inside an if, and then the else is inside it too: when the outer if does not run, neither the inner if nor its else is reached. The program is the one from If inside an if with an else added to the if inside, so else is the only new piece.");
  ("Asked for by the human 2026-10-08, as the third of the nesting shapes they listed: if ( if else ).");
  ("The four programs are a and b each true or false, as in If inside an if. With a false, b true and b false write out the same, which is the new fact: once if (a) does not run, b changes nothing.");
  ("Reading forwards, the wrong answers offered are what the other programs write out, each once. One of them is the mistake of thinking an else always runs when its if does not: with a false, that reading adds the word inside else.");
  ("Reading backwards, the wrong program changes one name so that it writes out something else: b when a is true, a when a is false.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let fruits = fruits_of_the_spirit();
  function program_lines(values, words) {
    "let a = first value; let b = second value; if (a) { console.log(first word); if (b) { console.log(second word); } else { console.log(third word); } } console.log(fourth word);";
    let value_a = list_get(values, 0);
    let setup_a = js_code_let_json_statement("a", value_a);
    let value_b = list_get(values, 1);
    let setup_b = js_code_let_json_statement("b", value_b);
    let item = list_get(words, 0);
    let statement = app_code_word_console_log_statement(item);
    let item2 = list_get(words, 1);
    let statement3 = app_code_word_console_log_statement(item2);
    let item3 = list_get(words, 2);
    let statement4 = app_code_word_console_log_statement(item3);
    let inner = js_code_if_else_lines_multiple("b", [statement3], [statement4]);
    let outer_insides = list_concat([statement], inner);
    let outer = js_code_if_lines_multiple("a", outer_insides);
    let item4 = list_get(words, 3);
    let statement5 = app_code_word_console_log_statement(item4);
    let lines = list_concat_multiple([[setup_a, setup_b], outer, [statement5]]);
    return lines;
  }
  function above(root, context) {
    "an if inside an if remembered, then an if and else inside an if three ways";
    let love = list_get(fruits, 0);
    let joy = list_get(fruits, 1);
    let peace = list_get(fruits, 2);
    let patience = list_get(fruits, 3);
    let words4 = [love, joy, peace, patience];
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
    html_div_cycle_code(box_two, [
      "An ",
      "if",
      " and ",
      "else",
      " can go inside an ",
      "if",
      ":",
    ]);
    let all_lines = program_lines([true, true], words4);
    let all_written = list_join_newline([love, joy, patience]);
    app_code_code_lines_writes_out(box_two, all_lines, all_written);
    html_div_cycle_code(box_two, [
      "",
      "a",
      " is ",
      "true",
      ", so the lines inside ",
      if_a,
      " run",
    ]);
    html_div_cycle_code(box_two, [
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
    html_div_cycle_code(box_three, ["But suppose ", "b", " is ", "false", ":"]);
    let else_lines = program_lines([true, false], words4);
    let else_written = list_join_newline([love, peace, patience]);
    app_code_code_lines_writes_out(box_three, else_lines, else_written);
    html_div_cycle_code(box_three, [
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
    html_div_cycle_code(box_four, ["And suppose ", "a", " is ", "false", ":"]);
    let none_lines = program_lines([false, true], words4);
    app_code_code_lines_writes_out(box_four, none_lines, patience);
    html_div_cycle_code(box_four, [
      "",
      "a",
      " is ",
      "false",
      ", so no line inside ",
      if_a,
      " runs",
    ]);
    html_div_cycle_code(box_four, [
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
    html_div_cycle_code(box_four, [
      "",
      say_patience,
      " is outside ",
      if_a,
      ", so ",
      say_patience,
      " always runs",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "An if and else inside an if",
    "if (a) { if (b) ... else ... }",
  );
  let lesson = app_code_lesson_if_ab_logged(
    fruits,
    program_lines,
    4,
    true,
    above,
    name_id,
  );
  return lesson;
}
