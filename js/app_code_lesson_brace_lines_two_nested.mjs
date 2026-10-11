import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_brace_lines_two } from "./app_code_lesson_brace_lines_two.mjs";
import { app_code_braces_two_nested } from "./app_code_braces_two_nested.mjs";
import { app_code_brace_lines_example } from "./app_code_brace_lines_example.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_brace_lines_generic } from "./app_code_lesson_brace_lines_generic.mjs";
export function app_code_lesson_brace_lines_two_nested() {
  arguments_assert(arguments, 0);
  ("which lines stand between a pair of braces, in programs with an if inside an if: the learner taps every line between a { and the } that closes it, for the outer pair and for the inner pair");
  ("Split 2026-10-11 from The lines between braces, side by side, as the human asked, so the if inside an if is sure to be asked: every program here is one, and the pointed-at { takes turns between the outer and the inner.");
  ("The writing is a first draft by Claude 2026-10-11.");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  function above(root, context) {
    "the lines between a pair of braces remembered, then shown for the outer pair of an if inside an if";
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
    let box_two = app_code_container_light_blue(root);
    let code = app_code_braces_two_nested();
    app_code_brace_lines_example(box_two, code, 0);
  }
  function codes_get() {
    "an if inside an if, four times";
    let code2 = app_code_braces_two_nested();
    let code3 = app_code_braces_two_nested();
    let code4 = app_code_braces_two_nested();
    let code5 = app_code_braces_two_nested();
    let codes = [code2, code3, code4, code5];
    return codes;
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The lines between braces, one inside the other",
    "{ ... }",
  );
  let lesson = app_code_lesson_brace_lines_generic(name_id, above, codes_get);
  return lesson;
}
