import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_and } from "./app_code_lesson_while_and.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_while_or() {
  arguments_assert(arguments, 0);
  ("a while asking two things joined by ||: let a = 2; let b = 4; while (a < 5 || b < 5) { a++; b++; } console.log(a); console.log(b); writes out 5 and 7, still running after b reaches 5 because a < 5 is still true");
  ("The one new fact is that a while asking || keeps going while either side is true, so it stops only once both sides are false - the other way round from While asking &&, which stops at the first false.");
  ("Asked for by the human 2026-11-01, straight after While asking &&.");
  ("a and b both grow, rather than b shrinking as in While asking &&, so that running until both sides are false never takes a number below zero, which this course has not shown.");
  ("Each screen has four programs, one from each of four counts of runs - none, one, two and three. Each count has one program where a is the last to reach 5 and one where b is, and no two write out the same.");
  ("Reading forwards, the wrong answers are a and b after one run fewer, one run more, where they start, and where they would end if only one side were asked - the mistake of reading || as asking one thing. Each once, never the answer and never below zero.");
  ("Reading backwards, the wrong program starts the side that is last to reach 5 one further off, so it runs once more; or, for a program already running three times, one nearer, so it runs once fewer.");
  ("The writing is a first draft by Claude 2026-11-01.");
  let less = js_operator_less_than_symbol();
  let or_symbol = js_operator_or_symbol();
  let and_symbol = js_operator_and_symbol();
  let plus = js_operator_plus_symbol();
  let name_a = "a";
  let name_b = "b";
  let bound = 5;
  function asked(value_a, value_b) {
    "a < 5 || b < 5, with a and b given";
    let left = js_code_binary_spaced_nb(value_a, less, bound);
    let right = js_code_binary_spaced_nb(value_b, less, bound);
    let condition = js_code_binary_spaced_nb(left, or_symbol, right);
    return condition;
  }
  function program_lines(start_a, start_b) {
    "let a = start_a; let b = start_b; while (a < 5 || b < 5) { a++; b++; } console.log(a); console.log(b);";
    let code_a = js_code_let_statement(name_a, start_a);
    let code_b = js_code_let_statement(name_b, start_b);
    let condition2 = asked(name_a, name_b);
    let grown_a = js_code_update_statement(name_a, plus);
    let grown_b = js_code_update_statement(name_b, plus);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(
      keyword,
      condition2,
      [grown_a, grown_b],
    );
    let logged_a = js_code_console_log_statement(name_a);
    let logged_b = js_code_console_log_statement(name_b);
    let lines = list_concat_multiple([
      [code_a, code_b],
      while_lines,
      [logged_a, logged_b],
    ]);
    return lines;
  }
  function program_get(start_a, start_b) {
    let lines2 = program_lines(start_a, start_b);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function runs_of(start_a, start_b, ask_a, ask_b) {
    "how many times the { ... } runs, asking a < 5 when ask_a and b < 5 when ask_b";
    let runs = 0;
    let value_a = start_a;
    let value_b = start_b;
    while (
      (ask_a && less_than(value_a, bound)) ||
      (ask_b && less_than(value_b, bound))
    ) {
      value_a = add(value_a, 1);
      value_b = add(value_b, 1);
      runs = add(runs, 1);
    }
    return runs;
  }
  function written(pair) {
    let texts = list_map(pair, json_to);
    let text = list_join_newline(texts);
    return text;
  }
  function batch_get() {
    "four programs, running none, one, two and three times, each picked from one where a is last to reach 5 and one where b is";
    let groups = [
      [
        [5, 5],
        [6, 5],
      ],
      [
        [4, 6],
        [6, 4],
      ],
      [
        [3, 6],
        [6, 3],
      ],
      [
        [2, 6],
        [6, 2],
      ],
    ];
    let pairs = list_shuffle_take_map(groups, 4, list_random_item);
    function program_of(pair) {
      let item = list_get(pair, 0);
      let item2 = list_get(pair, 1);
      let code = program_get(item, item2);
      return code;
    }
    let codes = list_map(pairs, program_of);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "a and b after one run fewer, one run more, where they start, and asking only a < 5 or only b < 5; each once, never the answer and never below zero";
    let numbers = text_integers(question);
    let start_a2 = list_get(numbers, 0);
    let start_b2 = list_get(numbers, 1);
    let runs2 = runs_of(start_a2, start_b2, true, true);
    function after(count) {
      let a = add(start_a2, count);
      let b = add(start_b2, count);
      let pair2 = [a, b];
      return pair2;
    }
    let difference = subtract(runs2, 1);
    let fewer = after(difference);
    let sum = add(runs2, 1);
    let more = after(sum);
    let v = runs_of(start_a2, start_b2, true, false);
    let only_a = after(v);
    let v2 = runs_of(start_a2, start_b2, false, true);
    let only_b = after(v2);
    let start = [start_a2, start_b2];
    let candidates = [fewer, more, start, only_a, only_b];
    function possible(pair3) {
      let a3 = list_get(pair3, 0);
      let b3 = list_get(pair3, 1);
      let p = less_than_equal(0, a3) && less_than_equal(0, b3);
      return p;
    }
    let kept = list_filter(candidates, possible);
    let texts = list_map(kept, written);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program with the side last to reach 5 started one further off, so it runs once more; or, when it already runs as often as a while lesson allows, one nearer, so it runs once fewer";
    let numbers2 = text_integers(answer);
    let start_a3 = list_get(numbers2, 0);
    let start_b3 = list_get(numbers2, 1);
    let runs3 = runs_of(start_a3, start_b3, true, true);
    let shift = 1;
    let most = app_code_while_runs_max();
    if (less_than_equal(most, runs3)) {
      shift = -1;
    }
    let start_a4 = start_a3;
    let start_b4 = subtract(start_b3, shift);
    if (less_than_equal(start_a3, start_b3)) {
      start_a4 = subtract(start_a3, shift);
      start_b4 = start_b3;
    }
    let code4 = program_get(start_a4, start_b4);
    let found2 = [code4];
    return found2;
  }
  function said(root, a4, b4) {
    "a < 5 || b < 5 is true, so a and b each become one more";
    let condition3 = asked(a4, b4);
    let object = add(a4, 1);
    let json_a = json_to(object);
    let object2 = add(b4, 1);
    let json_b = json_to(object2);
    app_code_div_cycle_code(root, [
      "",
      condition3,
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
  function said_false(root, a5, b5) {
    "a < 5 || b < 5 is false, because both sides are false, so the { ... } is skipped";
    let condition4 = asked(a5, b5);
    app_code_div_cycle_code(root, [
      "",
      condition4,
      " is ",
      "false",
      ", because both sides are ",
      "false",
      ", so the ",
      app_learn_js_braces_dots(),
      " is skipped, and the code continues after it",
    ]);
  }
  function above(root, context) {
    "While asking && remembered, then a while asking ||, still running after one side turns false";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_while_and, [
      "with ",
      "&&",
      ", a ",
      "while",
      " stops as soon as one side is ",
      "false",
      ".",
    ]);
    let box_two = app_learn_js_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "With ",
      or_symbol,
      ", a ",
      "while",
      " keeps going while either side is ",
      "true",
      ", so it stops only once both are ",
      "false",
      ". Here ",
      name_b,
      " reaches 5 first, but ",
      name_a,
      " is still less than 5:",
    ]);
    let lines3 = program_lines(2, 4);
    let value = written([5, 7]);
    app_learn_js_code_lines_writes_out(box_two, lines3, value);
    said(box_two, 2, 4);
    said(box_two, 3, 5);
    said(box_two, 4, 6);
    said_false(box_two, 5, 7);
    let box_three = app_learn_js_container_light_blue(root);
    let combined = js_code_binary_spaced_nb(5, less, bound);
    app_code_div_cycle_code(box_three, [
      "With ",
      and_symbol,
      " instead, it would stop at ",
      combined,
      " for ",
      name_b,
      ", after one run",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "While asking ||",
    "while (a < 5 || b < 5) { ... }",
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
