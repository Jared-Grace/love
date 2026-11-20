import { multiply } from "./multiply.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { modulo } from "./modulo.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_luhn_program } from "./app_learn_js_luhn_program.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { subtract } from "./subtract.mjs";
import { list_size } from "./list_size.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_concat } from "./list_concat.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_get } from "./list_get.mjs";
import { less_than } from "./less_than.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_first } from "./list_first.mjs";
import { json_from } from "./json_from.mjs";
import { list_map } from "./list_map.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_luhn_nine } from "./app_learn_js_lesson_array_for_luhn_nine.mjs";
import { app_learn_js_lesson_array_for_luhn_total } from "./app_learn_js_lesson_array_for_luhn_total.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_for_luhn_whole() {
  arguments_assert(arguments, 0);
  ("the whole Luhn check: let a = [1, 8, 7, 5]; the loop doubling every second digit from the right and taking 9 from a double above 9; let total = 0; the loop adding up; console.log(total % 10 === 0); writes out true, since a becomes [2, 8, 5, 5] and the total is 20");
  ("2026-11-20, at the human's asking (2y): the fifth and last lesson of the Luhn check, the sum that tells a mistyped card number from a real one. Double, then take away 9 and Does the total end in 0? were each taught on their own; the one new fact is that run one after the other they are the whole check, so the program says whether a number passes.");
  ("A set is six questions, arrays of four, five and six digits twice each, the digits drawn from 1 to 9 with none twice, shuffled. Three pass the check and three do not. Every one doubles a digit of 5 or more, so taking away 9 matters: leaving it out moves the total by 9 for each such digit, and one, two or three nines never end in 0, so a number that passes stops passing. A number that does not pass has an even total, so % 2 says true where % 10 says false.");
  ("Reading forwards, the wrong answer is the other of true and false. Reading backwards, the wrong programs are leaving out the take-away-9 if, the first loop starting at a.length - 1, and % 2 in place of % 10; only those whose output differs are offered.");
  ("The writing is a first draft by Claude 2026-11-20.");
  let sizes = [4, 4, 5, 5, 6, 6];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let example_items = [1, 8, 7, 5];
  let double_line = "a[i] = a[i] * 2;";
  let body_right = [double_line, "if (a[i] > 9) {", "  a[i] = a[i] - 9;", "}"];
  let body_no_if = [double_line];
  function program_with(items, start_back, body, check) {
    "the Luhn loop from the shared writer without its last line, then the adding loop and check written out";
    let code = app_learn_js_luhn_program(items, start_back, 2, body);
    let lines = text_split_newline(code);
    let left = list_size(lines);
    let difference = subtract(left, 1);
    let kept = lines.slice(0, difference);
    let start = js_code_let_statement("total", "0");
    let loop = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < a.length",
      ["total += a[i];", "i++;"],
    );
    let log_line = "console.log(" + check + ");";
    let all = list_concat_multiple([kept, [start], loop, [log_line]]);
    let joined = list_join_newline(all);
    return joined;
  }
  function program_of(items) {
    let code = program_with(items, 2, body_right, "total % 10 === 0");
    return code;
  }
  function luhn_total(items) {
    "the total the check adds up, worked out here to choose the drawn numbers";
    let a = list_concat(items, []);
    for (let i = subtract(list_size(a), 2); greater_than_equal(i, 0); i -= 2) {
      let left2 = list_get(a, i);
      let d = multiply(left2, 2);
      a[i] = greater_than(d, 9) ? subtract(d, 9) : d;
    }
    let total = 0;
    for (let j = 0; less_than(j, list_size(a)); j++) {
      total += list_get(a, j);
    }
    return total;
  }
  function doubled_has_big(items) {
    "true when some digit the loop doubles is 5 or more";
    for (
      let i = subtract(list_size(items), 2);
      greater_than_equal(i, 0);
      i -= 2
    ) {
      let a2 = list_get(items, i);
      if (greater_than_equal(a2, 5)) {
        return true;
      }
    }
    return false;
  }
  function passes(items) {
    let r = doubled_has_big(items) && equal(modulo(luhn_total(items), 10), 0);
    return r;
  }
  function fails_even(items) {
    let total = luhn_total(items);
    let r =
      doubled_has_big(items) &&
      equal(modulo(total, 2), 0) &&
      not_equal(modulo(total, 10), 0);
    return r;
  }
  function batch_get() {
    "six programs, arrays of four, five and six digits twice each, three that pass the check and three that do not, shuffled";
    let codes = [];
    for (let k = 0; less_than(k, list_size(sizes)); k++) {
      let count = list_get(sizes, k);
      let left3 = modulo(k, 2);
      let want = equal(left3, 0) ? passes : fails_even;
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
    let v1 = program_with(items, 2, body_no_if, "total % 10 === 0");
    let v2 = program_with(items, 1, body_right, "total % 10 === 0");
    let v3 = program_with(items, 2, body_right, "total % 2 === 0");
    let programs = [v1, v2, v3];
    return programs;
  }
  function decoys(question, answer) {
    "the other of true and false";
    let items3 = items_of(question);
    let programs = wrong_programs(items3);
    let candidates = list_map(programs, eval_console_log_lines);
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "no take-away-9 if, the first loop starting at a.length - 1, and % 2 in place of % 10, where each writes out something else";
    let items4 = items_of(answer);
    let programs = wrong_programs(items4);
    let out_answer = eval_console_log_lines(answer);
    function differs(code2) {
      let out = eval_console_log_lines(code2);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept2 = list_filter(programs, differs);
    return kept2;
  }
  function above(root, context) {
    "the doubling loop and the total check remembered, then the two run one after the other";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_luhn_nine,
      [
        "the first loop doubles every second digit from the right and takes away ",
        "9",
        " from a double above ",
        "9",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_luhn_total,
      ["", "total % 10 === 0", " asks whether the total ends in ", "0"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Run them one after the other, and the program says whether a number passes the check that catches a mistyped card number:",
    ]);
    let code6 = program_of(example_items);
    let lines2 = text_split_newline(code6);
    let value = eval_console_log_lines(code6);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "7",
      " doubles to ",
      "14",
      ", so it becomes ",
      "5",
      ", and ",
      "1",
      " doubles to ",
      "2",
      ", so ",
      "a",
      " is ",
      "[2, 8, 5, 5]",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "total",
      " is ",
      "2 + 8 + 5 + 5",
      ", which is ",
      "20",
      ". It ends in ",
      "0",
      ", so it writes out ",
      "true",
      ": the number passes",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The whole check",
    "a[i] * 2; total += a[i];",
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
