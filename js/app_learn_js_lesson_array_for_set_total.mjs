import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_numbers_arrays_six } from "./app_learn_js_numbers_arrays_six.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_push_total } from "./app_learn_js_lesson_array_for_push_total.mjs";
import { app_learn_js_lesson_array_for_double } from "./app_learn_js_lesson_array_for_double.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_set_total() {
  arguments_assert(arguments, 0);
  ("each item replaced by the total so far: let a = [3, 1, 4]; let total = 0; for (let i = 0; i < a.length; i++) { total += a[i]; a[i] = total; } console.log(a); writes out [3, 4, 8]");
  ("2026-11-21, asked for by the human: the third of three running total lessons. The same totals as the lesson before, but written back into a itself with a[i] = total; in place of pushed into a new array, so no second array is needed.");
  ("A set is six arrays of 3 or 4 numbers from 1 to 9.");
  ("Reading forwards, the wrong answers are what the wrong programs write out: a[i] = total; before total += a[i]; (every item becomes 0), total = a[i]; in place of total += a[i]; (a is unchanged), and a[i] += total; (each item gets the total added on top). Reading backwards, the wrong programs are those three, where each writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let example_input = [3, 1, 4];
  function program_with(items, body) {
    "let a = items; let total = 0; for (let i = 0; i < a.length; i++) { body } console.log(a);";
    let head = [
      "let a = " + js_code_array(items) + ";",
      "let total = 0;",
      "for (let i = 0; i < a.length; i++) {",
    ];
    let lines = list_concat(list_concat(head, body), ["}", "console.log(a);"]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, ["  total += a[i];", "  a[i] = total;"]);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, ["  a[i] = total;", "  total += a[i];"]);
    let v2 = program_with(items3, ["  total = a[i];", "  a[i] = total;"]);
    let v3 = program_with(items3, ["  total += a[i];", "  a[i] += total;"]);
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
    "pushing each total and setting items in a loop remembered, then each item set to the total";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_push_total,
      ["", "b.push(total);", " kept each total so far in a new array ", "b"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_double,
      ["", "a[i] = a[i] * 2;", " inside a loop changed every item of ", "a"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Here there is no second array. ",
      "a[i] = total;",
      " puts the total so far back into ",
      "a",
      ", in place of the item that was just added:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Totals in place",
    "a[i] = total;",
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
