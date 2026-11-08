import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { greater_than } from "./greater_than.mjs";
import { json_to } from "./json_to.mjs";
import { list_add } from "./list_add.mjs";
import { subtract } from "./subtract.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_learn_js_lesson_while_decrement } from "./app_learn_js_lesson_while_decrement.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_while_countdown() {
  arguments_assert(arguments, 0);
  ('a countdown with one line after it: let n = 3; while (n > 0) { console.log(n); n--; } console.log("go"); writes out 3, 2, 1 and go');
  ("The one new fact is that a line after the { ... } waits for the while to finish, and then runs once, however many times the { ... } ran.");
  ("Recommended by Claude 2026-11-02 and chosen by the human, to sit straight after While taking away one, whose program is this one with the last line added.");
  ("Each screen has one program from each of three counts of runs - one, two and three - using the numbers of While taking away one, so no wrong program goes below zero, which this course has not shown.");
  ("Reading forwards, the wrong answers are one run more, go written out after every number as though it were inside, and no go at all; each once and never the answer.");
  ("Reading backwards, the wrong program is compared against a number one further on, so it runs once more; or, when it already runs as often as a while lesson allows, one nearer, so it runs once fewer.");
  ("The writing is a first draft by Claude 2026-11-02.");
  let greater = js_operator_greater_than_symbol();
  let minus = js_operator_minus_symbol();
  let name = "n";
  let after_word = "go";
  function program_get(start, bound) {
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, greater, bound);
    let logged = js_code_console_log_statement(name);
    let changed = js_code_update_statement(name, minus);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      logged,
      changed,
    ]);
    let after_line = app_code_word_console_log_statement(after_word);
    let lines = list_concat_multiple([[code], while_lines, [after_line]]);
    return lines;
  }
  function program_text(start, bound) {
    let lines2 = program_get(start, bound);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function number_lines(start, bound) {
    "the line written out for every value n holds when the while asks and the answer is true";
    let found = [];
    let value = start;
    while (greater_than(value, bound)) {
      let item = json_to(value);
      list_add(found, item);
      value = subtract(value, 1);
    }
    return found;
  }
  function batch_get() {
    "three programs, running one, two and three times";
    let groups = [
      [
        [2, 1],
        [6, 5],
      ],
      [
        [3, 1],
        [7, 5],
      ],
      [
        [3, 0],
        [6, 3],
      ],
    ];
    let pairs = list_shuffle_take_map(groups, 3, list_random_item);
    function program_of(pair) {
      let first = list_get(pair, 0);
      let second = list_get(pair, 1);
      let code2 = program_text(first, second);
      return code2;
    }
    let codes = list_map(pairs, program_of);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "one run more, go after every number, and no go at all; each once and never the answer";
    let numbers = text_integers(question);
    let start2 = list_get(numbers, 0);
    let bound2 = list_get(numbers, 1);
    let lines3 = number_lines(start2, bound2);
    let difference = subtract(bound2, 1);
    let further = number_lines(start2, difference);
    let more = list_concat(further, [after_word]);
    function with_word(line) {
      let r = [line, after_word];
      return r;
    }
    let nested = list_map(lines3, with_word);
    let each_word = list_flat(nested);
    let candidates = list_map([more, each_word, lines3], list_join_newline);
    let without = list_without(candidates, answer);
    let once = list_unique(without);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against a number one further on, so it runs once more; or, when it already runs as often as a while lesson allows, one nearer, so it runs once fewer";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 0);
    let bound3 = list_get(numbers2, 1);
    let lines4 = number_lines(start3, bound3);
    let left = list_size(lines4);
    let bound4 = subtract(bound3, 1);
    let most = app_code_while_runs_max();
    if (less_than_equal(most, left)) {
      bound4 = bound3 + 1;
    }
    let code4 = program_text(start3, bound4);
    let r2 = [code4];
    return r2;
  }
  function said(root, value) {
    "value > 0 is true, so it writes out value, and n becomes one less";
    let condition2 = js_code_binary_spaced_nb(value, greater, 0);
    let json = json_to(value);
    let object = subtract(value, 1);
    let json2 = json_to(object);
    app_learn_js_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "true",
      ", so it writes out ",
      json,
      ", and ",
      name,
      " becomes ",
      json2,
    ]);
  }
  function above(root, context) {
    "While taking away one remembered, then a countdown with one line after the { ... }";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_while_decrement,
      [
        "",
        "n--",
        " inside a ",
        "while",
        " takes one away from ",
        name,
        " each run.",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    let r3 = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(box_two, [
      "A line after the ",
      r3,
      " waits for the ",
      "while",
      " to finish:",
    ]);
    let a = number_lines(3, 0);
    let written = list_concat(a, [after_word]);
    let lines5 = program_get(3, 0);
    let value2 = list_join_newline(written);
    app_learn_js_code_lines_writes_out(box_two, lines5, value2);
    said(box_two, 3);
    said(box_two, 2);
    said(box_two, 1);
    let check = js_code_binary_spaced_nb(0, greater, 0);
    let r4 = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(box_two, [
      "",
      check,
      " is ",
      "false",
      ", so the ",
      r4,
      " is skipped, and the code continues after it",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "The next line writes out ",
      after_word,
      ", once",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "A countdown",
    '{ n--; } console.log("go");',
  );
  let lesson = app_learn_js_lesson_code_logged({
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
