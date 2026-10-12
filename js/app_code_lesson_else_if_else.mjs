import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_braces_run_else_if_else } from "./app_code_lesson_braces_run_else_if_else.mjs";
import { app_code_else_if_else_explain } from "./app_code_else_if_else_explain.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_if_ab_logged } from "./app_code_lesson_if_ab_logged.mjs";
import { app_code_else_if_else_program_lines } from "./app_code_else_if_else_program_lines.mjs";
export function app_code_lesson_else_if_else() {
  arguments_assert(arguments, 0);
  ('else if then else: let a = false; let b = false; if (a) { console.log("love"); } else if (b) { console.log("joy"); } else { console.log("peace"); } console.log("patience"); writes out peace and patience');
  ("The one new fact is that an else if can be followed by an else, whose lines run when neither a nor b is true. The program is the one from Else if with an else added after else if (b) { ... }, so that else is the only new piece.");
  ("Recommended by Claude 2026-10-09 as the step after Else if, and chosen by the human.");
  ("There is one else here, so a sentence names it as else { ... }; the else if is named else if (b) { ... }, so the two cannot be mistaken for each other.");
  ("The four programs are a and b each true or false. With a true, b true and b false write out the same, since neither else if (b) { ... } nor else { ... } is reached.");
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
      app_code_lesson_braces_run_else_if_else,
      ["The last ", "else { ... }", " runs when no test before it is true"],
    );
    ("2026-10-12, at the human's asking: what the code writes out is explained back here, where it is first asked, the lesson before now walking through which sections run");
    app_code_else_if_else_explain(root, context);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Else if and else",
    "else if ... else ...",
  );
  let lesson = app_code_lesson_if_ab_logged(
    fruits,
    app_code_else_if_else_program_lines,
    4,
    false,
    above,
    name_id,
  );
  return lesson;
}
