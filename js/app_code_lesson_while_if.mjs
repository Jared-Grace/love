import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_start_above_lines } from "./js_code_start_above_lines.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_log } from "./app_code_lesson_while_log.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_if_inside_generic } from "./app_code_lesson_if_inside_generic.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
export function app_code_lesson_while_if() {
  arguments_assert(arguments, 0);
  ("an if inside a while: let n = 1; while (n < 6) { if (n > 2) { console.log(n); } n += 2; } writes out 3 and 5, one under the other, and not 1");
  ("The one new fact is that an if inside a while is asked again every time the while runs, so its { ... } can run on some runs and be skipped on others.");
  ("Chosen by Claude 2026-11-01, when the human asked for more while lessons before For: no while lesson yet had an if inside it. Not picked: a while compared with <= or >=, a smaller step in the same shape; a while whose { ... } never runs, since the first While lesson already asks one in each screen.");
  ("It builds on While writing out each time: the console.log sits inside the if, so which runs the if let through is read off what is written out.");
  ("The writing is a first draft by Claude 2026-11-01.");
  let program_write = js_code_start_above_lines(js_code_while_lines_multiple);
  function above(root, context, example, walk) {
    "While writing out each time remembered, then an if inside the while";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_while_log, [
      "a ",
      "console.log",
      " inside a ",
      "while",
      " writes out every time the lines run.",
    ]);
    let box_two = app_learn_js_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "An ",
      "if",
      " inside a ",
      "while",
      " is asked again each time, so it can be ",
      "true",
      " on some runs and ",
      "false",
      " on others:",
    ]);
    example(box_two, program_write);
    walk(box_two);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "An if inside a while",
    "while (...) { if (...) {} }",
  );
  let lesson = app_code_lesson_if_inside_generic({
    name_id,
    above,
    program_write,
    keyword: js_keyword_while(),
  });
  return lesson;
}
