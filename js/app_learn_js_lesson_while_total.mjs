import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_start_above_lines } from "./js_code_start_above_lines.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_learn_js_lesson_while_down } from "./app_learn_js_lesson_while_down.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_total_up_generic } from "./app_learn_js_lesson_total_up_generic.mjs";
export function app_learn_js_lesson_while_total() {
  arguments_assert(arguments, 0);
  ("a while adding up a total: let total = 0; let n = 1; while (n < 4) { total += n; n += 1; } console.log(total); writes out 6, which is 1 + 2 + 3");
  ("The one new fact is that a while can change two names each time it runs, so one name can count while the other adds up, and what is written out is the one that adds up.");
  ("Asked for by the human 2026-10-09, as the lesson after While counting down, on the road from while to for.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let program_write = js_code_start_above_lines(js_code_while_lines_multiple);
  function above_inner(root, context, example, walk) {
    "the last while remembered, then a while changing two names, adding 1 + 2 + 3";
    let box_one = app_learn_js_container_light_blue(root);
    let r = app_learn_js_braces_dots();
    app_code_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_while_down,
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
      "Inside, it can change two names. Here ",
      "n",
      " counts 1, 2, 3, and ",
      "total",
      " adds them up:",
    ]);
    example(box_two, program_write);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "A running total",
    "total += n;",
  );
  let lesson = app_learn_js_lesson_total_up_generic(
    program_write,
    above_inner,
    name_id,
  );
  return lesson;
}
