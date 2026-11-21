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
import { app_learn_js_lesson_for_count_if } from "./app_learn_js_lesson_for_count_if.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_for_prime() {
  arguments_assert(arguments, 0);
  ("a prime number: let n = 7; let count = 0; for (let i = 1; i <= n; i++) { if (n % i === 0) { count += 1; } } console.log(count === 2); writes out true, since 7 divides only by 1 and 7");
  ("2026-11-21, approved by the human: the third of seven number lessons before objects. The loop is Divisors with its if counting, as Counting only some runs did; the one new fact is that count === 2 asks whether n has exactly two divisors, 1 and itself, which is what a prime number is.");
  ("A set is six questions, three primes drawn from 2, 3, 5 and 7 and three others from 4, 6, 8 and 9, shuffled, so the loop runs at most 9 times.");
  ("Reading forwards, the wrong answers are the other of true and false and the count itself. Reading backwards, the wrong programs are < in place of <=, which leaves n out, so a prime counts only 1; writing out count; and !== in place of ===; only those whose output differs are offered.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let example_n = 7;
  let code4 = js_code_let_statement("count", "0");
  let before = [code4];
  function program_with(n, condition, log) {
    "let n = n; let count = 0; for (let i = 1; condition; i++) { if (n % i === 0) { count += 1; } } console.log(log);";
    let statement = js_code_console_log_statement(log);
    let after = [statement];
    let code = app_learn_js_for_divisors_program(
      n,
      before,
      condition,
      "n % i === 0",
      "count += 1;",
      after,
    );
    return code;
  }
  function program_of(n2) {
    let code2 = program_with(n2, "i <= n", "count === 2");
    return code2;
  }
  function wrong_programs_of(n3) {
    let v = program_with(n3, "i < n", "count === 2");
    let v2 = program_with(n3, "i <= n", "count");
    let v3 = program_with(n3, "i <= n", "count !== 2");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(n4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    "three primes and three others up to 9, shuffled";
    let primes = list_shuffle_take([2, 3, 5, 7], 3);
    let others = list_shuffle_take([4, 6, 8, 9], 3);
    let inputs = list_concat(primes, others);
    list_shuffle(inputs);
    return inputs;
  }
  function above(root, context) {
    "Divisors and counting only some runs remembered, then counting the divisors of 7";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_for_divisors,
      ["", "n % i === 0", " keeps each ", "i", " that ", "n", " divides by"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_for_count_if,
      [
        "",
        "count += 1;",
        " inside an ",
        "if",
        " counts only the runs the ",
        "if",
        " lets through",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "A prime number has exactly two divisors: ",
      "1",
      " and itself. So count the divisors, and ",
      "count === 2",
      " asks whether ",
      "n",
      " is prime:",
    ]);
    let code3 = program_of(example_n);
    let lines = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "7",
      " divides only by ",
      "1",
      " and ",
      "7",
      ", so ",
      "count",
      " is ",
      "2",
      " and it writes out ",
      "true",
      ". ",
      "6",
      " divides by ",
      "1, 2, 3, 6",
      ", so ",
      "count",
      " is ",
      "4",
      " and it writes out ",
      "false",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Prime numbers",
    "count === 2",
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
