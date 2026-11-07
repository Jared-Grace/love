import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_learn_js_lesson_for_change } from "./app_learn_js_lesson_for_change.mjs";
import { js_code_start_above_lines } from "./js_code_start_above_lines.mjs";
import { js_code_for_condition_update_lines } from "./js_code_for_condition_update_lines.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_loop_log_generic } from "./app_code_lesson_loop_log_generic.mjs";
export function app_learn_js_lesson_for_start() {
  arguments_assert(arguments, 0);
  ("the third for: for (let n = 1; n < 9; n += 3) { console.log(n); } writes out 1, 4 and 7, the same as the second for, with let n = 1 moved in");
  ("The one new fact is that the start can stand before the first semicolon, and that it runs once. The code before and after, then one line saying they do the same, in the shape the human asked for on the second for.");
  ("Not said here: a let inside the for means n can be used only inside the for. That is a true difference, so these two programs do the same thing only because nothing below the loop uses n. It gets a lesson of its own later.");
  ("The writing is a first draft by Claude 2026-11-04.");
  function above(root, context, example, walk) {
    "For with a change remembered, then the same program with its start moved in";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_for_change,
      ["we can write this:"],
    );
    let lines_one = js_code_start_above_lines(
      js_code_for_condition_update_lines,
    );
    example(box_one, lines_one);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "We can move the ",
      "let n = 1",
      " into the ",
      "for (...)",
      " like this:",
    ]);
    example(box_two, js_code_for_start_condition_update_lines);
    app_learn_js_div_cycle_code(box_two, [
      "These two ",
      "for",
      " loops do the same thing",
    ]);
    walk(box_two);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "For with a start",
    "for (let n = 1; ...) { ... }",
  );
  let lesson = app_code_lesson_loop_log_generic({
    name_id,
    above,
    program_write: js_code_for_start_condition_update_lines,
  });
  return lesson;
}
