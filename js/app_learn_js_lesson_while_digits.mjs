import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_learn_js_while_digits_program } from "./app_learn_js_while_digits_program.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_three_digit_numbers } from "./app_learn_js_three_digit_numbers.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_statement_name_digit_split } from "./app_learn_js_lesson_statement_name_digit_split.mjs";
import { app_learn_js_lesson_statement_name_digit_rest } from "./app_learn_js_lesson_statement_name_digit_rest.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_while_digits() {
  arguments_assert(arguments, 0);
  ("the digits of a number one by one: let n = 472; while (n > 0) { console.log(n % 10); n = Math.floor(n / 10); } writes out 2, 7 and 4, one under the other, the last digit first");
  ("2026-11-21, approved by the human: the fifth of seven number lessons before objects. n % 10 and Math.floor(n / 10) were each taught on their own in Last digit and The rest; the one new fact is that n = Math.floor(n / 10); writes the rest back into n itself, so the while takes off one digit each run until nothing is left and n is 0. The human asked that this be said plainly.");
  ("A set is six questions, numbers of three digits, each digit from 1 to 9 with none twice in one number, so the loop runs 3 times and no digit is 0.");
  ("Reading forwards, the wrong answers are the digits front to back, the order they are read rather than the order they come off; writing out n rather than n % 10; stopping at n > 9, one digit early; and the two lines the other way round, which drops the last digit and ends on 0. Reading backwards, the wrong programs are the last three.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let example_n = 472;
  let log_digit = js_code_console_log_statement("n % 10");
  let rest = "n = Math.floor(n / 10);";
  function program_with(n, condition, statements) {
    "let n = n; while (condition) { statements }";
    let code = app_learn_js_while_digits_program(
      n,
      [],
      condition,
      statements,
      [],
    );
    return code;
  }
  function program_of(n2) {
    let code2 = program_with(n2, "n > 0", [log_digit, rest]);
    return code2;
  }
  function wrong_programs_of(n3) {
    let log_n = js_code_console_log_statement("n");
    let v = program_with(n3, "n > 0", [log_n, rest]);
    let v2 = program_with(n3, "n > 9", [log_digit, rest]);
    let v3 = program_with(n3, "n > 0", [rest, log_digit]);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(n4) {
    "the digits front to back";
    let text = json_to(n4);
    let letters = text.split("");
    let front = list_join_newline(letters);
    let r = [front];
    return r;
  }
  function inputs_get() {
    let inputs = app_learn_js_three_digit_numbers(6);
    return inputs;
  }
  function above(root, context) {
    "Last digit and The rest remembered, then both in a while, the rest written back into n";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_statement_name_digit_split,
      ["", "n % 10", " is the last digit of ", "n"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_statement_name_digit_rest,
      [
        "",
        "Math.floor(n / 10)",
        " is the number in front of the last digit: for ",
        "123",
        " it is ",
        "12",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "n = Math.floor(n / 10);",
      " writes that number back into ",
      "n",
      " itself. The ",
      "n",
      " on the right is the old number; after the line, ",
      "n",
      " holds it without its last digit. ",
      "472",
      " becomes ",
      "47",
      ".",
    ]);
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "So a ",
      "while",
      " can write out the last digit, take it off, and go again until ",
      "n",
      " is ",
      "0",
      ":",
    ]);
    let code3 = program_of(example_n);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_four, lines, value);
    app_learn_js_div_cycle_code(box_four, [
      "",
      "n",
      " goes ",
      "472",
      ", ",
      "47",
      ", ",
      "4",
      ", ",
      "0",
      ". The digits come off from the back, so ",
      "2",
      " is written out first",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Digits one by one",
    "n = Math.floor(n / 10);",
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
