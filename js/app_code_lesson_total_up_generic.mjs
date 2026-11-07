import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { json_from } from "./json_from.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { json_to } from "./json_to.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_total_up_generic(
  program_write,
  above_inner,
  name_id,
) {
  arguments_assert(arguments, 3);
  ("a loop adding up a total: let total = 0; then a loop of n from start up to bound, doing total += n; and n += 1; then console.log(total);");
  ("What differs between lessons is the title, what is shown above, and how the loop is written, which program_write does when handed the let of n, the condition and the two lines; the let of total and the line that writes it out stand either side of what it writes. Above is handed example, which draws the program of 1 and 4 and what it writes out, and walk, which says what it does run by run.");
  ("n goes up by 1 each run, so n always lands exactly on the number it is compared against, and the last check is the same number on both sides of <, which is false; the walk says so.");
  ("Each screen has four programs, one from each of four counts of runs - none, one, two and three.");
  ("2026-10-27: no program runs more than three times, asked for by the human for now; the four-run group taken out");
  ("Reading forwards, the wrong answers are the total one run fewer, the total one run more, and n where it ends, the name not written out; each once, never the answer, never below zero.");
  ("Reading backwards, the wrong program is the same program compared against one more, so it runs once more.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  let total_name = "total";
  function program_lines(write, start, bound) {
    "let total = 0; the loop of n from start, asking n < bound, around total += n; n += 1; then console.log(total);";
    let total_let = js_code_let_statement(total_name, 0);
    let n_let = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let added = js_code_assign_operator_statement(total_name, plus, name);
    let counted = js_code_assign_operator_statement(name, plus, 1);
    let written = write(n_let, condition, [added, counted]);
    let statement = js_code_console_log_statement(total_name);
    let lines = list_concat_multiple([[total_let], written, [statement]]);
    return lines;
  }
  function program_get(start, bound) {
    let lines2 = program_lines(program_write, start, bound);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function batch_get() {
    "four programs, each from a different group, so each runs a different number of times";
    let groups = [
      [
        [5, 3],
        [6, 4],
      ],
      [
        [4, 5],
        [6, 7],
      ],
      [
        [2, 4],
        [3, 5],
      ],
      [
        [1, 4],
        [2, 5],
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
    "the total one run fewer, one run more, and n where it ends; each once, never the answer, never below zero";
    let numbers = text_integers(question);
    let start2 = list_get(numbers, 1);
    let bound2 = list_get(numbers, 2);
    let total = json_from(answer);
    let ended = start2;
    if (less_than(start2, bound2)) {
      ended = bound2;
    }
    let sum = add(total, ended);
    let candidates = [ended, sum];
    if (less_than(start2, bound2)) {
      let right = subtract(bound2, 1);
      let fewer = subtract(total, right);
      let sum2 = add(total, ended);
      candidates = [fewer, ended, sum2];
    }
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
    "the same program compared against one more, so it runs once more; or, when it already runs as often as a while lesson allows, against one less, so it runs once fewer";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 1);
    let bound3 = list_get(numbers2, 2);
    let ended2 = start3;
    if (less_than(start3, bound3)) {
      ended2 = bound3;
    }
    let sum3 = add(ended2, 1);
    let runs = subtract(ended2, start3);
    let a = app_code_while_runs_max();
    if (less_than_equal(a, runs)) {
      sum3 = subtract(ended2, 1);
    }
    let code4 = program_get(start3, sum3);
    let found2 = [code4];
    return found2;
  }
  function said(root, value, bound, total_after) {
    "value < bound is true, so total becomes total_after, and n becomes value + 1";
    let condition2 = js_code_binary_spaced_nb(value, less, bound);
    let after = json_to(total_after);
    let object = add(value, 1);
    let n_after = json_to(object);
    app_code_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "true",
      ", so ",
      total_name,
      " becomes ",
      after,
      ", and ",
      name,
      " becomes ",
      n_after,
    ]);
  }
  function example(root, write) {
    "the program of 1 and 4, written with write, and what it writes out";
    let lines3 = program_lines(write, 1, 4);
    app_learn_js_code_lines_writes_out(root, lines3, "6");
  }
  function walk(root) {
    "what the program of 1 and 4 does, run by run, until what it asks is false";
    said(root, 1, 4, 1);
    said(root, 2, 4, 3);
    said(root, 3, 4, 6);
    let last = js_code_binary_spaced_nb(4, less, 4);
    let r = app_learn_js_braces_dots();
    app_code_div_cycle_code(root, [
      "",
      last,
      " is ",
      "false",
      ", because 4 is not less than itself, so the ",
      r,
      " is skipped, and the code continues after it",
    ]);
    app_code_div_cycle_code(root, [
      "So ",
      total_name,
      " is 1 + 2 + 3, which is 6",
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
