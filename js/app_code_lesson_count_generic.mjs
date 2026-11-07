import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
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
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_count_generic(
  program_write,
  counted_first,
  above_inner,
  name_id,
) {
  arguments_assert(arguments, 4);
  ("a loop counting its own runs: let count = 0; then a loop of n from start, halving while it is greater than bound and doing count += 1; then console.log(count);");
  ("What differs between lessons is the title, what is shown above, how the loop is written, which program_write does when handed the let of n, the condition and the two lines, and which of those two lines comes first.");
  ("counted_first is there because a for takes the last line handed to it as its update, and the line that belongs up there is n /= 2. Neither order changes what is written out, since neither line reads what the other changes; what is said run by run follows the order, so the words match the lines they sit under.");
  ("Every start is a power of 2 and every end is 2 or more, so n stays a whole number on every run, and so does the bound of every wrong program.");
  ("Each screen has four programs, one from each of four counts of runs - none, one, two and three - no more than ",
    fn_name("app_code_while_runs_max"),
    " allows.");
  ("Reading forwards, the wrong answers are the count one run fewer, one run more, and n where it ends, the name not written out; each once, never the answer, never below zero.");
  ("Reading backwards, the wrong program is the same program compared against half of where n ends, so it runs once more; or, for a program already running three times, against twice where n ends, so it runs once fewer.");
  ("The numbers are chosen so that n never lands exactly on the number it is compared against, except in the backwards wrong program.");
  let greater = js_operator_greater_than_symbol();
  let plus = js_operator_plus_symbol();
  let slash = text_slash_forward();
  let name = "n";
  let count_name = "count";
  function program_lines(write, start, bound) {
    "let count = 0; the loop of n from start, asking n > bound, around n /= 2; and count += 1; then console.log(count);";
    let count_let = js_code_let_statement(count_name, 0);
    let n_let = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, greater, bound);
    let halved = js_code_assign_operator_statement(name, slash, 2);
    let counted = js_code_assign_operator_statement(count_name, plus, 1);
    let statements = [halved, counted];
    if (counted_first) {
      statements = [counted, halved];
    }
    let written = write(n_let, condition, statements);
    let statement = js_code_console_log_statement(count_name);
    let lines = list_concat_multiple([[count_let], written, [statement]]);
    return lines;
  }
  function program_get(start, bound) {
    let lines2 = program_lines(program_write, start, bound);
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
    "the same program compared against half of where n ends, so it runs once more; or, when it already runs as often as a loop lesson allows, against twice where n ends, so it runs once fewer";
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
    "value > bound is true, so n becomes half of value, and count becomes count_after, told in the order the lines run";
    let condition2 = js_code_binary_spaced_nb(value, greater, bound);
    let object = divide(value, 2);
    let n_after = json_to(object);
    let after = json_to(count_after);
    let first = [name, " becomes ", n_after];
    let second = [count_name, " becomes ", after];
    if (counted_first) {
      first = [count_name, " becomes ", after];
      second = [name, " becomes ", n_after];
    }
    let parts = list_concat_multiple([
      ["", condition2, " is ", "true", ", so "],
      first,
      [", and "],
      second,
    ]);
    app_code_div_cycle_code(root, parts);
  }
  function example(root, write) {
    "the program of 16 and 3, written with write, and what it writes out";
    let lines3 = program_lines(write, 16, 3);
    app_learn_js_code_lines_writes_out(root, lines3, "3");
  }
  function walk(root) {
    "what the program of 16 and 3 does, run by run, until what it asks is false";
    said(root, 16, 3, 1);
    said(root, 8, 3, 2);
    said(root, 4, 3, 3);
    let last = js_code_binary_spaced_nb(2, greater, 3);
    let r = app_learn_js_braces_dots();
    app_code_div_cycle_code(root, [
      "",
      last,
      " is ",
      "false",
      ", so the ",
      r,
      " is skipped, and the code continues after it",
    ]);
    let r2 = app_learn_js_braces_dots();
    app_code_div_cycle_code(root, [
      "So ",
      count_name,
      " is 3: the ",
      r2,
      " ran 3 times",
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
