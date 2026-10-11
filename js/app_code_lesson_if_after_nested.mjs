import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_braces_run_after_nested } from "./app_code_lesson_braces_run_after_nested.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_if_ab_logged } from "./app_code_lesson_if_ab_logged.mjs";
import { app_code_if_after_nested_program_lines } from "./app_code_if_after_nested_program_lines.mjs";
export function app_code_lesson_if_after_nested() {
  arguments_assert(arguments, 0);
  ('an if after an if inside an if: let a = false; let b = true; if (a) { console.log("love"); if (b) { console.log("joy"); } } if (b) { console.log("peace"); } console.log("patience"); writes out peace and patience');
  ("The one new fact is that an if written after the closing brace of another if is not inside it, so it is reached whatever the other if asks. The program is the one from If inside an if with one more if added before its last line, and that if asks the same name as the if inside, so the only difference between the two ifs that ask b is where they sit.");
  ("Asked for by the human 2026-10-08, as the second of the nesting shapes they listed: if ( if ) then if.");
  ("The four programs are a and b each true or false, as in If inside an if. a false and b true is the one that shows the new fact: the if inside is never reached, and the if after still runs.");
  ("Reading forwards, the wrong answers offered are what the other three programs write out. One of them is the mistake of reading the if after as if it were inside: with a false and b true, that reading writes out only the last word, which is what a and b both false write out.");
  ("Reading backwards, the wrong program changes one name so that it writes out something else: b when a is true, a when a is false.");
  ("The two ifs that ask b are named in sentences by their whole line, never as the if inside and the if after, so a sentence never leaves the reader to work out which one is meant.");
  ("Moved 2026-10-11 by the human to straight after The order of the braces, since its program has three pairs of braces: every lesson explaining three pairs - the braces among the tokens with three pairs, which brace pairs with which, the lines between braces and the order of the braces - comes before the first lesson asking what code with three pairs prints. The lessons with two pairs that stood between them move with them.");
  ("The writing is a first draft by Claude 2026-10-08.");
  ("2026-10-11, at the human's asking: the explanation moved to Does this section run? An if after an if inside an if, straight before, which now introduces the shape; this lesson remembers it. Not picked: keeping the explanation here too, which would say the same thing twice in a row.");
  let fruits = fruits_of_the_spirit();
  function above(root, context) {
    "the section-run lesson remembered";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_braces_run_after_nested,
      [
        "An ",
        "if",
        " after another's ",
        "}",
        " is outside it, so it is reached whatever that one asks",
      ],
    );
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "An if after an if inside an if",
    "{ if (b) ... } if (b) ...",
  );
  let lesson = app_code_lesson_if_ab_logged(
    fruits,
    app_code_if_after_nested_program_lines,
    4,
    true,
    above,
    name_id,
  );
  return lesson;
}
