import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_for } from "./app_code_lesson_for.mjs";
import { js_code_start_above_lines } from "./js_code_start_above_lines.mjs";
import { js_code_for_condition_lines } from "./js_code_for_condition_lines.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { js_code_for_condition_update_lines } from "./js_code_for_condition_update_lines.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_loop_log_generic } from "./app_code_lesson_loop_log_generic.mjs";
export function app_learn_js_lesson_for_change() {
  arguments_assert(arguments, 0);
  ("the second for: let n = 1; for (; n < 9; n += 3) { console.log(n); } writes out 1, 4 and 7, the same as the first for, with n += 3 moved up");
  ("The one new fact is that the change can stand after the second semicolon, and that it still runs after the lines in the { ... }. The console.log stays inside so one thing moves, at the human's asking 2026-11-04; not picked: an empty { }, which would change two things at once. What may stand before the first semicolon is left to the next lesson.");
  ("The writing is a first draft by Claude 2026-11-04.");
  function above(root, context, example, walk) {
    "For remembered, then the same program with its change moved up";
    let box_one = app_learn_js_container_light_blue(root);
    ("2026-11-04, the human's words: the code before and after, then one line saying they do the same, since code is easier to understand than English about code. Not picked: my first draft, which explained the move in English and said when the moved code runs; the step by step below shows that");
    app_code_remember_from_lesson(box_one, context, app_code_lesson_for, [
      "we can write this:",
    ]);
    let lines_one = js_code_start_above_lines(js_code_for_condition_lines);
    example(box_one, lines_one);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "We can move the ",
      "n += 3",
      " into the ",
      "for (...)",
      " like this:",
    ]);
    let lines_two = js_code_start_above_lines(
      js_code_for_condition_update_lines,
    );
    example(box_two, lines_two);
    app_learn_js_div_cycle_code(box_two, [
      "These two ",
      "for",
      " loops do the same thing",
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
    program_write: js_code_start_above_lines(
      js_code_for_condition_update_lines,
    ),
  });
  return lesson;
}
