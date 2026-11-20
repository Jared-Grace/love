import { arguments_assert } from "./arguments_assert.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_learn_js_luhn_program } from "./app_learn_js_luhn_program.mjs";
import { subtract } from "./subtract.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_get } from "./list_get.mjs";
import { and } from "./and.mjs";
import { less_than } from "./less_than.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { not } from "./not.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { json_from } from "./json_from.mjs";
import { list_map } from "./list_map.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_luhn_double } from "./app_learn_js_lesson_array_for_luhn_double.mjs";
import { app_learn_js_lesson_if_take_away_nine } from "./app_learn_js_lesson_if_take_away_nine.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_for_luhn_nine() {
  arguments_assert(arguments, 0);
  ("doubling every second item from the right and taking 9 from a double above 9: let a = [7, 2, 6, 5]; for (let i = a.length - 2; i >= 0; i -= 2) { a[i] = a[i] * 2; if (a[i] > 9) { a[i] = a[i] - 9; } } console.log(a); writes out [5, 2, 3, 5]");
  ("2026-11-20, at the human's asking (1y): the third lesson on the way to the Luhn check. The loop is the one from Double every second digit from the right, and the if is the one from Take away 9 above 9, taught on one number; the one new fact is the if inside the loop, after the doubling, so each doubled digit of two digits becomes the sum of its digits. Later, not built yet: the total checked with % 10.");
  ("A set is six questions, arrays of four, five and six items twice each, the digits drawn from 1 to 9 with none twice, shuffled. Among the digits the loop doubles, at least one is 5 or more, so the if runs, and at least one is below 5, so it does not.");
  ("Reading forwards, the wrong answers are the items doubled with no 9 taken away, 10 taken away instead of 9, and the other half doubled and taken from. Reading backwards, the wrong programs are the if before the doubling (the if then never runs, since no digit is above 9), taking away 10, and no if at all. The first and the last write out the same; each is still a different wrong program, and each writes out something other than the answer, since some doubled digit is 5 or more.");
  ("The writing is a first draft by Claude 2026-11-20.");
  let sizes = [4, 4, 5, 5, 6, 6];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let example_items = [7, 2, 6, 5];
  let double_line = "a[i] = a[i] * 2;";
  function if_lines(taken) {
    "if (a[i] > 9) { a[i] = a[i] - taken; } as the lines it sits on inside the loop";
    let lines = ["if (a[i] > 9) {", "  a[i] = a[i] - " + taken + ";", "}"];
    return lines;
  }
  let b = if_lines(9);
  let body_right = list_concat([double_line], b);
  let a = if_lines(9);
  let body_if_first = list_concat(a, [double_line]);
  let b2 = if_lines(10);
  let body_ten = list_concat([double_line], b2);
  let body_no_if = [double_line];
  function program_of(items) {
    let code = app_learn_js_luhn_program(items, 2, 2, body_right);
    return code;
  }
  function doubled_both(items) {
    "true when, among the items the loop doubles, one is 5 or more and one is below 5";
    let big = false;
    let small = false;
    for (
      let i = subtract(list_size(items), 2);
      greater_than_equal(i, 0);
      i -= 2
    ) {
      let item = list_get(items, i);
      if (greater_than_equal(item, 5)) {
        big = true;
      } else {
        small = true;
      }
    }
    let both = and(big, small);
    return both;
  }
  function batch_get() {
    "six programs, arrays of four, five and six digits twice each, shuffled, each doubling a digit of 5 or more and one below 5";
    let codes = [];
    for (let k = 0; less_than(k, list_size(sizes)); k++) {
      let count = list_get(sizes, k);
      let items = list_shuffle_take(numbers, count);
      while (not(doubled_both(items))) {
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
  function decoys(question, answer) {
    "doubled with no 9 taken away, 10 taken away, and the other half; each once, never the answer";
    let items3 = items_of(question);
    let code3 = app_learn_js_luhn_program(items3, 2, 2, body_no_if);
    let code4 = app_learn_js_luhn_program(items3, 2, 2, body_ten);
    let code5 = app_learn_js_luhn_program(items3, 1, 2, body_right);
    let candidates = list_map([code3, code4, code5], eval_console_log_lines);
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the if before the doubling, taking away 10, and no if";
    let items4 = items_of(answer);
    let v1 = app_learn_js_luhn_program(items4, 2, 2, body_if_first);
    let v2 = app_learn_js_luhn_program(items4, 2, 2, body_ten);
    let v3 = app_learn_js_luhn_program(items4, 2, 2, body_no_if);
    let programs = [v1, v2, v3];
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
    "doubling every second digit and taking away 9 remembered, then the two together in one loop";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_luhn_double,
      [
        "the loop from ",
        "i = a.length - 2",
        " going down by ",
        "2",
        " doubles every second digit from the right",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_if_take_away_nine,
      [
        "",
        "if (d > 9) { d = d - 9; }",
        " takes ",
        "9",
        " away from a number above ",
        "9",
        ", which adds its two digits",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Put the ",
      "if",
      " in the loop, after the doubling:",
    ]);
    let code6 = program_of(example_items);
    let lines2 = text_split_newline(code6);
    let value = eval_console_log_lines(code6);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "i",
      " is ",
      "2",
      ": ",
      "6",
      " doubles to ",
      "12",
      ", which is more than ",
      "9",
      ", so it becomes ",
      "3",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "Then ",
      "i",
      " is ",
      "0",
      ": ",
      "7",
      " doubles to ",
      "14",
      ", so it becomes ",
      "5",
      ", while ",
      "2",
      " and ",
      "5",
      " stay as they were",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Double, then take away 9",
    "a[i] * 2; if (a[i] > 9)",
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
