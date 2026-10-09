import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { list_map } from "./list_map.mjs";
import { list_take } from "./list_take.mjs";
import { js_code_if_else_if_chain_lines_multiple } from "./js_code_if_else_if_chain_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_copy } from "./list_copy.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_set } from "./list_set.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { js_code_else_if_dots } from "./js_code_else_if_dots.mjs";
import { js_code_else_dots } from "./js_code_else_dots.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_else_if_else } from "./app_code_lesson_else_if_else.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_cases_logged } from "./app_code_lesson_cases_logged.mjs";
export function app_code_lesson_else_if_twice() {
  arguments_assert(arguments, 0);
  ('two else ifs: let a = false; let b = false; let c = true; if (a) { console.log("love"); } else if (b) { console.log("joy"); } else if (c) { console.log("peace"); } else { console.log("patience"); } console.log("kindness"); writes out peace and kindness');
  ("The one new fact is that an else if can follow another else if, and that once one of them runs, the rest are not reached, even when what they ask is true. The program is the one from Else if and else with else if (c) { ... } added after else if (b) { ... }.");
  ("Recommended by Claude 2026-10-09 as the step after Else if and else, and chosen by the human.");
  ("The four programs are one for each set of lines in the chain: a and b true, so b being true changes nothing; b and c true, so only else if (b) { ... } runs; c alone true; and none true, so else { ... } runs.");
  ("Reading forwards, the wrong answers offered are what the other programs write out, each once. Reading backwards, the wrong program changes the first name that is true to false, so the next one down runs, and when none is true it makes c true.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let fruits = fruits_of_the_spirit();
  let names = ["a", "b", "c"];
  function program_lines(values, words) {
    "let a, b and c set to the values; if (a) { first word } else if (b) { second word } else if (c) { third word } else { fourth word } and then the fifth word";
    function setup_of(name, index) {
      let value = list_get(values, index);
      let setup = js_code_let_json_statement(name, value);
      return setup;
    }
    let setups = list_map_index(names, setup_of);
    function said_of(word) {
      let statement = app_code_word_console_log_statement(word);
      let r = [statement];
      return r;
    }
    let said = list_map(words, said_of);
    let inside = list_take(said, 3);
    let otherwise = list_get(said, 3);
    let chain = js_code_if_else_if_chain_lines_multiple(
      names,
      inside,
      otherwise,
    );
    let after = list_get(said, 4);
    let lines = list_concat_multiple([setups, chain, after]);
    return lines;
  }
  function cases_get() {
    "one program for each set of lines in the chain";
    let cases = [
      [true, true, false],
      [false, true, true],
      [false, false, true],
      [false, false, false],
    ];
    return cases;
  }
  function values_changed(values) {
    "the first value that is true turned false, so the next one down runs; c made true when none is";
    let changed = list_copy(values);
    let b = list_includes(values, true);
    if (not(b)) {
      list_set(changed, 2, true);
      return changed;
    }
    let index = list_index_of(values, true);
    list_set(changed, index, false);
    return changed;
  }
  function above(root, context) {
    "else if and else remembered, then a second else if added, three ways";
    let love = list_get(fruits, 0);
    let joy = list_get(fruits, 1);
    let peace = list_get(fruits, 2);
    let patience = list_get(fruits, 3);
    let kindness = list_get(fruits, 4);
    let words4 = [love, joy, peace, patience, kindness];
    let say_joy = app_code_word_console_log_statement(joy);
    let say_peace = app_code_word_console_log_statement(peace);
    let say_patience = app_code_word_console_log_statement(patience);
    let else_if_b = js_code_else_if_dots("b");
    let else_if_c = js_code_else_if_dots("c");
    let else_dots = js_code_else_dots();
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_else_if_else,
      ["an ", else_if_b, " can have an ", "else", " after it"],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "An ",
      else_if_b,
      " can have another ",
      "else if",
      " after it:",
    ]);
    let peace_lines = program_lines([false, false, true], words4);
    let peace_written = list_join_newline([peace, kindness]);
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
      ", so ",
      else_if_c,
      " is reached",
    ]);
    html_div_cycle_code(box_two, [
      "",
      "c",
      " is ",
      "true",
      ", so ",
      say_peace,
      " runs",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "But suppose ",
      "b",
      " and ",
      "c",
      " are both ",
      "true",
      ":",
    ]);
    let joy_lines = program_lines([false, true, true], words4);
    let joy_written = list_join_newline([joy, kindness]);
    app_code_code_lines_writes_out(box_three, joy_lines, joy_written);
    html_div_cycle_code(box_three, [
      "",
      "b",
      " is ",
      "true",
      ", so ",
      say_joy,
      " runs",
    ]);
    html_div_cycle_code(box_three, [
      "Then ",
      else_if_c,
      " is not reached, even though ",
      "c",
      " is ",
      "true",
    ]);
    let box_four = app_code_container_light_blue(root);
    html_div_cycle_code(box_four, [
      "And suppose ",
      "a",
      ", ",
      "b",
      " and ",
      "c",
      " are all ",
      "false",
      ":",
    ]);
    let patience_lines = program_lines([false, false, false], words4);
    let patience_written = list_join_newline([patience, kindness]);
    app_code_code_lines_writes_out(box_four, patience_lines, patience_written);
    html_div_cycle_code(box_four, [
      "None is ",
      "true",
      ", so ",
      say_patience,
      " inside ",
      else_dots,
      " runs",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Two else ifs",
    "else if ... else if ...",
  );
  let lesson = app_code_lesson_cases_logged(
    fruits,
    cases_get,
    program_lines,
    5,
    values_changed,
    above,
    name_id,
  );
  return lesson;
}
