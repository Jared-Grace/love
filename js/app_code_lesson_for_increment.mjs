import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_increment } from "./app_code_lesson_while_increment.mjs";
import { js_code_start_above_lines } from "./js_code_start_above_lines.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_update_log_generic } from "./app_code_lesson_update_log_generic.mjs";
import { app_code_lesson_increment_log_options } from "./app_code_lesson_increment_log_options.mjs";
export function app_code_lesson_for_increment() {
  arguments_assert(arguments, 0);
  ("n++ in a for: for (let n = 1; n < 4; n++) { console.log(n); } writes out 1, 2 and 3, the same as While adding one");
  ("The one new fact is that a for can change n by n++, the way a while already did. It comes straight after For with a start, since it asks nothing the while lesson did not, at the human's asking 2026-11-04: combinations of for with what is already known come right after the for itself.");
  ("The code before and after, then one line saying they do the same, in the shape the human asked for on the second for.");
  ("The writing is a first draft by Claude 2026-11-05.");
  function above(root, context, example, walk) {
    "While adding one remembered, then the same program written as a for";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_increment,
      ["we can write this:"],
    );
    let program_lines = js_code_start_above_lines(js_code_while_lines_multiple);
    example(box_one, program_lines);
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, ["We can write it with a ", "for", ":"]);
    example(box_two, js_code_for_start_condition_update_lines);
    app_code_div_cycle_code(box_two, ["These two loops do the same thing"]);
    walk(box_two);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "For adding one",
    "for (...; n++) { ... }",
  );
  let lesson = app_code_lesson_update_log_generic({
    ...app_code_lesson_increment_log_options(),
    name_id,
    above,
    program_write: js_code_for_start_condition_update_lines,
  });
  return lesson;
}
