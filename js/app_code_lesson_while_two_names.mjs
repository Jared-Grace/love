import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { json_to } from "./json_to.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { equal } from "./equal.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while } from "./app_code_lesson_while.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_while_two_names() {
  arguments_assert(arguments, 0);
  ("a while changing a name it never asks about: let a = 1; let b = 9; while (a < 4) { a++; b--; } console.log(b); writes out 6");
  ("The one new fact is that a while may change a second name, which it does not ask about, so that name is found by counting how many times the { ... } ran. Two numbers meeting, next, then asks about both.");
  ("Asked for by the human 2026-11-02. Only b is written out, since a stops exactly on the number compared against and could be copied from there, while b can only be found by following the runs.");
  ("Each screen has four programs, one from each of four counts of runs - none, one, two and three. No two write out the same.");
  ("Reading forwards, the wrong answers are b after one run fewer, one run more, where b starts, and what a ends on, each once, never the answer, never below zero and never above where b starts.");
  ("Reading backwards, the wrong program compares a against a number one further on, so it runs once more; a program that never runs compares against one past where a starts, so that it runs once; a program already running three times compares against one nearer, so it runs once fewer.");
  ("The writing is a first draft by Claude 2026-11-02.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let name_a = "a";
  let name_b = "b";
  function program_lines(start_a, start_b, bound) {
    "let a = start_a; let b = start_b; while (a < bound) { a++; b--; } console.log(b);";
    let code_a = js_code_let_statement(name_a, start_a);
    let code_b = js_code_let_statement(name_b, start_b);
    let condition = js_code_binary_spaced_nb(name_a, less, bound);
    let grown = js_code_update_statement(name_a, plus);
    let shrunk = js_code_update_statement(name_b, minus);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      grown,
      shrunk,
    ]);
    let logged = js_code_console_log_statement(name_b);
    let lines = list_concat_multiple([[code_a, code_b], while_lines, [logged]]);
    return lines;
  }
  function program_get(start_a, start_b, bound) {
    let lines2 = program_lines(start_a, start_b, bound);
    let joined = list_join_newline(lines2);
    return joined;
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
    let triples = list_shuffle_take_map(groups, 4, list_random_item);
    function program_of(triple) {
      let item = list_get(triple, 0);
      let item2 = list_get(triple, 1);
      let item3 = list_get(triple, 2);
      let code = program_get(item, item2, item3);
      return code;
    }
    let codes = list_map(triples, program_of);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "b after one run fewer, one run more, where b starts, and what a ends on; each once, never the answer, never below zero and never above where b starts";
    let numbers = text_integers(question);
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
    let numbers2 = text_integers(answer);
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
  function said(root, a, b, bound5) {
    "a < bound is true, so a becomes a + 1 and b becomes b - 1";
    let condition2 = js_code_binary_spaced_nb(a, less, bound5);
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
  function above(root, context) {
    "While remembered, then a while changing a second name it never asks about";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_while, [
      "a ",
      "while",
      " runs its ",
      "{ ... }",
      " again and again, while what it asks is ",
      "true",
      ".",
    ]);
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "A ",
      "while",
      " can change a name it never asks about. Here it asks only about ",
      name_a,
      ", and ",
      name_b,
      " changes too:",
    ]);
    let lines3 = program_lines(1, 9, 4);
    app_code_code_lines_writes_out(box_two, lines3, "6");
    said(box_two, 1, 9, 4);
    said(box_two, 2, 8, 4);
    said(box_two, 3, 7, 4);
    let condition3 = js_code_binary_spaced_nb(4, less, 4);
    app_code_div_cycle_code(box_two, [
      "",
      condition3,
      " is ",
      "false",
      ", so the ",
      "{ ... }",
      " is skipped, and the code continues after it",
    ]);
    app_code_div_cycle_code(box_two, [
      "The ",
      "{ ... }",
      " ran three times, so one was taken away from ",
      name_b,
      " three times",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Two names in a while",
    "while (a < 4) { a++; b--; }",
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
