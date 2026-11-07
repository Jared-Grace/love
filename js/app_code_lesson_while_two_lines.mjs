import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { app_code_while_word_programs } from "./app_code_while_word_programs.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { json_to } from "./json_to.mjs";
import { list_map } from "./list_map.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_start_end } from "./app_code_lesson_while_start_end.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_while_two_lines() {
  arguments_assert(arguments, 0);
  ('two lines that write inside a while: let n = 1; while (n < 3) { console.log("joy"); console.log(n); n++; } writes out joy, 1, joy and 2');
  ("The one new fact is that the lines inside the { ... } run from top to bottom on every run, so what they write out takes turns: all of one run comes before any of the next.");
  ("Recommended by Claude 2026-11-03 and chosen by the human, to sit straight after Inside and outside, whose rule about which lines repeat this one leans on.");
  ("Each screen has one program from each of three counts of runs - one, two and three.");
  ("Reading forwards, the wrong answers are each run's two lines the other way round, every word before every number, the numbers one higher as though n changed first, and one run more; each once and never the answer.");
  ("Reading backwards, the wrong answers are the program with its two lines the other way round, and the program compared against a number one further on, or one nearer when it already runs as often as a while lesson allows.");
  ("The writing is a first draft by Claude 2026-11-03.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  function body_lines(start, bound, inside) {
    "let n = start; while (n < bound) { ...inside; n++; }";
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let changed = js_code_update_statement(name, plus);
    let keyword = js_keyword_while();
    let statements = list_concat(inside, [changed]);
    let while_lines = js_code_keyword_block_lines_multiple(
      keyword,
      condition,
      statements,
    );
    let lines = list_concat([code], while_lines);
    return lines;
  }
  function program_lines(start, bound, word) {
    let logged_word = app_code_word_console_log_statement(word);
    let logged_number = js_code_console_log_statement(name);
    let lines2 = body_lines(start, bound, [logged_word, logged_number]);
    return lines2;
  }
  function program_get(start, bound, word) {
    let lines3 = program_lines(start, bound, word);
    let joined = list_join_newline(lines3);
    return joined;
  }
  function program_swapped(start, bound, word) {
    "the same program with its two lines the other way round";
    let logged_word2 = app_code_word_console_log_statement(word);
    let logged_number2 = js_code_console_log_statement(name);
    let lines4 = body_lines(start, bound, [logged_number2, logged_word2]);
    let joined2 = list_join_newline(lines4);
    return joined2;
  }
  function values_of(start, bound) {
    "every value n holds when the while asks and the answer is true";
    let values = [];
    let value = start;
    while (less_than(value, bound)) {
      list_add(values, value);
      value = add(value, 1);
    }
    return values;
  }
  function batch_get() {
    "three programs, running one, two and three times";
    let codes = app_code_while_word_programs(program_get);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function turns_text(values, word) {
    "the word and then the number, for each value";
    function turn_of(value) {
      let json2 = json_to(value);
      let turn = list_join_newline([word, json2]);
      return turn;
    }
    let turns = list_map(values, turn_of);
    let text = list_join_newline(turns);
    return text;
  }
  function decoys(question, answer) {
    "each run's two lines the other way round, every word before every number, the numbers one higher, and one run more; each once and never the answer";
    let numbers = text_integers(question);
    let start2 = list_get(numbers, 0);
    let bound2 = list_get(numbers, 1);
    let answer_lines = text_split_newline(answer);
    let answer_word = list_first(answer_lines);
    let values2 = values_of(start2, bound2);
    function swapped_of(value) {
      let json3 = json_to(value);
      let turn2 = list_join_newline([json3, answer_word]);
      return turn2;
    }
    let list = list_map(values2, swapped_of);
    let swapped = list_join_newline(list);
    function word_of() {
      return answer_word;
    }
    let words = list_map(values2, word_of);
    let number_texts = list_map(values2, json_to);
    let list2 = list_concat(words, number_texts);
    let apart = list_join_newline(list2);
    function next_of(value) {
      let sum = add(value, 1);
      return sum;
    }
    let mapped = list_map(values2, next_of);
    let higher = turns_text(mapped, answer_word);
    let sum2 = add(bound2, 1);
    let v = values_of(start2, sum2);
    let more = turns_text(v, answer_word);
    let candidates = [swapped, apart, higher, more];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the program with its two lines the other way round, and the program compared against a number one further on, or one nearer when it already runs as often as a while lesson allows";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 0);
    let bound3 = list_get(numbers2, 1);
    let question_lines = text_split_newline(question);
    let question_word = list_first(question_lines);
    let list3 = values_of(start3, bound3);
    let left = list_size(list3);
    let bound4 = add(bound3, 1);
    let most = app_code_while_runs_max();
    if (less_than_equal(most, left)) {
      bound4 = subtract(bound3, 1);
    }
    let v2 = program_swapped(start3, bound3, question_word);
    let v3 = program_get(start3, bound4, question_word);
    let found2 = [v2, v3];
    return found2;
  }
  function said(root, value, bound, word) {
    "value < bound is true, so it writes out the word, then value, and n becomes the next value";
    let condition2 = js_code_binary_spaced_nb(value, less, bound);
    let json = json_to(value);
    let object = add(value, 1);
    let after = json_to(object);
    app_learn_js_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "true",
      ", so it writes out ",
      word,
      ", then ",
      json,
      ", and ",
      name,
      " becomes ",
      after,
    ]);
  }
  function above(root, context) {
    "Inside and outside remembered, then two lines inside a while taking turns";
    let fruits = fruits_of_the_spirit();
    let joy = list_get(fruits, 1);
    let box_one = app_learn_js_container_light_blue(root);
    let r = app_learn_js_braces_dots();
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_start_end,
      ["Lines inside the ", r, " repeat, and lines outside it run once."],
    );
    let box_two = app_learn_js_container_light_blue(root);
    let r2 = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(box_two, [
      "Lines inside the ",
      r2,
      " run from top to bottom, every run:",
    ]);
    let lines5 = program_lines(1, 3, joy);
    let written = turns_text([1, 2], joy);
    app_learn_js_code_lines_writes_out(box_two, lines5, written);
    said(box_two, 1, 3, joy);
    said(box_two, 2, 3, joy);
    let check = js_code_binary_spaced_nb(3, less, 3);
    let r3 = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(box_two, [
      "",
      check,
      " is ",
      "false",
      ", so the ",
      r3,
      " is skipped, and the code continues after it",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Two lines each run",
    '{ console.log("joy"); ... }',
  );
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
