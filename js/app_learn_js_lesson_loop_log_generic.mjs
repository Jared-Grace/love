import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_size } from "./list_size.mjs";
import { multiply } from "./multiply.mjs";
import { list_concat } from "./list_concat.mjs";
import { subtract } from "./subtract.mjs";
import { list_take } from "./list_take.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_last } from "./list_last.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_loop_log_generic(params) {
  arguments_assert(arguments, 1);
  ("A lesson about one loop with a console.log inside: let n = start; loop (n < bound) { console.log(n); n += added; } writes out each value n holds as the loop runs, asked forwards and backwards.");
  ("What differs between lessons is the title, what is shown above, and how the whole program is written, which program_write does when handed the let, the condition and the two lines. Above is handed example, which draws the program of 1, 9 and 3 and what it writes out in a given way of writing it, and walk, which says what that program does run by run.");
  ("Each screen has one program from each of three counts of runs - one, two and three. None is left out, because a program that writes out nothing would show an empty answer.");
  ("Reading forwards, the wrong answers are the lines one run fewer, one run more, and every line written after n has changed rather than before; each once and never the answer.");
  ("Reading backwards, the wrong program is the same program compared against a number past where n ends, so it runs once more and writes out one line more.");
  let name_id = property_get(params, "name_id");
  let above_inner = property_get(params, "above");
  let program_write = property_get(params, "program_write");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  function program_lines(write, start, bound, added) {
    "let n = start; the loop asking n < bound around console.log(n); n += added;";
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let logged = js_code_console_log_statement(name);
    let changed = js_code_assign_operator_statement(name, plus, added);
    let lines = write(code, condition, [logged, changed]);
    return lines;
  }
  function program_get(start, bound, added) {
    let lines2 = program_lines(program_write, start, bound, added);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function values_of(start, bound, added) {
    "every value n holds when the loop asks and the answer is true";
    let values = [];
    let value = start;
    while (less_than(value, bound)) {
      list_add(values, value);
      value = add(value, added);
    }
    return values;
  }
  function written(values) {
    let texts = list_map(values, json_to);
    let text = list_join_newline(texts);
    return text;
  }
  function batch_get() {
    "three programs, running one, two and three times";
    let groups = [
      [
        [3, 5, 4],
        [2, 4, 3],
      ],
      [
        [1, 6, 3],
        [2, 5, 2],
      ],
      [
        [1, 9, 3],
        [2, 7, 2],
      ],
    ];
    let triples = list_shuffle_take_map(groups, 3, list_random_item);
    function program_of(triple) {
      let item = list_get(triple, 0);
      let item2 = list_get(triple, 1);
      let item3 = list_get(triple, 2);
      let code2 = program_get(item, item2, item3);
      return code2;
    }
    let codes = list_map(triples, program_of);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the lines one run fewer, one run more, and every line written after n has changed; each once and never the answer";
    let numbers = text_integers(question);
    let start2 = list_get(numbers, 0);
    let bound2 = list_get(numbers, 1);
    let added2 = list_get(numbers, 2);
    let values2 = values_of(start2, bound2, added2);
    let size = list_size(values2);
    let right = multiply(size, added2);
    let ended = add(start2, right);
    let more = list_concat(values2, [ended]);
    function after(value) {
      let a = add(value, added2);
      return a;
    }
    let shifted = list_map(values2, after);
    let candidates = [more, shifted];
    if (less_than(1, size)) {
      let count = subtract(size, 1);
      let fewer = list_take(values2, count);
      candidates = [fewer, more, shifted];
    }
    let texts = list_map(candidates, written);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program compared against a number past where n ends, so it runs once more; or, when it already runs as often as a while lesson allows, against the last value it writes out, so it runs once fewer";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 0);
    let bound3 = list_get(numbers2, 1);
    let added3 = list_get(numbers2, 2);
    let values3 = values_of(start3, bound3, added3);
    let left = list_size(values3);
    let right2 = multiply(left, added3);
    let ended2 = add(start3, right2);
    let sum = add(ended2, 1);
    let a2 = app_code_while_runs_max();
    if (less_than_equal(a2, left)) {
      sum = list_last(values3);
    }
    let code4 = program_get(start3, sum, added3);
    let found2 = [code4];
    return found2;
  }
  function said(root, value, bound, value_after) {
    "value < bound is true, so it writes out value, and n becomes value_after";
    let condition2 = js_code_binary_spaced_nb(value, less, bound);
    let json = json_to(value);
    let json2 = json_to(value_after);
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
  function example(root, write) {
    "the program of 1, 9 and 3, written with write, and what it writes out";
    let lines3 = program_lines(write, 1, 9, 3);
    let value2 = written([1, 4, 7]);
    app_learn_js_code_lines_writes_out(root, lines3, value2);
  }
  function walk(root) {
    "what the program of 1, 9 and 3 does, run by run, until what it asks is false";
    said(root, 1, 9, 4);
    said(root, 4, 9, 7);
    said(root, 7, 9, 10);
    let last = js_code_binary_spaced_nb(10, less, 9);
    let r = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(root, [
      "",
      last,
      " is ",
      "false",
      ", so the ",
      r,
      " is skipped, and the code continues after it",
    ]);
  }
  function above(root, context) {
    above_inner(root, context, example, walk);
  }
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
