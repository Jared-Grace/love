import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_start_above_lines } from "./js_code_start_above_lines.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_halve } from "./app_code_lesson_while_halve.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_count_generic } from "./app_learn_js_lesson_count_generic.mjs";
export function app_learn_js_lesson_while_count() {
  arguments_assert(arguments, 0);
  ("a while counting its own runs: let count = 0; let n = 16; while (n > 3) { n /= 2; count += 1; } console.log(count); writes out 3, the number of times the { ... } ran");
  ("The one new fact is that a while can change two names each time it runs, and one of them can count the runs, so what is written out is how many times the { ... } ran rather than where n ended.");
  ("Asked for by the human 2026-11-01, as the lesson after While halving: counting the runs.");
  ("It halves, as in While halving, so the count cannot be read off the numbers by taking away; each run has to be worked out.");
  ("The writing is a first draft by Claude 2026-11-01.");
  let name = "n";
  let count_name = "count";
  let program_write = js_code_start_above_lines(js_code_while_lines_multiple);
  function above_inner(root, context, example, walk) {
    "the last while remembered, then a while counting how many times it halves";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_halve,
      ["a ", "while", " can halve ", name, " each time, with ", "/=", "."],
    );
    let box_two = app_learn_js_container_light_blue(root);
    let r = app_learn_js_braces_dots();
    app_learn_js_div_cycle_code(box_two, [
      "Inside, it can change two names. Here ",
      count_name,
      " goes up by 1 each time, so it counts how many times the ",
      r,
      " runs:",
    ]);
    example(box_two, program_write);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Counting the runs",
    "count += 1;",
  );
  let lesson = app_learn_js_lesson_count_generic(
    program_write,
    false,
    above_inner,
    name_id,
  );
  return lesson;
}
