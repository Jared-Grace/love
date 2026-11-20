import { equal } from "./equal.mjs";
import { modulo } from "./modulo.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_sum } from "./list_sum.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { json_from } from "./json_from.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_total } from "./app_learn_js_lesson_array_for_total.mjs";
import { app_learn_js_lesson_statement_name_digit_split } from "./app_learn_js_lesson_statement_name_digit_split.mjs";
import { app_learn_js_lesson_array_for_luhn_nine } from "./app_learn_js_lesson_array_for_luhn_nine.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_for_luhn_total() {
  arguments_assert(arguments, 0);
  ("whether the items added up end in 0: let a = [5, 2, 3, 5]; let total = 0; for (let i = 0; i < a.length; i++) { total += a[i]; } console.log(total % 10 === 0); writes out false, since the total is 15");
  ("2026-11-20, at the human's asking (2y): the fourth lesson on the way to the Luhn check. Adding up an array (Add them up) and % 10 giving the last digit (Last digit) were each taught on their own; the one new fact is that total % 10 === 0 asks whether the total ends in 0. The next lesson puts all of the Luhn check together.");
  ("A set is six questions, arrays of four, five and six digits twice each, the digits drawn from 0 to 9 with none twice, shuffled. Three totals end in 0, so the answer is true; three are even but do not end in 0, so the answer is false and % 2 === 0 would say true. An odd total is never drawn, because there % 2 and % 10 both say false.");
  ("Reading forwards, the wrong answers are the other of true and false and the total itself. Reading backwards, the wrong programs are % 2 in place of % 10, writing out total, and !== in place of ===; only those whose output differs are offered, so % 2 drops out where the total ends in 0. !== was added beyond the two the human approved, so a total ending in 0 still offers two wrong programs.");
  ("The writing is a first draft by Claude 2026-11-20.");
  let sizes = [4, 4, 5, 5, 6, 6];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let example_items = [5, 2, 3, 5];
  function program_with(items, log) {
    "let a = [items]; let total = 0; the adding loop; then log written out";
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement("a", array);
    let start = js_code_let_statement("total", "0");
    let loop = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < a.length",
      ["total += a[i];", "i++;"],
    );
    let log_line = "console.log(" + log + ");";
    let lines = list_concat_multiple([[head, start], loop, [log_line]]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items) {
    let code = program_with(items, "total % 10 === 0");
    return code;
  }
  function ends_zero(items) {
    let total = list_sum(items);
    let left = modulo(total, 10);
    let r = equal(left, 0);
    return r;
  }
  function even_not_zero(items) {
    let total = list_sum(items);
    let left2 = modulo(total, 2);
    let r = equal(left2, 0) && not_equal(modulo(total, 10), 0);
    return r;
  }
  function batch_get() {
    "six programs, arrays of four, five and six digits twice each, three totals ending in 0 and three even ones that do not, shuffled";
    let codes = [];
    for (let k = 0; less_than(k, list_size(sizes)); k++) {
      let count = list_get(sizes, k);
      let left3 = modulo(k, 2);
      let want = equal(left3, 0) ? ends_zero : even_not_zero;
      let items = list_shuffle_take(numbers, count);
      while (not(want(items))) {
        items = list_shuffle_take(numbers, count);
      }
      let code = program_of(items);
      codes.push(code);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function items_of(code) {
    "the array's items, read off the first line";
    let list = text_split_newline(code);
    let head = list_first(list);
    let v = head.lastIndexOf(";");
    let after = head.slice(head.indexOf("=") + 1, v);
    let items2 = json_from(after);
    return items2;
  }
  function wrong_programs(items) {
    let v1 = program_with(items, "total % 2 === 0");
    let v2 = program_with(items, "total");
    let v3 = program_with(items, "total % 10 !== 0");
    let programs = [v1, v2, v3];
    return programs;
  }
  function decoys(question, answer) {
    "the other of true and false, and the total itself; each once, never the answer";
    let items3 = items_of(question);
    let programs = wrong_programs(items3);
    let candidates = list_map(programs, eval_console_log_lines);
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "% 2 in place of % 10, writing out total, and !== in place of ===, where each writes out something else";
    let items4 = items_of(answer);
    let programs = wrong_programs(items4);
    let out_answer = eval_console_log_lines(answer);
    function differs(code2) {
      let out = eval_console_log_lines(code2);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function above(root, context) {
    "adding up, the last digit and the Luhn loop remembered, then whether the total ends in 0";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_total,
      ["", "total += a[i];", " in a loop adds up all the items"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_statement_name_digit_split,
      ["", "n % 10", " is the last digit of ", "n"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_three,
      context,
      app_learn_js_lesson_array_for_luhn_nine,
      [
        "doubling every second digit and taking away ",
        "9",
        " turned ",
        "[7, 2, 6, 5]",
        " into ",
        "[5, 2, 3, 5]",
      ],
    );
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "",
      "total % 10 === 0",
      " asks whether the last digit of ",
      "total",
      " is ",
      "0",
      ", so whether ",
      "total",
      " ends in ",
      "0",
      ":",
    ]);
    let code6 = program_of(example_items);
    let lines2 = text_split_newline(code6);
    let value = eval_console_log_lines(code6);
    app_learn_js_code_lines_writes_out(box_four, lines2, value);
    app_learn_js_div_cycle_code(box_four, [
      "",
      "total",
      " is ",
      "5 + 2 + 3 + 5",
      ", which is ",
      "15",
      ". It ends in ",
      "5",
      ", not ",
      "0",
      ", so it writes out ",
      "false",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "A total like ",
      "20",
      " ends in ",
      "0",
      ", so ",
      "20 % 10 === 0",
      " is ",
      "true",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Does the total end in 0?",
    "total % 10 === 0",
  );
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
