import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_braces_run_else_if } from "./app_code_lesson_braces_run_else_if.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_if_ab_logged } from "./app_code_lesson_if_ab_logged.mjs";
import { app_code_else_if_program_lines } from "./app_code_else_if_program_lines.mjs";
export function app_code_lesson_else_if() {
  arguments_assert(arguments, 0);
  ('else if: let a = false; let b = true; if (a) { console.log("love"); } else if (b) { console.log("joy"); } console.log("peace"); writes out joy and peace');
  ("The one new fact is that when an if is the only line inside an else, else { if (b) { ... } } can be written shorter as else if (b) { ... }, and the program does the same thing. The program shown first is an if inside an else, from An if inside an else, with nothing else inside that else, so the shorter way is the only new piece.");
  ("Asked for by the human 2026-10-09, after an if inside an else was found to be what else if means, and the course had no lesson on else if.");
  ("The condition is said plainly: only when the if is the only line inside the else. In An if inside an else the else also holds a line before the if, so that program cannot be written with else if.");
  ("The four programs are a and b each true or false. With a true, b true and b false write out the same, since else if (b) { ... } is then not reached.");
  ("Reading forwards, the wrong answers offered are what the other programs write out, each once. Reading backwards, the wrong program changes one name so that it writes out something else: a when a is true, since b changes nothing then, and b when a is false.");
  ("The writing is a first draft by Claude 2026-10-09.");
  ("2026-10-11, at the human's asking: the explanation moved to the Does this section run? lesson straight before, which now introduces the shape; this lesson remembers it. Not picked: keeping the explanation here too, which would say the same thing twice in a row.");
  let fruits = fruits_of_the_spirit();
  function above(root, context) {
    "the section-run lesson remembered";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_braces_run_else_if,
      ["", "else if (b) { ... }", " runs when a is false and b is true"],
    );
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Else if",
    "else if (b) { ... }",
  );
  let lesson = app_code_lesson_if_ab_logged(
    fruits,
    app_code_else_if_program_lines,
    3,
    false,
    above,
    name_id,
  );
  return lesson;
}
