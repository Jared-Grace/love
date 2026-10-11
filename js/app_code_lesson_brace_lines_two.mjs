import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_brace_pair_two } from "./app_code_lesson_brace_pair_two.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_brace_lines_generic } from "./app_code_lesson_brace_lines_generic.mjs";
import { app_code_brace_pair_programs_two } from "./app_code_brace_pair_programs_two.mjs";
export function app_code_lesson_brace_lines_two() {
  arguments_assert(arguments, 0);
  ("which lines stand between a pair of braces, in programs with two pairs of braces: the learner taps every line between a { and the } that closes it");
  ("Asked for by the human 2026-10-11, after Which brace pairs with which, with a version for two pairs and another for three. Placed straight after Which brace pairs with which, so both lessons on which brace pairs with which come first, and the two on lines follow in the same order, two pairs then three. Rejected: each lines lesson straight after the pairing lesson with its number of pairs, which would put two pairs, lines, three pairs, lines - the human said then, after brace matching.");
  ("The writing is a first draft by Claude 2026-10-11.");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  function above(root, context) {
    "a { beginning a section remembered, then the section as the lines between the { and its }";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_brace_pair_two,
      ["a ", left, " begins a section of code, and its ", right, " ends it."],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "The lines of that section are the lines between the ",
      left,
      " and its ",
      right,
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The lines between braces, two pairs",
    "{ ... }",
  );
  let lesson = app_code_lesson_brace_lines_generic(
    name_id,
    above,
    app_code_brace_pair_programs_two,
  );
  return lesson;
}
