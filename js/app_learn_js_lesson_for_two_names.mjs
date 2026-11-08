import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_learn_js_lesson_while_two_names } from "./app_learn_js_lesson_while_two_names.mjs";
import { js_code_two_names_while_b_first_lines } from "./js_code_two_names_while_b_first_lines.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { js_code_two_names_for_lines } from "./js_code_two_names_for_lines.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_two_names_generic } from "./app_learn_js_lesson_two_names_generic.mjs";
export function app_learn_js_lesson_for_two_names() {
  arguments_assert(arguments, 0);
  ("a for changing a name it never asks about: let b = 9; for (let a = 1; a < 4; a++) { b--; } console.log(b); writes out 6, the same as Two names in a while");
  ("The one new fact is that a for owns only the name it counts with; a second name is made above it, changed inside, and still there after it, so it can be written out. Walking an array adds up a total this way.");
  ("Chosen by the human 2026-11-06, as one of three for lessons arrays need.");
  ("The while shown above has let b first and b-- first, the other way round from Two names in a while, as For counting the runs did: then the for is that while with let a moved into it and a++ moved up. Neither line reads what the other changes, so both orders write out the same. The rejected reading was showing the while as that lesson wrote it, which would ask the learner to see lines swap as well as move.");
  ("The writing is a first draft by Claude 2026-11-06.");
  function above(root, context, example, walk) {
    "Two names in a while remembered, written so the for is that while with two lines moved, then the for, then every run walked through";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_while_two_names,
      ["we can write this:"],
    );
    example(box_one, js_code_two_names_while_b_first_lines);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "We can write it with a ",
      "for",
      ":",
    ]);
    example(box_two, js_code_two_names_for_lines);
    app_learn_js_div_cycle_code(box_two, ["These two loops do the same thing"]);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Two names in a for",
    "for (...) { b--; }",
  );
  let lesson = app_learn_js_lesson_two_names_generic({
    name_id,
    above,
    program_write: js_code_two_names_for_lines,
  });
  return lesson;
}
