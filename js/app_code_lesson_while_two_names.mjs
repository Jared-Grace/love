import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while } from "./app_code_lesson_while.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { js_code_two_names_while_lines } from "./js_code_two_names_while_lines.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_two_names_generic } from "./app_code_lesson_two_names_generic.mjs";
export function app_code_lesson_while_two_names() {
  arguments_assert(arguments, 0);
  ("a while changing a name it never asks about: let a = 1; let b = 9; while (a < 4) { a++; b--; } console.log(b); writes out 6");
  ("The one new fact is that a while may change a second name, which it does not ask about, so that name is found by counting how many times the { ... } ran. Two numbers meeting, next, then asks about both.");
  ("Asked for by the human 2026-11-02. Only b is written out, since a stops exactly on the number compared against and could be copied from there, while b can only be found by following the runs.");
  ("The writing is a first draft by Claude 2026-11-02.");
  let name_a = "a";
  let name_b = "b";
  function above(root, context, example, walk) {
    "While remembered, then a while changing a second name it never asks about";
    let box_one = app_learn_js_container_light_blue(root);
    let r = app_learn_js_braces_dots();
    app_code_remember_from_lesson(box_one, context, app_code_lesson_while, [
      "a ",
      "while",
      " runs its ",
      r,
      " again and again, while what it asks is ",
      "true",
      ".",
    ]);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "A ",
      "while",
      " can change a name it never asks about. Here it asks only about ",
      name_a,
      ", and ",
      name_b,
      " changes too:",
    ]);
    example(box_two, js_code_two_names_while_lines);
    walk(box_two);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Two names in a while",
    "while (a < 4) { a++; b--; }",
  );
  let lesson = app_code_lesson_two_names_generic({
    name_id,
    above,
    program_write: js_code_two_names_while_lines,
  });
  return lesson;
}
