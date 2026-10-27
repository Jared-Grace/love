import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { json_from } from "./json_from.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { json_to } from "./json_to.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_total } from "./app_code_lesson_while_total.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_while_total_squares() {
  arguments_assert(arguments, 0);
  ("a running total of squares: let total = 0; let n = 1; while (n < 4) { total += n * n; n += 1; } console.log(total); writes out 14, which is 1 + 4 + 9");
  ("The one new fact is that what is added does not have to be the name that counts: n counts 1, 2, 3 while total grows by n * n, which is 1, 4, 9.");
  ("Asked for by the human 2026-10-27, as its own lesson after Counting by twos and threes: put in that lesson it would be a second new fact, and then a wrong answer could not say which of the two was missed.");
  ("Each screen has four programs, one from each of four counts of runs - none, one, two and three - since no program in a while lesson runs more than three times.");
  ("Reading forwards, the wrong answers are the total of n rather than of n * n, the total one run fewer, and n where it ends, the name not written out; each once, never the answer, never below zero.");
  ("Reading backwards, the wrong program adds n rather than n * n; a program that never runs writes out 0 either way, so for one of those the wrong program is instead compared against one more, so it runs once.");
  ("The writing is a first draft by Claude 2026-10-27.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let times = js_operator_asterisk_symbol();
  let name = "n";
  let total_name = "total";
  let squared = js_code_binary_spaced_nb(name, times, name);
  function program_lines(start, bound, added_code) {
    "let total = 0; let n = start; while (n < bound) { total += added_code; n += 1; } console.log(total);";
    let total_let = js_code_let_statement(total_name, 0);
    let n_let = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let added = js_code_assign_operator_statement(total_name, plus, added_code);
    let counted = js_code_assign_operator_statement(name, plus, 1);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      added,
      counted,
    ]);
    let statement = js_code_console_log_statement(total_name);
    let lines = list_concat_multiple([
      [total_let, n_let],
      while_lines,
      [statement],
    ]);
    return lines;
  }
  function program_get(start, bound, added_code) {
    let lines2 = program_lines(start, bound, added_code);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function batch_get() {
    "four programs, each from a different group, so each runs a different number of times";
    let groups = [
      [
        [4, 3],
        [5, 2],
      ],
      [
        [2, 3],
        [3, 4],
      ],
      [
        [1, 3],
        [2, 4],
      ],
      [
        [1, 4],
        [2, 5],
      ],
    ];
    let picked = list_shuffle_take(groups, 4);
    let pairs = list_map(picked, list_random_item);
    function program_of(pair) {
      let start = list_get(pair, 0);
      let bound = list_get(pair, 1);
      let code = program_get(start, bound, squared);
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
    "the total of n rather than n * n, the total one run fewer, and n where it ends; each once, never the answer, never below zero";
    let numbers = text_integers(question);
    let start2 = list_get(numbers, 1);
    let bound2 = list_get(numbers, 2);
    let total = json_from(answer);
    let ended = start2;
    let plain = 0;
    let n = start2;
    while (less_than(n, bound2)) {
      plain = add(plain, n);
      n = add(n, 1);
    }
    ended = n;
    let candidates = [plain, ended];
    if (less_than(start2, bound2)) {
      let right = subtract(ended, 1);
      let right2 = multiply(right, right);
      let fewer = subtract(total, right2);
      candidates = [plain, fewer, ended];
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
    "the same program adding n rather than n * n; or, for a program that never runs, the same program compared against one more, so it runs once";
    let numbers2 = text_integers(answer);
    let start3 = list_get(numbers2, 1);
    let bound3 = list_get(numbers2, 2);
    let code4 = program_get(start3, bound3, name);
    if (less_than_equal(bound3, start3)) {
      let sum = add(start3, 1);
      code4 = program_get(start3, sum, squared);
    }
    let found2 = [code4];
    return found2;
  }
  function said(root, value, bound, total_after) {
    "value < bound is true, so total becomes total_after, adding value * value, and n becomes value + 1";
    let condition2 = js_code_binary_spaced_nb(value, less, bound);
    let product = js_code_binary_spaced_nb(value, times, value);
    let after = json_to(total_after);
    let object = add(value, 1);
    let n_after = json_to(object);
    html_div_cycle_code(root, [
      "",
      condition2,
      " is ",
      "true",
      ", so ",
      total_name,
      " adds ",
      product,
      " and becomes ",
      after,
      ", and ",
      name,
      " becomes ",
      n_after,
    ]);
  }
  function above(root, context) {
    "the running total remembered, then a total adding n * n, 1 + 4 + 9";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_total,
      ["", "total += n;", " adds each ", name, " to ", total_name, "."],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "What is added does not have to be ",
      name,
      " itself. Here ",
      name,
      " counts 1, 2, 3, but ",
      total_name,
      " adds ",
      squared,
      " each time:",
    ]);
    let lines3 = program_lines(1, 4, squared);
    app_code_code_lines_writes_out(box_two, lines3, "14");
    said(box_two, 1, 4, 1);
    said(box_two, 2, 4, 5);
    said(box_two, 3, 4, 14);
    let last = js_code_binary_spaced_nb(4, less, 4);
    html_div_cycle_code(box_two, [
      "",
      last,
      " is ",
      "false",
      ", because 4 is not less than itself, so the ",
      "{ ... }",
      " is skipped, and the code continues after it",
    ]);
    html_div_cycle_code(box_two, [
      "So ",
      total_name,
      " is 1 + 4 + 9, which is 14",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "A running total of squares",
    "total += n * n;",
  );
  let lesson = app_code_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
