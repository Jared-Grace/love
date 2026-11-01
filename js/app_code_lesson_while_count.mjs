import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { json_from } from "./json_from.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { json_to } from "./json_to.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { multiply } from "./multiply.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_halve } from "./app_code_lesson_while_halve.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_while_count() {
  arguments_assert(arguments, 0);
  ("a while counting its own runs: let count = 0; let n = 16; while (n > 3) { n /= 2; count += 1; } console.log(count); writes out 3, the number of times the { ... } ran");
  ("The one new fact is that a while can change two names each time it runs, and one of them can count the runs, so what is written out is how many times the { ... } ran rather than where n ended.");
  ("Asked for by the human 2026-11-01, as the lesson after While halving: counting the runs.");
  ("It halves, as in While halving, so the count cannot be read off the numbers by taking away; each run has to be worked out.");
  ("Every start is a power of 2 and every end is 2 or more, so n stays a whole number on every run, and so does the bound of every wrong program.");
  ("Each screen has four programs, one from each of four counts of runs - none, one, two and three - no more than ",
    fn_name("app_code_while_runs_max"),
    " allows.");
  ("Reading forwards, the wrong answers are the count one run fewer, one run more, and n where it ends, the name not written out; each once, never the answer, never below zero.");
  ("Reading backwards, the wrong program is the same program compared against half of where n ends, so it runs once more; or, for a program already running three times, against twice where n ends, so it runs once fewer.");
  ("The numbers are chosen so that n never lands exactly on the number it is compared against, except in the backwards wrong program.");
  ("The writing is a first draft by Claude 2026-11-01.");
  let greater = js_operator_greater_than_symbol();
  let plus = js_operator_plus_symbol();
  let slash = text_slash_forward();
  let name = "n";
  let count_name = "count";
  function program_lines(start, bound) {
    "let count = 0; let n = start; while (n > bound) { n /= 2; count += 1; } console.log(count);";
    let count_let = js_code_let_statement(count_name, 0);
    let n_let = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, greater, bound);
    let halved = js_code_assign_operator_statement(name, slash, 2);
    let counted = js_code_assign_operator_statement(count_name, plus, 1);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      halved,
      counted,
    ]);
    let statement = js_code_console_log_statement(count_name);
    let lines = list_concat_multiple([
      [count_let, n_let],
      while_lines,
      [statement],
    ]);
    return lines;
  }
  function program_get(start, bound) {
    let lines2 = program_lines(start, bound);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function ended_get(start, bound) {
    "where n ends: halved while it is greater than bound";
    let value = start;
    while (greater_than(value, bound)) {
      value = divide(value, 2);
    }
    return value;
  }
  function batch_get() {
    "four programs, each from a different group, so each runs a different number of times";
    let groups = [
      [
        [4, 5],
        [8, 9],
      ],
      [
        [8, 5],
        [4, 3],
      ],
      [
        [8, 3],
        [16, 5],
      ],
      [
        [16, 3],
        [32, 5],
      ],
    ];
    let picked = list_shuffle_take(groups, 4);
    let pairs = list_map(picked, list_random_item);
    function program_of(pair) {
      let item = list_get(pair, 0);
      let item2 = list_get(pair, 1);
      let code = program_get(item, item2);
      return code;
    }
    let codes = list_map(pairs, program_of);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the count one run fewer, one run more, and n where it ends; each once, never the answer, never below zero";
    let numbers = text_integers(question);
    let start2 = list_get(numbers, 1);
    let bound2 = list_get(numbers, 2);
    let count = json_from(answer);
    let ended = ended_get(start2, bound2);
    let fewer = subtract(count, 1);
    let more = add(count, 1);
    let candidates = [fewer, more, ended];
    function possible(value) {
      let p = less_than_equal(0, value);
      return p;
    }
    let kept = list_filter(candidates, possible);
    let texts = list_map(kept, json_to);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against half of where n ends, so it runs once more; or, when it already runs as often as a while lesson allows, against twice where n ends, so it runs once fewer";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 1);
    let bound3 = list_get(numbers2, 2);
    let ended2 = ended_get(start3, bound3);
    let written = eval_console_log_lines(answer);
    let runs = json_from(written);
    let v = divide(ended2, 2);
    let a = app_code_while_runs_max();
    if (less_than_equal(a, runs)) {
      v = multiply(ended2, 2);
    }
    let code4 = program_get(start3, v);
    let found2 = [code4];
    return found2;
  }
  function said(root, value, bound, count_after) {
    "value > bound is true, so n becomes half of value, and count becomes count_after";
    let condition2 = js_code_binary_spaced_nb(value, greater, bound);
    let object = divide(value, 2);
    let n_after = json_to(object);
    let after = json_to(count_after);
    app_code_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "true",
      ", so ",
      name,
      " becomes ",
      n_after,
      ", and ",
      count_name,
      " becomes ",
      after,
    ]);
  }
  function above(root, context) {
    "the last while remembered, then a while counting how many times it halves";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_halve,
      ["a ", "while", " can halve ", name, " each time, with ", "/=", "."],
    );
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "Inside, it can change two names. Here ",
      count_name,
      " goes up by 1 each time, so it counts how many times the ",
      "{ ... }",
      " runs:",
    ]);
    let lines3 = program_lines(16, 3);
    app_code_code_lines_writes_out(box_two, lines3, "3");
    said(box_two, 16, 3, 1);
    said(box_two, 8, 3, 2);
    said(box_two, 4, 3, 3);
    let last = js_code_binary_spaced_nb(2, greater, 3);
    app_code_div_cycle_code(box_two, [
      "",
      last,
      " is ",
      "false",
      ", so the ",
      "{ ... }",
      " is skipped, and the code continues after it",
    ]);
    app_code_div_cycle_code(box_two, [
      "So ",
      count_name,
      " is 3: the ",
      "{ ... }",
      " ran 3 times",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Counting the runs",
    "count += 1;",
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
