import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_learn_js_for_divisors_program } from "./app_learn_js_for_divisors_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_for_divisors } from "./app_learn_js_lesson_for_divisors.mjs";
import { app_learn_js_lesson_for_total_if } from "./app_learn_js_lesson_for_total_if.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_learn_js_definition_term } from "./app_learn_js_definition_term.mjs";
import { app_learn_js_cycle_code } from "./app_learn_js_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_for_perfect() {
  arguments_assert(arguments, 0);
  ("a perfect number: let n = 6; let total = 0; for (let i = 1; i < n; i++) { if (n % i === 0) { total += i; } } console.log(total === n); writes out true, since 1 + 2 + 3 is 6");
  ("2026-11-21, approved by the human: the second of seven number lessons before objects. The loop is Divisors with < in place of <=, so n itself is left out, and its if adds to a total as A total of only some did; the one new fact is comparing that total with n, which says whether n is a perfect number.");
  ("A set is six questions: 6, the only perfect number up to 8, and five others drawn from 2 to 8, shuffled, so the loop runs at most 7 times. Most answers are false; the total, offered as a wrong answer, is what a learner works out on the way.");
  ("Reading forwards, the wrong answers are the other of true and false and the total itself. Reading backwards, the wrong programs are <= in place of <, which adds n too, so the total is never n; writing out total; and !== in place of ===; only those whose output differs are offered.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let example_n = 6;
  let code4 = js_code_let_statement("total", "0");
  let before = [code4];
  function program_with(n, condition, log) {
    "let n = n; let total = 0; for (let i = 1; condition; i++) { if (n % i === 0) { total += i; } } console.log(log);";
    let statement = js_code_console_log_statement(log);
    let after = [statement];
    let code = app_learn_js_for_divisors_program(
      n,
      before,
      condition,
      "n % i === 0",
      "total += i;",
      after,
    );
    return code;
  }
  function program_of(n2) {
    let code2 = program_with(n2, "i < n", "total === n");
    return code2;
  }
  function wrong_programs_of(n3) {
    let v = program_with(n3, "i <= n", "total === n");
    let v2 = program_with(n3, "i < n", "total");
    let v3 = program_with(n3, "i < n", "total !== n");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(n4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    "6 and five others from 2 to 8, shuffled";
    let others = list_shuffle_take([2, 3, 4, 5, 7, 8], 5);
    let inputs = list_concat([example_n], others);
    list_shuffle(inputs);
    return inputs;
  }
  function above(root, context) {
    "Divisors and a total of only some remembered, then the divisors below 6 adding up to 6";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_for_divisors,
      [
        "",
        "n % i === 0",
        " keeps each ",
        "i",
        " that ",
        "n",
        " divides by. The divisors of ",
        "6",
        " are ",
        "1, 2, 3, 6",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_for_total_if,
      [
        "",
        "total += n;",
        " inside an ",
        "if",
        " adds only the numbers the ",
        "if",
        " lets through",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let perfect_line = html_div(box_three);
    html_span_text(perfect_line, "A number is ");
    app_learn_js_definition_term(perfect_line, "perfect");
    app_learn_js_cycle_code(perfect_line, [
      " when its divisors below it add up to it. ",
      "i < n",
      " leaves ",
      "n",
      " itself out, and ",
      "total === n",
      " asks whether they add up to ",
      "n",
      ":",
    ]);
    let code3 = program_of(example_n);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "total",
      " is ",
      "1 + 2 + 3",
      ", which is ",
      "6",
      ", so it writes out ",
      "true",
      ". For ",
      "8",
      ", ",
      "total",
      " is ",
      "1 + 2 + 4",
      ", which is ",
      "7",
      ", so ",
      "false",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Perfect numbers",
    "total === n",
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
