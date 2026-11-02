import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
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
import { subtract } from "./subtract.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_filter } from "./list_filter.mjs";
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
export function app_code_lesson_while_two_meet() {
  arguments_assert(arguments, 0);
  ("two numbers meeting: let a = 1; let b = 7; while (a < b) { a++; b--; } console.log(a); console.log(b); writes out 4 and 4");
  ("2026-11-01, asked by the human: a++ and b-- rather than a += 1 and b -= 1, since ++ and -- are taught long before the while lessons and are the way one is added or taken away");
  ("The one new fact is that a while may change two names each run, and what it asks is about both, so each run both have to be followed before asking again. Started an odd distance apart they pass each other rather than landing together - 3 and 4 become 4 and 3 - which is what asking each time, rather than guessing where they meet, gets right.");
  ("Asked for by the human 2026-11-01, as a while lesson with a simple shape before An if inside a while.");
  ("Each screen has four programs, one from each of four counts of runs - none, one, two and three - no more than ",
    fn_name("app_code_while_runs_max"),
    " allows. Each count has one program that lands a and b together and one that passes them, and no two write out the same.");
  ("Reading forwards, the wrong answers are a and b after one run fewer, one run more, and where they start, each once, never the answer and never below zero.");
  ("Reading backwards, the wrong program starts b further off, so it runs once more; or, for a program already running three times, starts b nearer, so it runs once fewer.");
  ("The writing is a first draft by Claude 2026-11-01.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let name_a = "a";
  let name_b = "b";
  function program_lines(start_a, start_b) {
    "let a = start_a; let b = start_b; while (a < b) { a++; b--; } console.log(a); console.log(b);";
    let code_a = js_code_let_statement(name_a, start_a);
    let code_b = js_code_let_statement(name_b, start_b);
    let condition = js_code_binary_spaced_nb(name_a, less, name_b);
    let grown = js_code_update_statement(name_a, plus);
    let shrunk = js_code_update_statement(name_b, minus);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      grown,
      shrunk,
    ]);
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
  function runs_of(start_a, start_b) {
    "how many times the { ... } runs";
    let runs = 0;
    let value_a = start_a;
    let value_b = start_b;
    while (less_than(value_a, value_b)) {
      value_a = add(value_a, 1);
      value_b = subtract(value_b, 1);
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
    "four programs, running none, one, two and three times";
    let groups = [
      [
        [6, 4],
        [5, 5],
      ],
      [
        [5, 7],
        [3, 4],
      ],
      [
        [1, 5],
        [4, 7],
      ],
      [
        [1, 7],
        [2, 7],
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
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "a and b after one run fewer, one run more, and where they start; each once, never the answer and never below zero";
    let numbers = text_integers(question);
    let start_a2 = list_get(numbers, 0);
    let start_b2 = list_get(numbers, 1);
    let runs2 = runs_of(start_a2, start_b2);
    function after(count) {
      let a = add(start_a2, count);
      let b = subtract(start_b2, count);
      let pair2 = [a, b];
      return pair2;
    }
    let difference = subtract(runs2, 1);
    let fewer = after(difference);
    let sum = add(runs2, 1);
    let more = after(sum);
    let start = [start_a2, start_b2];
    let candidates = [fewer, more, start];
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
    "the same program with b starting further off, so it runs once more; or, when it already runs as often as a while lesson allows, starting nearer, so it runs once fewer";
    let numbers2 = text_integers(answer);
    let start_a3 = list_get(numbers2, 0);
    let start_b3 = list_get(numbers2, 1);
    let runs3 = runs_of(start_a3, start_b3);
    let start_b4 = add(start_b3, 2);
    if (equal(runs3, 0)) {
      start_b4 = add(start_a3, 2);
    }
    let most = app_code_while_runs_max();
    if (less_than_equal(most, runs3)) {
      start_b4 = subtract(start_b3, 2);
    }
    let code4 = program_get(start_a3, start_b4);
    let found2 = [code4];
    return found2;
  }
  function said(root, a4, b4) {
    "a < b is true, so a becomes a + 1 and b becomes b - 1";
    let condition2 = js_code_binary_spaced_nb(a4, less, b4);
    let object = add(a4, 1);
    let json_a = json_to(object);
    let object2 = subtract(b4, 1);
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
  function said_false(root, a5, b5) {
    let condition3 = js_code_binary_spaced_nb(a5, less, b5);
    app_code_div_cycle_code(root, [
      "",
      condition3,
      " is ",
      "false",
      ", so the ",
      "{ ... }",
      " is skipped, and the code continues after it",
    ]);
  }
  function above(root, context) {
    "While remembered, then a while changing two names, landing together, and then passing each other";
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
      " can change two names each time. Here ",
      name_a,
      " grows and ",
      name_b,
      " shrinks:",
    ]);
    let lines3 = program_lines(1, 7);
    let value = written([4, 4]);
    app_code_code_lines_writes_out(box_two, lines3, value);
    said(box_two, 1, 7);
    said(box_two, 2, 6);
    said(box_two, 3, 5);
    said_false(box_two, 4, 4);
    let box_three = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_three, [
      "They do not always land together. Started one apart, they pass each other:",
    ]);
    let lines4 = program_lines(3, 4);
    let value2 = written([4, 3]);
    app_code_code_lines_writes_out(box_three, lines4, value2);
    said(box_three, 3, 4);
    said_false(box_three, 4, 3);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Two numbers meeting",
    "while (a < b) { ... }",
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
