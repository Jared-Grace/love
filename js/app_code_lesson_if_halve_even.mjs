import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { js_code_remainder_two_is } from "./js_code_remainder_two_is.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_if_codes_halves } from "./app_code_if_codes_halves.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_first } from "./list_first.mjs";
import { json_to } from "./json_to.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_code_if_condition_set } from "./app_code_if_condition_set.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_statement_name_divide_assign } from "./app_code_lesson_statement_name_divide_assign.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_halve_even() {
  arguments_assert(arguments, 0);
  ("halving inside the even check: let n = 8; if (n % 2 === 0) { n /= 2; } console.log(n); writes out 4, and with n starting at 7 writes out 7");
  ("The one new fact is that the even check from If even can guard a change, as A change in an if guarded one with <. It is the first half of the step the human asked for 2026-10-08: if a number is even, divide it by two, otherwise multiply it by 3 and add 1.");
  ("Reading forwards, the wrong answers offered are n halved when it is odd, or n kept when it is even - the if read the wrong way - and n doubled, which a learner gives who reads /= as *=.");
  ("Reading backwards, the wrong program is the same program checked with === 1, which writes out the other answer. Not picked: another starting number, since the number alone, even or odd, would give the answer away without reading the if.");
  ("The writing is a first draft by Claude 2026-10-08.");
  let name = "n";
  let slash = text_slash_forward();
  let even_check = js_code_remainder_two_is(name, "0");
  function program_lines(start) {
    "let n = start; if (n % 2 === 0) { n /= 2; } console.log(n);";
    let setup = js_code_let_statement(name, start);
    let change = js_code_assign_operator_statement(name, slash, 2);
    let if_lines = js_code_if_lines(even_check, change);
    let statement = js_code_console_log_statement(name);
    let whole = list_concat_multiple([[setup], if_lines, [statement]]);
    return whole;
  }
  function program_get(start2) {
    let lines = program_lines(start2);
    let joined = list_join_newline(lines);
    return joined;
  }
  function batch_get() {
    "two even and two odd numbers, in halves each holding one of each";
    let evens = list_shuffle_take([4, 6, 8, 10, 12, 14, 16, 18], 2);
    let odds = list_shuffle_take([3, 5, 7, 9, 11, 13, 15, 17], 2);
    let starts = list_concat(evens, odds);
    let codes = list_map(starts, program_get);
    let ordered = app_code_if_codes_halves(codes);
    return ordered;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the other way the if could go, and n doubled";
    let numbers = text_integers(question);
    let start3 = list_first(numbers);
    let half = divide(start3, 2);
    let other = half;
    let start_text = json_to(start3);
    let ran = not_equal(answer, start_text);
    if (ran) {
      other = start3;
    }
    let doubled = multiply(start3, 2);
    let found = list_map([other, doubled], json_to);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program checked with === 1, so it writes out the other answer";
    let odd_check = js_code_remainder_two_is(name, "1");
    let turned = app_code_if_condition_set(answer, odd_check);
    let found2 = [turned];
    return found2;
  }
  function above(root, context) {
    "/= remembered, then halving inside the even check, with n even and then odd";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_statement_name_divide_assign,
      ["", "/=", " divides what a name holds:"],
    );
    let setup2 = js_code_let_statement(name, 8);
    let change2 = js_code_assign_operator_statement(name, slash, 2);
    let statement2 = js_code_console_log_statement(name);
    app_code_code_lines_writes_out(box_one, [setup2, change2, statement2], "4");
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "We can put ",
      change2,
      " in an ",
      "if",
      " that checks for even:",
    ]);
    let even_lines = program_lines(8);
    app_code_code_lines_writes_out(box_two, even_lines, "4");
    let eight_check = js_code_remainder_two_is(8, "0");
    html_div_cycle_code(box_two, [
      "",
      eight_check,
      " is ",
      "true",
      ", so ",
      name,
      " becomes ",
      "4",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "But suppose ",
      name,
      " starts at ",
      "7",
      ":",
    ]);
    let odd_lines = program_lines(7);
    app_code_code_lines_writes_out(box_three, odd_lines, "7");
    let seven_check = js_code_remainder_two_is(7, "0");
    html_div_cycle_code(box_three, [
      "",
      seven_check,
      " is ",
      "false",
      ", so ",
      name,
      " stays ",
      "7",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Halve if even",
    "if (n % 2 === 0) { n /= 2; }",
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
