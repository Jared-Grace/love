import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_braces_run_if_in_else } from "./app_code_lesson_braces_run_if_in_else.mjs";
import { app_code_if_in_else_explain } from "./app_code_if_in_else_explain.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_if_ab_logged } from "./app_code_lesson_if_ab_logged.mjs";
import { app_code_if_in_else_program_lines } from "./app_code_if_in_else_program_lines.mjs";
export function app_code_lesson_if_in_else() {
  arguments_assert(arguments, 0);
  ('an if inside an else: let a = false; let b = true; if (a) { console.log("love"); } else { console.log("joy"); if (b) { console.log("peace"); } } console.log("patience"); writes out joy, peace and patience');
  ("The one new fact is that an if can go inside an else as well as inside an if: when a is true the else does not run, so the if inside it is not reached. The program is an if and else with an if added inside the else, so that if is the only new piece.");
  ("Asked for by the human 2026-10-08, as the fifth of the nesting shapes they listed: if else ( if ).");
  ("The four programs are a and b each true or false. With a true, b true and b false write out the same.");
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
      app_code_lesson_braces_run_if_in_else,
      [
        "An ",
        "if",
        " inside an ",
        "else",
        " is reached only when the else runs",
      ],
    );
    ("2026-10-12, at the human's asking: what the code writes out is explained back here, where it is first asked, the lesson before now walking through which sections run");
    app_code_if_in_else_explain(root, context);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "An if inside an else",
    "if ... else { if ... }",
  );
  let lesson = app_code_lesson_if_ab_logged(
    fruits,
    app_code_if_in_else_program_lines,
    4,
    false,
    above,
    name_id,
  );
  return lesson;
}
