import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_brace_lines_two } from "./app_code_lesson_brace_lines_two.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_brace_lines_generic } from "./app_code_lesson_brace_lines_generic.mjs";
import { app_code_brace_pair_programs_three } from "./app_code_brace_pair_programs_three.mjs";
export function app_code_lesson_brace_lines() {
  arguments_assert(arguments, 0);
  ("which lines stand between a pair of braces, in programs with three pairs of braces: the learner taps every line between a { and the } that closes it");
  ("Asked for by the human 2026-10-11, as the version of The lines between braces, two pairs with three pairs, placed straight after it.");
  ("The writing is a first draft by Claude 2026-10-11.");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  function above(root, context) {
    "the lines between a pair of braces remembered";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_brace_lines_two,
      [
        "the lines of a section are the lines between its ",
        left,
        " and its ",
        right,
        ".",
      ],
    );
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The lines between braces",
    "{ ... }",
  );
  let lesson = app_code_lesson_brace_lines_generic(
    name_id,
    above,
    app_code_brace_pair_programs_three,
  );
  return lesson;
}
