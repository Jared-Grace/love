import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_if_else_lines_multiple } from "./js_code_if_else_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_if_halve_or_triple } from "./app_learn_js_lesson_if_halve_or_triple.mjs";
import { app_learn_js_lesson_while_count } from "./app_learn_js_lesson_while_count.mjs";
import { app_learn_js_lesson_while_not_equal } from "./app_learn_js_lesson_while_not_equal.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_while_collatz() {
  arguments_assert(arguments, 0);
  ("the steps to reach 1: let n = 5; let count = 0; while (n !== 1) { if (n % 2 === 0) { n /= 2; } else { n *= 3; n += 1; } count += 1; } console.log(count); writes out 5, since n goes 5, 16, 8, 4, 2, 1");
  ("2026-11-21, approved by the human: the last of seven number lessons before objects. Halve or triple was taught as one step, counting the runs in Counting the runs, and !== in a while in While not equal; the one new fact is that the step inside a while that stops at 1 counts how many steps n takes to reach 1.");
  ("A set is five questions, n from 2, 4, 8, 16 and 5, shuffled, so it takes at most 5 steps, kept that small at the human's asking so the program can be followed in one's head. 5 is the only one that takes the times-3 side.");
  ("Reading forwards, the wrong answers are what the wrong programs write out: count starting at 1, one too many; stopping at n > 2, one too few; and writing out n, which is always 1. Reading backwards, the wrong programs are those three, where each writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let example_n = 5;
  let step = js_code_if_else_lines_multiple(
    "n % 2 === 0",
    ["n /= 2;"],
    ["n *= 3;", "n += 1;"],
  );
  let counted = list_concat(step, ["count += 1;"]);
  function program_with(n, start, condition, log) {
    "let n = n; let count = start; while (condition) { the halve-or-triple step; count += 1; } console.log(log);";
    let right = json_to(n);
    let head = js_code_let_statement("n", right);
    let count_line = js_code_let_statement("count", start);
    let loop = js_code_while_lines_multiple(condition, counted);
    let log_line = js_code_console_log_statement(log);
    let lines = list_concat_multiple([[head, count_line], loop, [log_line]]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(n2) {
    let code2 = program_with(n2, "0", "n !== 1", "count");
    return code2;
  }
  function wrong_programs_of(n3) {
    let v = program_with(n3, "1", "n !== 1", "count");
    let v2 = program_with(n3, "0", "n > 2", "count");
    let v3 = program_with(n3, "0", "n !== 1", "n");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(n4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    "2, 4, 8, 16 and 5, shuffled";
    let inputs = list_shuffle_take([2, 4, 8, 16, 5], 5);
    return inputs;
  }
  function above(root, context) {
    "Halve or triple, Counting the runs and !== in a while remembered, then counting the steps to 1";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_if_halve_or_triple,
      [
        "an even ",
        "n",
        " is halved, and an odd ",
        "n",
        " is times ",
        "3",
        " plus ",
        "1",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_while_count,
      [
        "",
        "count += 1;",
        " inside a ",
        "while",
        " counts how many times it ran",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_three,
      context,
      app_learn_js_lesson_while_not_equal,
      ["", "while (n !== 1)", " keeps going until ", "n", " is exactly ", "1"],
    );
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "Put the step inside the ",
      "while",
      ", and count the steps until ",
      "n",
      " reaches ",
      "1",
      ":",
    ]);
    let code3 = program_of(example_n);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_four, lines2, value);
    app_learn_js_div_cycle_code(box_four, [
      "",
      "n",
      " goes ",
      "5",
      ", ",
      "16",
      ", ",
      "8",
      ", ",
      "4",
      ", ",
      "2",
      ", ",
      "1",
      ": five steps, so it writes out ",
      "5",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Steps to reach 1",
    "while (n !== 1) { ... }",
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
