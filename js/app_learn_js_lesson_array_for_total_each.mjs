import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_numbers_arrays_six } from "./app_learn_js_numbers_arrays_six.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_total } from "./app_learn_js_lesson_array_for_total.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_total_each() {
  arguments_assert(arguments, 0);
  ("the total so far written out every run: let a = [3, 1, 4]; let total = 0; for (let i = 0; i < a.length; i++) { total += a[i]; console.log(total); } writes out 3, 4 and 8, one under the other");
  ("2026-11-21, approved by the human: the first of three running total lessons, right after the total written out once. Writing out comes first because there is no new array to keep track of; pushing into a new array and setting each item follow.");
  ("A set is six arrays of 3 or 4 numbers from 1 to 9.");
  ("Reading forwards, the wrong answers are what the wrong programs write out: console.log after the loop (only the whole total), console.log before total += a[i] (each total one run late, starting at 0), and total = a[i] (each item, not the total). Reading backwards, the wrong programs are those three, where each writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let example_input = [3, 1, 4];
  function program_with(items, body, after) {
    "let a = items; let total = 0; for (let i = 0; i < a.length; i++) { body } after";
    let head = [
      "let a = " + js_code_array(items) + ";",
      "let total = 0;",
      "for (let i = 0; i < a.length; i++) {",
    ];
    let a = list_concat(head, body);
    let b = list_concat(["}"], after);
    let lines = list_concat(a, b);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(
      items2,
      ["  total += a[i];", "  console.log(total);"],
      [],
    );
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, ["  total += a[i];"], ["console.log(total);"]);
    let v2 = program_with(
      items3,
      ["  console.log(total);", "  total += a[i];"],
      [],
    );
    let v3 = program_with(
      items3,
      ["  total = a[i];", "  console.log(total);"],
      [],
    );
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    let inputs = app_learn_js_numbers_arrays_six();
    return inputs;
  }
  function above(root, context) {
    "the total remembered, then the total written out every run";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_total,
      [
        "",
        "total += a[i];",
        " adds each item to ",
        "total",
        ", and ",
        "console.log(total);",
        " after the loop writes out the whole total once",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Here ",
      "console.log(total);",
      " is inside the loop, right after ",
      "total += a[i];",
      ". So every run writes out the total so far:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The total so far",
    "console.log(total);",
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
