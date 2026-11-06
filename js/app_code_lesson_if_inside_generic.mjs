import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_get } from "./list_get.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { equal } from "./equal.mjs";
import { list_find } from "./list_find.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size_subtract } from "./list_size_subtract.mjs";
import { list_take } from "./list_take.mjs";
import { list_size } from "./list_size.mjs";
import { multiply } from "./multiply.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { subtract } from "./subtract.mjs";
import { app_code_braces_dots } from "./app_code_braces_dots.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_inside_generic(options) {
  arguments_assert(arguments, 1);
  ("an if inside a loop: let n = 1; loop (n < 6) { if (n > 2) { console.log(n); } n += 2; } writes out 3 and 5, one under the other, and not 1; the while and the for differ only in what is handed in here");
  ("program_write is handed let n = ...;, the condition and the lines inside, the last being n += 2;, and returns the whole program. keyword is the loop's own word, said as the walk ends. Above is handed example, which draws the program of 1, 6 and 2 with the writer it is given and what it writes out, and walk, which says what it does run by run.");
  ("n goes up by 2, and every number it is compared against has the other evenness, so n never lands on what it is compared against.");
  ("Each screen has four programs, one from each group: three runs writing out one line, three runs writing out two, two runs writing out one, and two runs writing out both; no program runs more than three times, and none writes out nothing.");
  ("Reading forwards, the wrong answers are every n the loop ran on, as though the if were not there; the n the if skipped, as though it were the other way round; the lines one fewer; and the lines with the n the loop stopped at, as though it ran once more. Each once, never the answer, never empty.");
  ("Reading backwards, the wrong program is the same program with the if compared against 2 less, so it lets one more n through; or, when it already lets every n through, against 1 more than the first n, so it skips that one.");
  ("A program's three numbers are found by looking it up among the programs the lesson makes, not by reading its digits in order, because a for writes the 2 of n += 2 before the number the if compares against.");
  let name_id = property_get(options, "name_id");
  let above_inner = property_get(options, "above");
  let program_write = property_get(options, "program_write");
  let keyword = property_get(options, "keyword");
  let less = js_operator_less_than_symbol();
  let greater = js_operator_greater_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  let step = 2;
  let groups = [
    [
      [1, 6, 4],
      [2, 7, 5],
    ],
    [
      [1, 6, 2],
      [2, 7, 3],
    ],
    [
      [1, 4, 2],
      [2, 5, 3],
    ],
    [
      [3, 6, 2],
      [4, 7, 1],
    ],
  ];
  function program_lines(write, start, bound, threshold) {
    "let n = start; loop (n < bound) { if (n > threshold) { console.log(n); } n += 2; }";
    let n_let = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let asked = js_code_binary_spaced_nb(name, greater, threshold);
    let statement = js_code_console_log_statement(name);
    let if_lines = js_code_if_lines(asked, statement);
    let change = js_code_assign_operator_statement(name, plus, step);
    let insides = list_concat(if_lines, [change]);
    let lines = write(n_let, condition, insides);
    return lines;
  }
  function program_get(start, bound, threshold) {
    let lines2 = program_lines(program_write, start, bound, threshold);
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
    "start, bound and threshold of a program this lesson makes";
    function is_it(triple2) {
      let text = program_of(triple2);
      let same = equal(text, code3);
      return same;
    }
    let found3 = list_find(triples_all, is_it);
    return found3;
  }
  function values_of(start, bound) {
    "every value n holds when the loop asks and the answer is true";
    let values = [];
    let value = start;
    while (less_than(value, bound)) {
      list_add(values, value);
      value = add(value, step);
    }
    return values;
  }
  function written(values) {
    let texts = list_map(values, json_to);
    let text = list_join_newline(texts);
    return text;
  }
  function batch_get() {
    "four programs, one from each group";
    let triples = list_shuffle_take_map(groups, 4, list_random_item);
    let codes = list_map(triples, program_of);
    return codes;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "every n the loop ran on, the n the if skipped, the lines one fewer, and the lines with the n the loop stopped at; each once, never the answer, never empty";
    let numbers = numbers_of(question);
    let start2 = list_get(numbers, 0);
    let bound2 = list_get(numbers, 1);
    let threshold2 = list_get(numbers, 2);
    let values2 = values_of(start2, bound2);
    function through(value) {
      let t = greater_than(value, threshold2);
      return t;
    }
    function skipped_is(value) {
      let left = through(value);
      let s = equal(left, false);
      return s;
    }
    let kept = list_filter(values2, through);
    let skipped = list_filter(values2, skipped_is);
    let count = list_size_subtract(kept, 1);
    let fewer = list_take(kept, count);
    let size = list_size(values2);
    let moved_by = multiply(size, step);
    let ended = add(start2, moved_by);
    let more = list_concat(kept, [ended]);
    let candidates = [values2, skipped, fewer, more];
    let filled = list_filter(candidates, list_empty_not_is);
    let texts = list_map(filled, written);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program with the if compared against 2 less, so one more n is let through; or, when every n is let through already, against 1 more than the first n, so that one is skipped";
    let numbers2 = numbers_of(answer);
    let start3 = list_get(numbers2, 0);
    let bound3 = list_get(numbers2, 1);
    let threshold3 = list_get(numbers2, 2);
    let values3 = values_of(start3, bound3);
    let first = list_get(values3, 0);
    let moved = subtract(threshold3, step);
    if (less_than(threshold3, first)) {
      moved = add(first, 1);
    }
    let code4 = program_get(start3, bound3, moved);
    let found2 = [code4];
    return found2;
  }
  function said(root, value, threshold) {
    "value > threshold is true or false, so value is written out or skipped, then n becomes value + 2";
    let asked2 = js_code_binary_spaced_nb(value, greater, threshold);
    let through2 = greater_than(value, threshold);
    let object = add(value, step);
    let after = json_to(object);
    let shown = json_to(value);
    let middle = [", so ", shown, " is written out"];
    let truth = "true";
    if (equal(through2, false)) {
      let r = app_code_braces_dots();
      middle = [", so the ", "if", "'s ", r, " is skipped"];
      truth = "false";
    }
    let parts = list_concat_multiple([
      ["", asked2, " is ", truth],
      middle,
      [", then ", name, " becomes ", after],
    ]);
    app_code_div_cycle_code(root, parts);
  }
  function example(root, write) {
    "the program of 1, 6 and 2, written with write, and what it writes out";
    let lines3 = program_lines(write, 1, 6, 2);
    let value2 = written([3, 5]);
    app_code_code_lines_writes_out(root, lines3, value2);
  }
  function walk(root) {
    "what the program of 1, 6 and 2 does, run by run, until the loop stops, then how many lines were written out";
    said(root, 1, 2);
    said(root, 3, 2);
    said(root, 5, 2);
    let last = js_code_binary_spaced_nb(7, less, 6);
    app_code_div_cycle_code(root, [
      "",
      last,
      " is ",
      "false",
      ", so the ",
      keyword,
      " stops",
    ]);
    app_code_div_cycle_code(root, [
      "The ",
      keyword,
      " ran three times, but only two lines were written out",
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
