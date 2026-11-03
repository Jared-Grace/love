import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_get } from "./list_get.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
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
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_functions_console_log_arithmetic } from "./app_code_lesson_functions_console_log_arithmetic.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_braces_dots } from "./app_code_braces_dots.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_while_log_double() {
  arguments_assert(arguments, 0);
  ("a while that writes out double n: let n = 1; while (n < 3) { console.log(n * 2); n++; } writes out 2 and 4");
  ("The one new fact is that a console.log inside a while can do math on n, and that the math does not change n: only n++ does.");
  ("Recommended by Claude 2026-11-03 and chosen by the human, to sit straight after Up to and including, so n++ is already known.");
  ("Each screen has one program from each of three counts of runs - one, two and three. None starts at 0, whose double is itself, and none runs once from 2, whose double is also 2 more; so each wrong program below writes out something other than the answer.");
  ("Reading forwards, the wrong answers are n itself, n + 2, the double of the next n as though n changed first, and one run more; each once and never the answer.");
  ("Reading backwards, the wrong answers are the program writing out n, the program writing out n + 2, and the program compared against a number one further on, or one nearer when it already runs as often as a while lesson allows.");
  ("The writing is a first draft by Claude 2026-11-03.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let times = js_operator_asterisk_symbol();
  let name = "n";
  function expression_of(operator) {
    "n times 2, or n plus 2";
    let expression = js_code_binary_spaced_nb(name, operator, 2);
    return expression;
  }
  function program_lines(start, bound, written) {
    "let n = start; while (n < bound) { console.log(written); n++; }";
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let logged = js_code_console_log_statement(written);
    let changed = js_code_update_statement(name, plus);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      logged,
      changed,
    ]);
    let lines = list_concat([code], while_lines);
    return lines;
  }
  function program_text(start, bound, written) {
    let lines2 = program_lines(start, bound, written);
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
  function values_of(start, bound) {
    "every value n holds when the while asks and the answer is true";
    let values = [];
    let value = start;
    while (less_than(value, bound)) {
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
  let batch = app_code_batch_question_answer_fns(
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
  function said(root, value, bound) {
    "value < bound is true, so it writes out value * 2, which is its double, and n becomes the next value";
    let condition2 = js_code_binary_spaced_nb(value, less, bound);
    let worked = js_code_binary_spaced_nb(value, times, 2);
    let product3 = multiply(value, 2);
    let doubled3 = json_to(product3);
    let object = add(value, 1);
    let after = json_to(object);
    app_code_div_cycle_code(root, [
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
  function above(root, context) {
    "console.log with math remembered, then the same inside a while";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_functions_console_log_arithmetic,
      ["", "console.log", " does the math first, then writes out the answer."],
    );
    let box_two = app_code_container_light_blue(root);
    let doubled4 = expression_of(times);
    app_code_div_cycle_code(box_two, [
      "",
      doubled4,
      " is double ",
      name,
      ". It does not change ",
      name,
      "; only ",
      "n++",
      " does:",
    ]);
    let lines3 = program_lines(1, 3, doubled4);
    let written = lines_of([2, 4]);
    app_code_code_lines_writes_out(box_two, lines3, written);
    said(box_two, 1, 3);
    said(box_two, 2, 3);
    let check = js_code_binary_spaced_nb(3, less, 3);
    let r = app_code_braces_dots();
    app_code_div_cycle_code(box_two, [
      "",
      check,
      " is ",
      "false",
      ", so the ",
      r,
      " is skipped, and the code continues after it",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Writing out double",
    "console.log(n * 2);",
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
