import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_for_two_names } from "./app_learn_js_lesson_for_two_names.mjs";
import { app_learn_js_lesson_array_for_swap } from "./app_learn_js_lesson_array_for_swap.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_for_fibonacci() {
  arguments_assert(arguments, 0);
  ("each number the two before it added: let a = 0; let b = 1; for (let i = 0; i < 5; i++) { let next = a + b; a = b; b = next; console.log(b); } writes out 1, 2, 3, 5 and 8, one under the other");
  ("2026-11-21, approved by the human: the fourth of seven number lessons before objects, the Fibonacci numbers. Two names made above a for and changed inside it were taught in For changing a name it never asks about, and keeping a value in a name before it is overwritten in Swapping every item; the one new fact is that next holds a + b while a moves up to b, so b can then take the sum.");
  ("A set is six questions, each starting a and b at 0 and 1, 1 and 1, or 1 and 2, and running 3, 4 or 5 times, none the same, shuffled; so no loop runs more than 5 times and no number written out is above 21.");
  ("Reading forwards, the wrong answers are what the wrong programs write out: a = b; then b = a + b; without next, which adds b to itself since a already became b; writing out a, one number behind; and one run fewer. Reading backwards, the wrong programs are those three, where each writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let example_input = [0, 1, 5];
  function program_with(input, runs, body, log) {
    "let a; let b; for (let i = 0; i < runs; i++) { body; console.log(log); }";
    let a = list_get(input, 0);
    let b = list_get(input, 1);
    let right = json_to(a);
    let head_a = js_code_let_statement("a", right);
    let right2 = json_to(b);
    let head_b = js_code_let_statement("b", right2);
    let log_line = js_code_console_log_statement(log);
    let statements = list_concat_multiple([body, [log_line], ["i++;"]]);
    let loop = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < " + runs,
      statements,
    );
    let lines = list_concat([head_a, head_b], loop);
    let code = list_join_newline(lines);
    return code;
  }
  let body_right = ["let next = a + b;", "a = b;", "b = next;"];
  let body_no_next = ["a = b;", "b = a + b;"];
  function program_of(input2) {
    let runs2 = list_get(input2, 2);
    let code2 = program_with(input2, runs2, body_right, "b");
    return code2;
  }
  function wrong_programs_of(input3) {
    let runs3 = list_get(input3, 2);
    let v = program_with(input3, runs3, body_no_next, "b");
    let v2 = program_with(input3, runs3, body_right, "a");
    let difference = subtract(runs3, 1);
    let v3 = program_with(input3, difference, body_right, "b");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    "six of the nine pairs of a start and a count of runs, shuffled";
    let starts = [
      [0, 1],
      [1, 1],
      [1, 2],
    ];
    let all = [];
    for (let s of starts) {
      for (let runs4 = 3; less_than_equal(runs4, 5); runs4++) {
        let concated = list_concat(s, [runs4]);
        all.push(concated);
      }
    }
    let inputs = list_shuffle_take(all, 6);
    return inputs;
  }
  function above(root, context) {
    "two names changed in a for and a value kept before it is overwritten remembered, then each number the two before it added";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_for_two_names,
      [
        "a name made above a ",
        "for",
        " is changed inside it each run and keeps what the last run left in it",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_swap,
      ["", "temp", " kept a value safe before the line that overwrote it"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "In ",
      "0, 1, 1, 2, 3, 5, 8",
      " each number is the two before it added. ",
      "next",
      " holds ",
      "a + b",
      ", then ",
      "a",
      " moves up to ",
      "b",
      ", and ",
      "b",
      " takes ",
      "next",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "Without ",
      "next",
      ", ",
      "a = b;",
      " comes first and ",
      "b = a + b;",
      " then adds ",
      "b",
      " to itself, so the numbers only double",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Fibonacci numbers",
    "let next = a + b;",
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
