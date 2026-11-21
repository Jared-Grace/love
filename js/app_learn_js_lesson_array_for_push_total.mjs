import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_numbers_arrays_six } from "./app_learn_js_numbers_arrays_six.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_total_each } from "./app_learn_js_lesson_array_for_total_each.mjs";
import { app_learn_js_lesson_array_empty_for_push } from "./app_learn_js_lesson_array_empty_for_push.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_push_total() {
  arguments_assert(arguments, 0);
  ("each total so far pushed into a new array: let a = [3, 1, 4]; let b = []; let total = 0; for (let i = 0; i < a.length; i++) { total += a[i]; b.push(total); } console.log(b); writes out [3, 4, 8]");
  ("2026-11-21, asked for by the human: the second of three running total lessons. The lesson before wrote each total out; this one keeps them, by pushing each into an empty array, as filling an empty array with push was taught earlier.");
  ("A set is six arrays of 3 or 4 numbers from 1 to 9.");
  ("Reading forwards, the wrong answers are what the wrong programs write out: b.push(a[i]) (a copy of a), b.push(total) before total += a[i] (each total one run late, starting at 0), and b.push(total) after the loop (only the whole total). Reading backwards, the wrong programs are those three, where each writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let example_input = [3, 1, 4];
  function program_with(items, body, after) {
    "let a = items; let b = []; let total = 0; for (let i = 0; i < a.length; i++) { body } after console.log(b);";
    let head = [
      "let a = " + js_code_array(items) + ";",
      "let b = [];",
      "let total = 0;",
      "for (let i = 0; i < a.length; i++) {",
    ];
    let b = list_concat(after, ["console.log(b);"]);
    let tail = list_concat(["}"], b);
    let a = list_concat(head, body);
    let lines = list_concat(a, tail);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(
      items2,
      ["  total += a[i];", "  b.push(total);"],
      [],
    );
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, ["  total += a[i];", "  b.push(a[i]);"], []);
    let v2 = program_with(items3, ["  b.push(total);", "  total += a[i];"], []);
    let v3 = program_with(items3, ["  total += a[i];"], ["b.push(total);"]);
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
    "the total so far and filling an empty array remembered, then each total pushed";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_total_each,
      [
        "",
        "console.log(total);",
        " inside the loop wrote out the total so far, every run",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_empty_for_push,
      [
        "",
        "let b = [];",
        " starts an empty array, and ",
        "b.push(x);",
        " inside a loop fills it",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Instead of logging out each total, here we push each total into array ",
      "b",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "After the loop runs, ",
      "b",
      " holds each total:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Keep each total",
    "b.push(total);",
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
