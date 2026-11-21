import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_for_if_even } from "./app_learn_js_lesson_for_if_even.mjs";
import { app_learn_js_lesson_for_up_to } from "./app_learn_js_lesson_for_up_to.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_for_divisors() {
  arguments_assert(arguments, 0);
  ("the divisors of a number: let n = 6; for (let i = 1; i <= n; i++) { if (n % i === 0) { console.log(i); } } writes out 1, 2, 3 and 6, one under the other");
  ("2026-11-21, approved by the human: the first of seven number lessons before objects, so loops are practised on their own before functions. The one new fact is that the if asks n % i, with the number counted by the for on the right of %, so it keeps each i that n divides by with nothing left over.");
  ("A set is six questions, n drawn from 2 to 8 with none twice, shuffled, so each loop runs at most 8 times.");
  ("Reading forwards, the wrong answers are what the wrong programs write out: < in place of <=, which leaves out n itself; !== in place of ===, the numbers that do not divide; and i % n in place of n % i, which keeps only n. Reading backwards, the wrong programs are those three, where each writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let example_n = 6;
  function program_with(n, condition, asked) {
    "let n = n; for (let i = 1; condition; i++) { if (asked) { console.log(i); } }";
    let right = json_to(n);
    let head = js_code_let_statement("n", right);
    let statement = js_code_console_log_statement("i");
    let inside = js_code_if_lines(asked, statement);
    let statements = list_concat(inside, ["i++;"]);
    let loop = js_code_for_start_condition_update_lines(
      "let i = 1;",
      condition,
      statements,
    );
    let lines = list_concat([head], loop);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(n2) {
    let code2 = program_with(n2, "i <= n", "n % i === 0");
    return code2;
  }
  function wrong_programs_of(n3) {
    let v = program_with(n3, "i < n", "n % i === 0");
    let v2 = program_with(n3, "i <= n", "n % i !== 0");
    let v3 = program_with(n3, "i <= n", "i % n === 0");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(n4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    "six numbers from 2 to 8, none twice, shuffled";
    let inputs = list_shuffle_take([2, 3, 4, 5, 6, 7, 8], 6);
    return inputs;
  }
  function above(root, context) {
    "the remainder in an if inside a for and <= remembered, then the divisors of 6";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_for_if_even,
      [
        "",
        "n % 2 === 0",
        " inside a ",
        "for",
        " kept the numbers that divide by ",
        "2",
        " with nothing left over",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_for_up_to,
      [
        "",
        "i <= n",
        " keeps going when ",
        "i",
        " is ",
        "n",
        ", so ",
        "n",
        " itself is counted too",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Put the counted number on the right of ",
      "%",
      ": ",
      "n % i === 0",
      " asks whether ",
      "n",
      " divides by ",
      "i",
      " with nothing left over. Those ",
      "i",
      " are the divisors of ",
      "n",
      ":",
    ]);
    let code3 = program_of(example_n);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "6 % 4",
      " is ",
      "2",
      " and ",
      "6 % 5",
      " is ",
      "1",
      ", so ",
      "4",
      " and ",
      "5",
      " are not written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Divisors",
    "if (n % i === 0) { ... }",
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
