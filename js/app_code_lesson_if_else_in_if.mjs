import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_braces_run_if_else_in_if } from "./app_code_lesson_braces_run_if_else_in_if.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_if_ab_logged } from "./app_code_lesson_if_ab_logged.mjs";
import { app_code_if_else_in_if_program_lines } from "./app_code_if_else_in_if_program_lines.mjs";
export function app_code_lesson_if_else_in_if() {
  arguments_assert(arguments, 0);
  ('an if and else inside an if: let a = true; let b = false; if (a) { console.log("love"); if (b) { console.log("joy"); } else { console.log("peace"); } } console.log("patience"); writes out love, peace and patience');
  ("The one new fact is that an if with an else can sit inside an if, and then the else is inside it too: when the outer if does not run, neither the inner if nor its else is reached. The program is the one from If inside an if with an else added to the if inside, so else is the only new piece.");
  ("Asked for by the human 2026-10-08, as the third of the nesting shapes they listed: if ( if else ).");
  ("The four programs are a and b each true or false, as in If inside an if. With a false, b true and b false write out the same, which is the new fact: once if (a) does not run, b changes nothing.");
  ("Reading forwards, the wrong answers offered are what the other programs write out, each once. One of them is the mistake of thinking an else always runs when its if does not: with a false, that reading adds the word inside else.");
  ("Reading backwards, the wrong program changes one name so that it writes out something else: b when a is true, a when a is false.");
  ("The writing is a first draft by Claude 2026-10-09.");
  ("2026-10-11, at the human's asking: the explanation moved to the Does this section run? lesson straight before, which now introduces the shape; this lesson remembers it. Not picked: keeping the explanation here too, which would say the same thing twice in a row.");
  let fruits = fruits_of_the_spirit();
  function above(root, context) {
    "the section-run lesson remembered";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_braces_run_if_else_in_if,
      [
        "An ",
        "if",
        " and its ",
        "else",
        " inside an if are reached only when the outer one runs",
      ],
    );
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "An if and else inside an if",
    "if (a) { if (b) ... else ... }",
  );
  let lesson = app_code_lesson_if_ab_logged(
    fruits,
    app_code_if_else_in_if_program_lines,
    4,
    true,
    above,
    name_id,
  );
  return lesson;
}
