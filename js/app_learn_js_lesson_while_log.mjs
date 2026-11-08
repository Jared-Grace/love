import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_while } from "./app_learn_js_lesson_while.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { js_code_start_above_lines } from "./js_code_start_above_lines.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_loop_log_generic } from "./app_learn_js_lesson_loop_log_generic.mjs";
export function app_learn_js_lesson_while_log() {
  arguments_assert(arguments, 0);
  ("a console.log inside a while: let n = 1; while (n < 9) { console.log(n); n += 3; } writes out 1, 4 and 7, one under the other");
  ("The one new fact is that a line inside a while runs once for every time the while runs, so a console.log inside it writes out one line each time, and the runs can be counted from what is written out.");
  ("Asked for by the human 2026-10-09, to sit straight after While: seeing each run written out makes the repeating plain before any lesson asks for a total kept in the head.");
  ("2026-10-27: no program runs more than three times, asked for by the human for now; the four-run group taken out, so a screen has three programs");
  ("The numbers are those of While, so n never lands exactly on the number it is compared against, except in the backwards wrong program.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let name = "n";
  function above(root, context, example, walk) {
    "While remembered, then the same while with a console.log inside, writing out each run";
    let box_one = app_learn_js_container_light_blue(root);
    let r = app_learn_js_braces_dots();
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_while,
      [
        "a ",
        "while",
        " runs the lines inside its ",
        r,
        " again and again, while what it asks is ",
        "true",
        ".",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Put a ",
      "console.log",
      " inside, and it writes out ",
      name,
      " every time the lines run:",
    ]);
    let lines = js_code_start_above_lines(js_code_while_lines_multiple);
    example(box_two, lines);
    walk(box_two);
    let r2 = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(box_two, [
      "Three lines were written out, so the ",
      r2,
      " ran three times",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "A log inside a while",
    "{ console.log(n); ... }",
  );
  let lesson = app_learn_js_lesson_loop_log_generic({
    name_id,
    above,
    program_write: js_code_start_above_lines(js_code_while_lines_multiple),
  });
  return lesson;
}
