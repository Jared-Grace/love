import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_start_above_lines } from "./js_code_start_above_lines.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_lesson_update_log_generic } from "./app_code_lesson_update_log_generic.mjs";
export function app_code_lesson_while_update_log_generic(options) {
  arguments_assert(arguments, 1);
  ("a while that writes out n and then changes it by one: let n = 1; while (n < 4) { console.log(n); n++; } writes out 1, 2 and 3, shown under the lesson on changing by one");
  let remembered = property_get(options, "remembered");
  let remembered_parts = property_get(options, "remembered_parts");
  let intro_parts = property_get(options, "intro_parts");
  let program_write = js_code_start_above_lines(js_code_while_lines_multiple);
  function above(root, context, example, walk) {
    "the lesson on changing by one remembered, then a while doing it, writing out each run";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      remembered,
      remembered_parts,
    );
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, intro_parts);
    example(box_two, program_write);
    walk(box_two);
  }
  let lesson = app_code_lesson_update_log_generic({
    ...options,
    above,
    program_write,
  });
  return lesson;
}
