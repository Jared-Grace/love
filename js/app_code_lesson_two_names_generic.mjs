import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_get } from "./list_get.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { equal } from "./equal.mjs";
import { list_find } from "./list_find.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { json_to } from "./json_to.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_braces_dots } from "./app_code_braces_dots.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_two_names_generic(options) {
  arguments_assert(arguments, 1);
  ("a loop changing a name it never asks about: a starts at start_a and goes up by one while a < bound, b starts at start_b and goes down by one each run, and console.log(b); comes after the loop; the while and the for differ only in what is handed in here");
  ("program_write is handed let a = ...;, let b = ...;, the condition, a++; and b--;, and returns every line before console.log(b);, so each lesson chooses the order. Above is handed example, which draws the program of 1, 9 and 4 with the writer it is given and what it writes out, and walk, which says what it does run by run.");
  ("Each screen has four programs, one from each of four counts of runs - none, one, two and three. No two write out the same.");
  ("Reading forwards, the wrong answers are b after one run fewer, one run more, where b starts, and what a ends on, each once, never the answer, never below zero and never above where b starts.");
  ("Reading backwards, the wrong program compares a against a number one further on, so it runs once more; a program that never runs compares against one past where a starts, so that it runs once; a program already running three times compares against one nearer, so it runs once fewer.");
  ("A program's three numbers are found by looking it up among the programs the lesson makes, not by reading its digits in order, because the writers put let a and let b in different orders.");
  let name_id = property_get(options, "name_id");
  let above_inner = property_get(options, "above");
  let program_write = property_get(options, "program_write");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let name_a = "a";
  let name_b = "b";
  let groups = [
    [
      [5, 8, 4],
      [6, 9, 3],
    ],
    [
      [2, 7, 3],
      [4, 8, 5],
    ],
    [
      [1, 7, 3],
      [3, 6, 5],
    ],
    [
      [1, 6, 4],
      [2, 5, 5],
    ],
  ];
  function program_lines(write, start_a, start_b, bound) {
    "the lines write puts before console.log(b);, then console.log(b);";
    let code_a = js_code_let_statement(name_a, start_a);
    let code_b = js_code_let_statement(name_b, start_b);
    let condition = js_code_binary_spaced_nb(name_a, less, bound);
    let grown = js_code_update_statement(name_a, plus);
    let shrunk = js_code_update_statement(name_b, minus);
    let before = write(code_a, code_b, condition, grown, shrunk);
    let logged = js_code_console_log_statement(name_b);
    let lines = list_concat(before, [logged]);
    return lines;
  }
  function program_get(start_a, start_b, bound) {
    let lines2 = program_lines(program_write, start_a, start_b, bound);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function program_of(triple) {
    let item = list_get(triple, 0);
    let item2 = list_get(triple, 1);
    let item3 = list_get(triple, 2);
    let code = program_get(item, item2, item3);
    return code;
  }
  let triples_all = list_concat_multiple(groups);
  function numbers_of(code3) {
    "start_a, start_b and bound of a program this lesson makes";
    function is_it(triple2) {
      let text = program_of(triple2);
      let same = equal(text, code3);
      return same;
    }
    let found3 = list_find(triples_all, is_it);
    return found3;
  }
  function runs_of(start_a, bound) {
    "how many times the { ... } runs";
    let runs = 0;
    let value_a = start_a;
    while (less_than(value_a, bound)) {
      value_a = add(value_a, 1);
      runs = add(runs, 1);
    }
    return runs;
  }
  function batch_get() {
    "four programs, running none, one, two and three times";
    let triples = list_shuffle_take_map(groups, 4, list_random_item);
    let codes = list_map(triples, program_of);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "b after one run fewer, one run more, where b starts, and what a ends on; each once, never the answer, never below zero and never above where b starts";
    let numbers = numbers_of(question);
    let start_a2 = list_get(numbers, 0);
    let start_b2 = list_get(numbers, 1);
    let bound2 = list_get(numbers, 2);
    let runs2 = runs_of(start_a2, bound2);
    let fewer_runs = subtract(runs2, 1);
    let fewer = subtract(start_b2, fewer_runs);
    let more_runs = add(runs2, 1);
    let more = subtract(start_b2, more_runs);
    let ended_a = add(start_a2, runs2);
    let candidates = [fewer, more, start_b2, ended_a];
    function possible(value) {
      let p = less_than_equal(0, value) && less_than_equal(value, start_b2);
      return p;
    }
    let kept = list_filter(candidates, possible);
    let texts = list_map(kept, json_to);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against one further on, so it runs once more; one past where a starts when it never ran, so it runs once; one nearer when it already runs as often as a while lesson allows, so it runs once fewer";
    let numbers2 = numbers_of(answer);
    let start_a3 = list_get(numbers2, 0);
    let start_b3 = list_get(numbers2, 1);
    let bound3 = list_get(numbers2, 2);
    let runs3 = runs_of(start_a3, bound3);
    let bound4 = add(bound3, 1);
    if (equal(runs3, 0)) {
      bound4 = add(start_a3, 1);
    }
    let most = app_code_while_runs_max();
    if (less_than_equal(most, runs3)) {
      bound4 = subtract(bound3, 1);
    }
    let code4 = program_get(start_a3, start_b3, bound4);
    let found2 = [code4];
    return found2;
  }
  function said(root, a, b) {
    "a < 4 is true, so a becomes a + 1 and b becomes b - 1";
    let condition2 = js_code_binary_spaced_nb(a, less, 4);
    let object = add(a, 1);
    let json_a = json_to(object);
    let object2 = subtract(b, 1);
    let json_b = json_to(object2);
    app_code_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "true",
      ", so ",
      name_a,
      " becomes ",
      json_a,
      " and ",
      name_b,
      " becomes ",
      json_b,
    ]);
  }
  function example(root, write) {
    "the program of 1, 9 and 4, written with write, and what it writes out";
    let lines3 = program_lines(write, 1, 9, 4);
    app_code_code_lines_writes_out(root, lines3, "6");
  }
  function walk(root) {
    "what the program of 1, 9 and 4 does, run by run, until what it asks is false, then how many times b lost one";
    said(root, 1, 9);
    said(root, 2, 8);
    said(root, 3, 7);
    let condition3 = js_code_binary_spaced_nb(4, less, 4);
    let r = app_code_braces_dots();
    app_code_div_cycle_code(root, [
      "",
      condition3,
      " is ",
      "false",
      ", so the ",
      r,
      " is skipped, and the code continues after it",
    ]);
    let r2 = app_code_braces_dots();
    app_code_div_cycle_code(root, [
      "The ",
      r2,
      " ran three times, so one was taken away from ",
      name_b,
      " three times",
    ]);
  }
  function above(root, context) {
    above_inner(root, context, example, walk);
  }
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
