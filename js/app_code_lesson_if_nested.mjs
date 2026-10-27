import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { js_code_if_dots } from "./js_code_if_dots.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_braces_run_nested } from "./app_code_lesson_braces_run_nested.mjs";
import { app_code_if_nested_explain } from "./app_code_if_nested_explain.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_if_ab_logged } from "./app_code_lesson_if_ab_logged.mjs";
import { app_code_if_nested_program_lines } from "./app_code_if_nested_program_lines.mjs";
export function app_code_lesson_if_nested() {
  arguments_assert(arguments, 0);
  ('an if inside an if: let a = true; let b = false; if (a) { console.log("love"); if (b) { console.log("joy"); } } console.log("peace"); writes out love and peace');
  ("The one new fact is that an if can sit inside another, and is only reached when the outer one runs. So the inner part runs only when both names are true, and a true inner name does nothing when the outer is false.");
  ("Asked for by the human 2026-10-08, as the second of the lessons before while, and the first of the nesting shapes they listed: if ( if ).");
  ("Three ways, as in Two ifs, one name: all three words, the outer word and the last, and the last alone. The last line sits outside both ifs so that every program writes out something, since a program that writes out nothing has no answer to press.");
  ("The four programs are a and b each true or false. a false and b true is kept, since it is the one that shows the inner part is never reached.");
  ("Reading forwards, the wrong answers offered are what the other two ways write out, as in Two ifs, one name. Not picked: the inner word and the last without the outer word, the mistake of reading the inner if as standing alone, since it would make the count of answers differ between programs.");
  ("Reading backwards, the wrong program changes one name so that it writes out something else: b when a is true, a when a is false.");
  ("The last box names a && b, taught long before as an expression. Not picked: a lesson rewriting one shape into the other, left for later if wanted.");
  ("2026-10-11, at the human's asking: the three ways moved to Does this section run? If inside an if, straight before, which now introduces the shape; this lesson remembers it and keeps a && b. Not picked: keeping the three ways here too, which would say the same thing twice in a row.");
  ("The writing is a first draft by Claude 2026-10-08.");
  let fruits = fruits_of_the_spirit();
  function above(root, context) {
    "the section-run lesson remembered, then a && b";
    let if_b = js_code_if_dots("b");
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_braces_run_nested,
      [
        "An ",
        "if",
        " inside another's ",
        "{ ... }",
        " is reached only when the outer one runs",
      ],
    );
    ("2026-10-12, at the human's asking: what the code writes out is explained back here, where it is first asked, the lesson before now walking through which sections run");
    app_code_if_nested_explain(root, context);
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "So the lines inside ",
      if_b,
      " run only when ",
      "a && b",
      " is ",
      "true",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "If inside an if",
    "if (a) { if (b) { ... } }",
  );
  let lesson = app_code_lesson_if_ab_logged(
    fruits,
    app_code_if_nested_program_lines,
    3,
    true,
    above,
    name_id,
  );
  return lesson;
}
