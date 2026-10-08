import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { modulo } from "./modulo.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_remainder_two_is } from "./js_code_remainder_two_is.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
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
import { equal } from "./equal.mjs";
import { json_to } from "./json_to.mjs";
import { app_code_if_condition_set } from "./app_code_if_condition_set.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_halve_even } from "./app_code_lesson_if_halve_even.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_code_logged } from "./app_code_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_if_halve_or_triple() {
  arguments_assert(arguments, 0);
  ("the step the human asked for 2026-10-08: let n = 7; if (n % 2 === 0) { n /= 2; } else { n *= 3; n += 1; } console.log(n); writes out 22, and with n starting at 8 writes out 4");
  ("The one new fact is that the even check from Halve if even and the two lines of Two changes in an if fit either side of an else. Nothing else in it is new.");
  ("Reading forwards, the wrong answers offered are the other side's change - which a learner gives who reads the check the wrong way - and, for an even number, n kept, and for an odd number, n times 3 with the 1 left off.");
  ("Reading backwards, the wrong program is the same program checked with === 1, which writes out the other side's answer. Not picked: another starting number, since the number alone, even or odd, would give the answer away without reading the if.");
  ("The last box says every number tried so far reaches 1. Not picked: that every number does, since nobody has proven it - it is the Collatz conjecture, checked by computers far past any number a learner will try.");
  ("The writing is a first draft by Claude 2026-10-08.");
  let name = "n";
  let slash = text_slash_forward();
  let times = js_operator_asterisk_symbol();
  let plus = js_operator_plus_symbol();
  let even_check = js_code_remainder_two_is(name, "0");
  let halve = js_code_assign_operator_statement(name, slash, 2);
  let triple = js_code_assign_operator_statement(name, times, 3);
  let add_one = js_code_assign_operator_statement(name, plus, 1);
  function program_lines(start) {
    "let n = start; if (n % 2 === 0) { n /= 2; } else { n *= 3; n += 1; } console.log(n);";
    let setup = js_code_let_statement(name, start);
    let if_lines = js_code_if_else_lines_multiple(
      even_check,
      [halve],
      [triple, add_one],
    );
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
    let odds = list_shuffle_take([3, 5, 7, 9, 11, 13, 15], 2);
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
    "the other side's change, and n kept when even or n times 3 without the 1 when odd";
    let numbers = text_integers(question);
    let start3 = list_first(numbers);
    let half = divide(start3, 2);
    let tripled = multiply(start3, 3);
    let stepped = tripled + 1;
    let left = modulo(start3, 2);
    let even = equal(left, 0);
    let found_numbers = [half, tripled];
    if (even) {
      found_numbers = [stepped, start3];
    }
    let found = list_map(found_numbers, json_to);
    return found;
  }
  function backwards_decoys(question, answer) {
    "the same program checked with === 1, so it writes out the other side's answer";
    let odd_check = js_code_remainder_two_is(name, "1");
    let turned = app_code_if_condition_set(answer, odd_check);
    let found2 = [turned];
    return found2;
  }
  function above(root, context) {
    "halving if even remembered, then the else for odd numbers, with n odd and then even, then where the step leads";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_if_halve_even,
      ["An ", "if", " can halve an even number"],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "An ",
      "else",
      " can give odd numbers their own change:",
    ]);
    let odd_lines = program_lines(7);
    app_code_code_lines_writes_out(box_two, odd_lines, "22");
    let seven_check = js_code_remainder_two_is(7, "0");
    let else_dots = js_code_else_dots();
    html_div_cycle_code(box_two, [
      "",
      seven_check,
      " is ",
      "false",
      ", so the lines inside ",
      else_dots,
      " run",
    ]);
    let seven_times = js_code_binary_spaced_nb(7, times, 3);
    let plus_one = js_code_binary_spaced_nb(21, plus, 1);
    html_div_cycle_code(box_two, [
      "",
      seven_times,
      " is ",
      "21",
      ", then ",
      plus_one,
      " is ",
      "22",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "But suppose ",
      name,
      " starts at ",
      "8",
      ":",
    ]);
    let even_lines = program_lines(8);
    app_code_code_lines_writes_out(box_three, even_lines, "4");
    let eight_check = js_code_remainder_two_is(8, "0");
    let halve = js_code_assign_operator_statement(name, text_slash_forward(), 2);
    html_div_cycle_code(box_three, [
      "",
      eight_check,
      " is ",
      "true",
      ", so ",
      halve,
      " runs, and ",
      name,
      " is halved",
    ]);
    let box_four = app_code_container_light_blue(root);
    html_div_cycle_code(box_four, [
      "Take this step again and again, and every number tried so far reaches ",
      "1",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Halve, or times 3 plus 1",
    "else { n *= 3; n += 1; }",
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
