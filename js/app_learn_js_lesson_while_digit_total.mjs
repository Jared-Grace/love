import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_learn_js_while_digits_program } from "./app_learn_js_while_digits_program.mjs";
import { app_learn_js_three_digit_numbers } from "./app_learn_js_three_digit_numbers.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_while_total } from "./app_learn_js_lesson_while_total.mjs";
import { app_learn_js_lesson_while_digits } from "./app_learn_js_lesson_while_digits.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_while_digit_total() {
  arguments_assert(arguments, 0);
  ("adding up the digits of a number: let n = 472; let total = 0; while (n > 0) { let last_digit = n % 10; total += last_digit; n = Math.floor(n / 10); } console.log(total); writes out 13, which is 2 + 7 + 4");
  ("2026-11-21, approved by the human: the sixth of seven number lessons before objects. The loop is Digits one by one, and the total is A running total's; the one new fact is that the total adds each digit as it comes off. It names the digit last_digit, as Last digit did, so += is used with a plain name as every lesson before it does.");
  ("A set is six questions, numbers of three digits, each digit from 1 to 9 with none twice in one number, so the loop runs 3 times.");
  ("Reading forwards, the wrong answers are what the wrong programs write out: total += n, which adds the whole number each run; stopping at n > 9, which leaves out the first digit; and taking the digit off before reading it, which drops the last digit. Reading backwards, the wrong programs are those three, where each writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let example_n = 472;
  let code4 = js_code_let_statement("total", "0");
  let before = [code4];
  let statement = js_code_console_log_statement("total");
  let after = [statement];
  let digit = js_code_let_statement("last_digit", "n % 10");
  let add_digit = "total += last_digit;";
  let rest = "n = Math.floor(n / 10);";
  function program_with(n, condition, statements) {
    "let n = n; let total = 0; while (condition) { statements } console.log(total);";
    let code = app_learn_js_while_digits_program(
      n,
      before,
      condition,
      statements,
      after,
    );
    return code;
  }
  function program_of(n2) {
    let code2 = program_with(n2, "n > 0", [digit, add_digit, rest]);
    return code2;
  }
  function wrong_programs_of(n3) {
    let v = program_with(n3, "n > 0", [digit, "total += n;", rest]);
    let v2 = program_with(n3, "n > 9", [digit, add_digit, rest]);
    let v3 = program_with(n3, "n > 0", [rest, digit, add_digit]);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(n4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    let inputs = app_learn_js_three_digit_numbers(6);
    return inputs;
  }
  function above(root, context) {
    "A running total and Digits one by one remembered, then adding each digit as it comes off";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_while_total,
      [
        "",
        "total += n;",
        " inside a ",
        "while",
        " adds to ",
        "total",
        " each run",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_while_digits,
      [
        "",
        "n % 10",
        " is the last digit, and ",
        "n = Math.floor(n / 10);",
        " takes it off, until ",
        "n",
        " is ",
        "0",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Add each digit to ",
      "total",
      " before taking it off:",
    ]);
    let code3 = program_of(example_n);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_code(box_three, [
      "The digits come off as ",
      "2",
      ", ",
      "7",
      ", ",
      "4",
      ", so ",
      "total",
      " is ",
      "2 + 7 + 4",
      ", which is ",
      "13",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Adding up the digits",
    "total += last_digit;",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above,
    inputs_get,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
