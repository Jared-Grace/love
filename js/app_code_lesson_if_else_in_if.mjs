import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_if_codes_halves } from "./app_code_if_codes_halves.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not } from "./not.mjs";
import { js_code_if_dots } from "./js_code_if_dots.mjs";
import { js_code_else_dots } from "./js_code_else_dots.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_nested } from "./app_code_lesson_if_nested.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
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
  function logged(word) {
    'console.log("word");';
    let code = app_code_string_code(word);
    let statement = js_code_console_log_statement(code);
    return statement;
  }
  function setup_of(name, value) {
    let right = json_to(value);
    let setup = js_code_let_statement(name, right);
    return setup;
  }
  function program_lines(values, words) {
    "let a = first value; let b = second value; if (a) { console.log(first word); if (b) { console.log(second word); } else { console.log(third word); } } console.log(fourth word);";
    let value_a = list_get(values, 0);
    let setup_a = setup_of("a", value_a);
    let value_b = list_get(values, 1);
    let setup_b = setup_of("b", value_b);
    let item = list_get(words, 0);
    let statement2 = logged(item);
    let item2 = list_get(words, 1);
    let statement3 = logged(item2);
    let item3 = list_get(words, 2);
    let statement4 = logged(item3);
    let inner = js_code_if_else_lines_multiple("b", [statement3], [statement4]);
    let outer_insides = list_concat([statement2], inner);
    let outer = js_code_if_lines_multiple("a", outer_insides);
    let item4 = list_get(words, 3);
    let statement5 = logged(item4);
    let lines = list_concat_multiple([[setup_a, setup_b], outer, [statement5]]);
    return lines;
  }
  function program_get(values, words) {
    let lines2 = program_lines(values, words);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function values_of(code3) {
    "the two values a program's first two lines set";
    let lines3 = text_split_newline(code3);
    let first = list_get(lines3, 0);
    let second = list_get(lines3, 1);
    let value_a2 = text_includes(first, "true");
    let value_b2 = text_includes(second, "true");
    let values2 = [value_a2, value_b2];
    return values2;
  }
  function program_set(code5, values3) {
    "the same program with its first two lines setting these values";
    let lines4 = text_split_newline(code5);
    let item5 = list_get(values3, 0);
    let setup_a2 = setup_of("a", item5);
    let item6 = list_get(values3, 1);
    let setup_b2 = setup_of("b", item6);
    let rest = list_skip(lines4, 2);
    let lines5 = list_concat([setup_a2, setup_b2], rest);
    let joined2 = list_join_newline(lines5);
    return joined2;
  }
  function batch_get() {
    "four programs: a and b each true or false, each with four different words";
    let cases = [
      [true, true],
      [true, false],
      [false, false],
      [false, true],
    ];
    function program_of(c) {
      let words3 = list_shuffle_take(fruits, 4);
      let code2 = program_get(c, words3);
      return code2;
    }
    let codes = list_map(cases, program_of);
    let ordered = app_code_if_codes_halves(codes);
    return ordered;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "what the other programs write out, each once, since with a false two programs write out the same";
    let ways = [
      [true, true],
      [true, false],
      [false, false],
      [false, true],
    ];
    function written_of(values4) {
      let code6 = program_set(question, values4);
      let written = eval_console_log_lines(code6);
      return written;
    }
    let all = list_map(ways, written_of);
    let found = list_without(all, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program with b changed when a is true, and a changed when a is false";
    let values5 = values_of(answer);
    let value_a3 = list_get(values5, 0);
    let value_b3 = list_get(values5, 1);
    let n = not(value_b3);
    let changed = [value_a3, n];
    if (not(value_a3)) {
      changed = [true, value_b3];
    }
    let other = program_set(answer, changed);
    let found2 = [other];
    return found2;
  }
  function above(root, context) {
    "an if inside an if remembered, then an if and else inside an if three ways";
    let love = list_get(fruits, 0);
    let joy = list_get(fruits, 1);
    let peace = list_get(fruits, 2);
    let patience = list_get(fruits, 3);
    let words4 = [love, joy, peace, patience];
    let say_joy = logged(joy);
    let say_peace = logged(peace);
    let say_patience = logged(patience);
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
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
