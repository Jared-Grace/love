import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_get } from "./list_get.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { multiply } from "./multiply.mjs";
import { json_to } from "./json_to.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_while_runs_max } from "./app_code_while_runs_max.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { each } from "./each.mjs";
import { list_last } from "./list_last.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_log_double_generic(options) {
  arguments_assert(arguments, 1);
  ("a loop that writes out double n: let n = 1; loop (n < 3) { console.log(n * 2); n++; } writes out 2 and 4; the while and the for differ only in what is handed in here");
  ("What differs between lessons is the title, what is shown above, and how the whole program is written, which program_write does when handed the let, the condition and the two lines. Above is handed example, which draws the program of 1 and 3 and what it writes out, and walk, which says what it does run by run.");
  ("Each screen has one program from each of three counts of runs - one, two and three. None starts at 0, whose double is itself, and none runs once from 2, whose double is also 2 more; so each wrong program below writes out something other than the answer.");
  ("Reading forwards, the wrong answers are n itself, n + 2, the double of the next n as though n changed first, and one run more; each once and never the answer.");
  ("Reading backwards, the wrong answers are the program writing out n, the program writing out n + 2, and the program compared against a number one further on, or one nearer when it already runs as often as a while lesson allows.");
  let name_id = property_get(options, "name_id");
  let above_inner = property_get(options, "above");
  let program_write = property_get(options, "program_write");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let times = js_operator_asterisk_symbol();
  let name = "n";
  let start = 1;
  let bound = 3;
  function expression_of(operator) {
    "n times 2, or n plus 2";
    let expression = js_code_binary_spaced_nb(name, operator, 2);
    return expression;
  }
  function program_lines(write, start_value, bound_value, written) {
    "let n = start_value; the loop asking n < bound_value around console.log(written); n++;";
    let code = js_code_let_statement(name, start_value);
    let condition = js_code_binary_spaced_nb(name, less, bound_value);
    let logged = js_code_console_log_statement(written);
    let changed = js_code_update_statement(name, plus);
    let lines = write(code, condition, [logged, changed]);
    return lines;
  }
  function program_text(start_value, bound_value, written) {
    let lines2 = program_lines(
      program_write,
      start_value,
      bound_value,
      written,
    );
    let joined = list_join_newline(lines2);
    return joined;
  }
  function program_get(pair) {
    let first = list_get(pair, 0);
    let second = list_get(pair, 1);
    let doubled = expression_of(times);
    let code2 = program_text(first, second, doubled);
    return code2;
  }
  function values_of(start_value, bound_value) {
    "every value n holds when the loop asks and the answer is true";
    let values = [];
    let value = start_value;
    while (less_than(value, bound_value)) {
      list_add(values, value);
      value = add(value, 1);
    }
    return values;
  }
  function batch_get() {
    "three programs, running one, two and three times";
    let groups = [
      [
        [1, 2],
        [4, 5],
      ],
      [
        [1, 3],
        [3, 5],
      ],
      [
        [1, 4],
        [3, 6],
      ],
    ];
    let pairs = list_shuffle_take_map(groups, 3, list_random_item);
    let codes = list_map(pairs, program_get);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function double_of(value) {
    let product = multiply(value, 2);
    return product;
  }
  function plus_two_of(value) {
    let sum = add(value, 2);
    return sum;
  }
  function next_double_of(value) {
    let next = add(value, 1);
    let product2 = multiply(next, 2);
    return product2;
  }
  function lines_of(values) {
    let texts = list_map(values, json_to);
    let text = list_join_newline(texts);
    return text;
  }
  function decoys(question, answer) {
    "n itself, n + 2, the double of the next n, and one run more; each once and never the answer";
    let numbers = text_integers(question);
    let start2 = list_get(numbers, 0);
    let bound2 = list_get(numbers, 1);
    let values2 = values_of(start2, bound2);
    let itself = lines_of(values2);
    let list = list_map(values2, plus_two_of);
    let plus_two = lines_of(list);
    let list2 = list_map(values2, next_double_of);
    let next_double = lines_of(list2);
    let sum2 = add(bound2, 1);
    let v = values_of(start2, sum2);
    let list3 = list_map(v, double_of);
    let more = lines_of(list3);
    let candidates = [itself, plus_two, next_double, more];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the program writing out n, the program writing out n + 2, and the program compared against a number one further on, or one nearer when it already runs as often as a while lesson allows";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 0);
    let bound3 = list_get(numbers2, 1);
    let list4 = values_of(start3, bound3);
    let left = list_size(list4);
    let bound4 = add(bound3, 1);
    let most = app_code_while_runs_max();
    if (less_than_equal(most, left)) {
      bound4 = subtract(bound3, 1);
    }
    let added = expression_of(plus);
    let doubled2 = expression_of(times);
    let v2 = program_text(start3, bound3, name);
    let v3 = program_text(start3, bound3, added);
    let v4 = program_text(start3, bound4, doubled2);
    let found2 = [v2, v3, v4];
    return found2;
  }
  function said(root, value) {
    "value < bound is true, so it writes out value * 2, which is its double, and n becomes the next value";
    let condition2 = js_code_binary_spaced_nb(value, less, bound);
    let worked = js_code_binary_spaced_nb(value, times, 2);
    let product3 = multiply(value, 2);
    let doubled3 = json_to(product3);
    let object = add(value, 1);
    let after = json_to(object);
    app_learn_js_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "true",
      ", so it writes out ",
      worked,
      ", which is ",
      doubled3,
      ", and ",
      name,
      " becomes ",
      after,
    ]);
  }
  function example(root, write) {
    "the program of 1 and 3, written with write, and what it writes out";
    let doubled4 = expression_of(times);
    let lines3 = program_lines(write, start, bound, doubled4);
    let values5 = values_of(start, bound);
    let list5 = list_map(values5, double_of);
    let written = lines_of(list5);
    app_learn_js_code_lines_writes_out(root, lines3, written);
  }
  function walk(root) {
    "what the program of 1 and 3 does, run by run, until what it asks is false";
    let values6 = values_of(start, bound);
    function said_on(value2) {
      said(root, value2);
    }
    each(values6, said_on);
    let last = list_last(values6);
    let ended = add(last, 1);
    let check = js_code_binary_spaced_nb(ended, less, bound);
    let r = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(root, [
      "",
      check,
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
