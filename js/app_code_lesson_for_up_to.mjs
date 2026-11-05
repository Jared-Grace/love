import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_up_to_log_options } from "./app_code_lesson_up_to_log_options.mjs";
import { app_code_lesson_increment_log_options } from "./app_code_lesson_increment_log_options.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_for_increment } from "./app_code_lesson_for_increment.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_lesson_update_log_generic } from "./app_code_lesson_update_log_generic.mjs";
export function app_code_lesson_for_up_to() {
  arguments_assert(arguments, 0);
  ("<= in a for: for (let n = 1; n <= 3; n++) { console.log(n); } writes out 1, 2 and 3, the same as for (let n = 1; n < 4; n++) { console.log(n); } from For adding one");
  ("The one new fact is that < leaves out the number it is compared with and <= includes it, seen in a for.");
  ("Chosen by the human 2026-11-05, as one of four for lessons after For with a running total. While lessons writing out n after the loop were left out, since n made in a for is gone by then.");
  ("Starts from For adding one and not from the while in Up to and including, picked by the human 2026-11-05: the two for programs differ only in the comparison, so that lesson is the nearer one. The rejected readings were removing this lesson, and leaving it pointing back at the while.");
  ("The writing is a first draft by Claude 2026-11-05.");
  let name_id = app_code_lesson_statement_title_name_id(
    "For up to and including",
    "for (...; n <= 3; n++) { ... }",
  );
  let options = app_code_lesson_up_to_log_options();
  let name = "n";
  function above(root, context, example, walk) {
    "the program of For adding one remembered, then the same lines written with <=, then every run walked through, then what the two comparisons do with the number they are compared with";
    let earlier = app_code_lesson_increment_log_options();
    let start2 = js_code_let_statement(name, earlier.start);
    let condition = js_code_binary_spaced_nb(
      name,
      earlier.comparison,
      earlier.bound,
    );
    let statement = js_code_console_log_statement(name);
    let code = js_code_update_statement(name, earlier.change);
    let earlier_lines = js_code_for_start_condition_update_lines(
      start2,
      condition,
      [statement, code],
    );
    let earlier_joined = list_join_newline(earlier_lines);
    let earlier_written = eval_console_log_lines(earlier_joined);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_for_increment,
      ["we can write this:"],
    );
    app_code_code_lines_writes_out(box_one, earlier_lines, earlier_written);
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "We can write it with ",
      options.comparison,
      ":",
    ]);
    example(box_two, js_code_for_start_condition_update_lines);
    app_code_div_cycle_code(box_two, ["These two loops do the same thing"]);
    walk(box_two);
    app_code_div_cycle_code(box_two, [
      "",
      earlier.comparison,
      " leaves out the number it is compared with, and ",
      options.comparison,
      " includes it",
    ]);
  }
  let lesson = app_code_lesson_update_log_generic({
    ...options,
    name_id,
    above,
    program_write: js_code_for_start_condition_update_lines,
  });
  return lesson;
}
