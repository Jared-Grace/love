import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_for } from "./app_code_lesson_for.mjs";
import { js_code_for_condition_lines } from "./js_code_for_condition_lines.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { js_code_for_condition_update_lines } from "./js_code_for_condition_update_lines.mjs";
import { app_code_braces_dots } from "./app_code_braces_dots.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_loop_log_generic } from "./app_code_lesson_loop_log_generic.mjs";
export function app_code_lesson_for_change() {
  arguments_assert(arguments, 0);
  ("the second for: let n = 1; for (; n < 9; n += 3) { console.log(n); } writes out 1, 4 and 7, the same as the first for, with n += 3 moved up");
  ("The one new fact is that the change can stand after the second semicolon, and that it still runs after the lines in the { ... }. The console.log stays inside so one thing moves, at the human's asking 2026-11-04; not picked: an empty { }, which would change two things at once. What may stand before the first semicolon is left to the next lesson.");
  ("The writing is a first draft by Claude 2026-11-04.");
  function above(root, context, example, walk) {
    "For remembered, then the same program with its change moved up";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_for, [
      "a ",
      "for",
      " with its condition in between two ",
      ";",
      " does what a ",
      "while",
      " does:",
    ]);
    example(box_one, js_code_for_condition_lines);
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "The ",
      "n += 3",
      " can move up, after the second ",
      ";",
      ", and the ",
      "for",
      " does the same:",
    ]);
    example(box_two, js_code_for_condition_update_lines);
    let r = app_code_braces_dots();
    app_code_div_cycle_code(box_two, [
      "The code after the second ",
      ";",
      " still runs after the ",
      r,
      ", each time, and then the condition is checked again:",
    ]);
    walk(box_two);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "For with a change",
    "for (; n < 9; n += 3) { ... }",
  );
  let lesson = app_code_lesson_loop_log_generic({
    name_id,
    above,
    loop_lines: js_code_for_condition_update_lines,
  });
  return lesson;
}
