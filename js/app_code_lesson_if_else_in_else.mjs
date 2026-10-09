import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { js_code_if_dots } from "./js_code_if_dots.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_code_else_one_line } from "./js_code_else_one_line.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_in_else } from "./app_code_lesson_if_in_else.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_if_ab_logged } from "./app_code_lesson_if_ab_logged.mjs";
export function app_code_lesson_if_else_in_else() {
  arguments_assert(arguments, 0);
  ('an if and else inside an else: let a = false; let b = false; if (a) { console.log("love"); } else { console.log("joy"); if (b) { console.log("peace"); } else { console.log("kindness"); } } console.log("patience"); writes out joy, kindness and patience');
  ("The one new fact is that the if inside an else can have an else of its own. The program is the one from An if inside an else with an else added to the if inside, so that else is the only new piece.");
  ("Asked for by the human 2026-10-08, as the sixth of the nesting shapes they listed: if else ( if else ).");
  ('There are two elses, so a sentence names each one by a line inside it - else { console.log("joy"); ... } and else { console.log("kindness"); } - rather than as the outer one and the inner one, which would be a step for the reader to work out.');
  ("The four programs are a and b each true or false. With a true, b true and b false write out the same.");
  ("Reading forwards, the wrong answers offered are what the other programs write out, each once. Reading backwards, the wrong program changes one name so that it writes out something else: a when a is true, since b changes nothing then, and b when a is false.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let fruits = fruits_of_the_spirit();
  function program_lines(values, words) {
    "let a = first value; let b = second value; if (a) { console.log(first word); } else { console.log(second word); if (b) { console.log(third word); } else { console.log(fourth word); } } console.log(fifth word);";
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
    let item4 = list_get(words, 3);
    let statement5 = app_code_word_console_log_statement(item4);
    let inner = js_code_if_else_lines_multiple("b", [statement4], [statement5]);
    let else_insides = list_concat([statement3], inner);
    let outer = js_code_if_else_lines_multiple("a", [statement], else_insides);
    let item5 = list_get(words, 4);
    let statement6 = app_code_word_console_log_statement(item5);
    let lines = list_concat_multiple([[setup_a, setup_b], outer, [statement6]]);
    return lines;
  }
  function above(root, context) {
    "an if inside an else remembered, then that if given an else of its own, three ways";
    let love = list_get(fruits, 0);
    let joy = list_get(fruits, 1);
    let peace = list_get(fruits, 2);
    let kindness = list_get(fruits, 4);
    let patience = list_get(fruits, 3);
    let words4 = [love, joy, peace, kindness, patience];
    let say_love = app_code_word_console_log_statement(love);
    let say_joy = app_code_word_console_log_statement(joy);
    let say_peace = app_code_word_console_log_statement(peace);
    let say_kindness = app_code_word_console_log_statement(kindness);
    let say_patience = app_code_word_console_log_statement(patience);
    let if_a = js_code_if_dots("a");
    let if_b = js_code_if_dots("b");
    let joy_dots = text_combine_multiple([say_joy, " ..."]);
    let else_joy = js_code_else_one_line(joy_dots);
    let else_kindness = js_code_else_one_line(say_kindness);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_if_in_else,
      ["An ", "if", " can go inside an ", "else"],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "An ",
      "if",
      " and ",
      "else",
      " can go inside an ",
      "else",
      " too:",
    ]);
    let all_lines = program_lines([false, true], words4);
    let all_written = list_join_newline([joy, peace, patience]);
    app_code_code_lines_writes_out(box_two, all_lines, all_written);
    html_div_cycle_code(box_two, [
      "",
      "a",
      " is ",
      "false",
      ", so the lines inside ",
      else_joy,
      " run",
    ]);
    html_div_cycle_code(box_two, [
      "",
      "b",
      " is ",
      "true",
      ", so ",
      say_peace,
      " inside ",
      if_b,
      " runs and ",
      else_kindness,
      " does not",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, ["But suppose ", "b", " is ", "false", ":"]);
    let kindness_lines = program_lines([false, false], words4);
    let kindness_written = list_join_newline([joy, kindness, patience]);
    app_code_code_lines_writes_out(box_three, kindness_lines, kindness_written);
    html_div_cycle_code(box_three, [
      "",
      "b",
      " is ",
      "false",
      ", so ",
      else_kindness,
      " runs",
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
      " runs instead of the lines inside ",
      else_joy,
    ]);
    html_div_cycle_code(box_four, [
      "",
      if_b,
      " and ",
      else_kindness,
      " are inside ",
      else_joy,
      ", so neither ",
      if_b,
      " nor ",
      else_kindness,
      " is reached",
    ]);
    html_div_cycle_code(box_four, [
      "",
      say_patience,
      " is outside ",
      if_a,
      " and ",
      else_joy,
      ", so ",
      say_patience,
      " always runs",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "An if and else inside an else",
    "else { if ... else ... }",
  );
  let lesson = app_code_lesson_if_ab_logged(
    fruits,
    program_lines,
    5,
    false,
    above,
    name_id,
  );
  return lesson;
}
