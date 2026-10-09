import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { js_code_if_dots } from "./js_code_if_dots.mjs";
import { js_code_else_one_line } from "./js_code_else_one_line.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_else_in_if } from "./app_code_lesson_if_else_in_if.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_if_ab_logged } from "./app_code_lesson_if_ab_logged.mjs";
export function app_code_lesson_if_else_in_if_else() {
  arguments_assert(arguments, 0);
  ('an if and else inside an if that has an else of its own: let a = false; let b = true; if (a) { console.log("love"); if (b) { console.log("joy"); } else { console.log("peace"); } } else { console.log("kindness"); } console.log("patience"); writes out kindness and patience');
  ("The one new fact is that the if holding an if and else can have an else of its own: when a is false that else runs, and the if and else inside if (a) { ... } are not reached. The program is the one from An if and else inside an if with an else added after if (a) { ... }, so that else is the only new piece.");
  ("Asked for by the human 2026-10-08, as the fourth of the nesting shapes they listed: if ( if else ) else.");
  ('There are two elses, so a sentence names each one by the line inside it - else { console.log("peace"); } and else { console.log("kindness"); } - rather than as the inner one and the outer one, which would be a step for the reader to work out.');
  ("The four programs are a and b each true or false. With a false, b true and b false write out the same.");
  ("Reading forwards, the wrong answers offered are what the other programs write out, each once. Reading backwards, the wrong program changes one name so that it writes out something else: b when a is true, a when a is false.");
  ("The id is short because an id may be at most sixteen letters: the if gaining an else is the outer if.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let fruits = fruits_of_the_spirit();
  function program_lines(values, words) {
    "let a = first value; let b = second value; if (a) { console.log(first word); if (b) { console.log(second word); } else { console.log(third word); } } else { console.log(fourth word); } console.log(fifth word);";
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
    let inner = js_code_if_else_lines_multiple("b", [statement3], [statement4]);
    let outer_insides = list_concat([statement], inner);
    let outer = js_code_if_else_lines_multiple("a", outer_insides, [
      statement5,
    ]);
    let item5 = list_get(words, 4);
    let statement6 = app_code_word_console_log_statement(item5);
    let lines = list_concat_multiple([[setup_a, setup_b], outer, [statement6]]);
    return lines;
  }
  function above(root, context) {
    "an if and else inside an if remembered, then the if holding them given an else of its own, three ways";
    let love = list_get(fruits, 0);
    let joy = list_get(fruits, 1);
    let peace = list_get(fruits, 2);
    let kindness = list_get(fruits, 4);
    let patience = list_get(fruits, 3);
    let words4 = [love, joy, peace, kindness, patience];
    let say_joy = app_code_word_console_log_statement(joy);
    let say_peace = app_code_word_console_log_statement(peace);
    let say_kindness = app_code_word_console_log_statement(kindness);
    let say_patience = app_code_word_console_log_statement(patience);
    let if_a = js_code_if_dots("a");
    let if_b = js_code_if_dots("b");
    let else_peace = js_code_else_one_line(say_peace);
    let else_kindness = js_code_else_one_line(say_kindness);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_if_else_in_if,
      ["An ", "if", " and ", "else", " can go inside an ", "if"],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "",
      if_a,
      " can have an ",
      "else",
      " of its own too:",
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
      " run and ",
      else_kindness,
      " does not",
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
    let peace_lines = program_lines([true, false], words4);
    let peace_written = list_join_newline([love, peace, patience]);
    app_code_code_lines_writes_out(box_three, peace_lines, peace_written);
    html_div_cycle_code(box_three, [
      "",
      "b",
      " is ",
      "false",
      ", so ",
      else_peace,
      " runs",
    ]);
    let box_four = app_code_container_light_blue(root);
    html_div_cycle_code(box_four, ["And suppose ", "a", " is ", "false", ":"]);
    let kindness_lines = program_lines([false, true], words4);
    let kindness_written = list_join_newline([kindness, patience]);
    app_code_code_lines_writes_out(box_four, kindness_lines, kindness_written);
    html_div_cycle_code(box_four, [
      "",
      "a",
      " is ",
      "false",
      ", so ",
      else_kindness,
      " runs instead of ",
      if_a,
    ]);
    html_div_cycle_code(box_four, [
      "",
      if_b,
      " and ",
      else_peace,
      " are inside ",
      if_a,
      ", so neither ",
      if_b,
      " nor ",
      else_peace,
      " is reached",
    ]);
    html_div_cycle_code(box_four, [
      "",
      say_patience,
      " is outside ",
      if_a,
      " and ",
      else_kindness,
      ", so ",
      say_patience,
      " always runs",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "An if and else inside an if and else",
    "{ if ... else ... } else ...",
  );
  let lesson = app_code_lesson_if_ab_logged(
    fruits,
    program_lines,
    5,
    true,
    above,
    name_id,
  );
  return lesson;
}
