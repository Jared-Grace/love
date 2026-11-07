import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_log } from "./app_code_lesson_while_log.mjs";
import { js_code_start_above_lines } from "./js_code_start_above_lines.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { js_code_for_condition_lines } from "./js_code_for_condition_lines.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_loop_log_generic } from "./app_code_lesson_loop_log_generic.mjs";
export function app_learn_js_lesson_for() {
  arguments_assert(arguments, 0);
  ("the first for: let n = 1; for (; n < 9;) { console.log(n); n += 3; } writes out 1, 4 and 7, the same as while (n < 9) { console.log(n); n += 3; }");
  ("The one new fact is that for, holding only its condition between two semicolons, does what while does: it asks, runs its lines while what it asks is true, and stops once it is false. What may stand before the first semicolon and after the second is left to the lessons after this one.");
  ("Asked for by the human 2026-11-01 as the next lesson, the first for lesson the roadmap names; the first box writes a while lesson's program and this one side by side, so the two are seen to write out the same.");
  ("2026-11-04, at the human's asking: a console.log inside rather than below, the program of A log inside a while, so a while becomes a for one step at a time - this lesson changes the word and the brackets, and the next moves a line up into them with nothing else changed. Not picked: keeping the log below, where the one line written out is the same whatever order the lines inside run in.");
  ("The writing is a first draft by Claude 2026-11-01. 2026-11-04: the sentence introducing the for is the human's wording, which names the condition only after showing it.");
  function above(root, context, example, walk) {
    "A log inside a while remembered, then a for holding only its condition doing the same";
    let operator = js_operator_less_than_symbol();
    let condition = js_code_binary_spaced_nb("n", operator, 9);
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_while_log, [
      "a ",
      "while",
      " asks again each time its lines run:",
    ]);
    let lines_one = js_code_start_above_lines(js_code_while_lines_multiple);
    example(box_one, lines_one);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "A ",
      "for",
      " written this way - with ",
      condition,
      " in between two ",
      ";",
      " - does the same (the ",
      condition,
      " is called the condition of the ",
      "for",
      "):",
    ]);
    let lines_two = js_code_start_above_lines(js_code_for_condition_lines);
    example(box_two, lines_two);
    walk(box_two);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "For",
    "for (; n < 9;) { ... }",
  );
  let lesson = app_code_lesson_loop_log_generic({
    name_id,
    above,
    program_write: js_code_start_above_lines(js_code_for_condition_lines),
  });
  return lesson;
}
