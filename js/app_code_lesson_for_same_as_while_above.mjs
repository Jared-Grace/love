import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { js_code_start_above_lines } from "./js_code_start_above_lines.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
export function app_code_lesson_for_same_as_while_above(lesson_while) {
  arguments_assert(arguments, 1);
  ("What sits above a for lesson that says the same as a while lesson: the while lesson remembered with its program, then the program written as a for, then one line saying they do the same, then every run walked through. In the shape the human asked for on the second for.");
  function above(root, context, example, walk) {
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, lesson_while, [
      "we can write this:",
    ]);
    let program_lines = js_code_start_above_lines(js_code_while_lines_multiple);
    example(box_one, program_lines);
    let box_two = app_learn_js_container_light_blue(root);
    app_code_div_cycle_code(box_two, ["We can write it with a ", "for", ":"]);
    example(box_two, js_code_for_start_condition_update_lines);
    app_code_div_cycle_code(box_two, ["These two loops do the same thing"]);
    walk(box_two);
  }
  return above;
}
