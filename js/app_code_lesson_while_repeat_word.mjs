import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_start_above_lines } from "./js_code_start_above_lines.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_increment } from "./app_code_lesson_while_increment.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_repeat_word_up_generic } from "./app_code_lesson_repeat_word_up_generic.mjs";
export function app_code_lesson_while_repeat_word() {
  arguments_assert(arguments, 0);
  ('a while that writes out the same word each run: let n = 0; while (n < 3) { console.log("joy"); n++; } writes out joy three times');
  ("The one new fact is that n need not be what is written out: here it only counts the runs, which is the first time in the course a while repeats something that does not change.");
  ("Recommended by Claude 2026-11-02 and chosen by the human, to sit after n++ and n-- have come into a while, and before a while has two names in it.");
  ("A program starts at zero, or at another number, so the count cannot always be copied off the number n is compared against.");
  ("The writing is a first draft by Claude 2026-11-02.");
  let name = "n";
  let program_write = js_code_start_above_lines(js_code_while_lines_multiple);
  function above(root, context, example, walk) {
    "While adding one remembered, then a while that writes out one word each run while n only counts";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_increment,
      ["", "n++", " inside a ", "while", " adds one to ", name, " each run."],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "A ",
      "while",
      " can write out the same word each run, and ",
      name,
      " only counts the runs:",
    ]);
    example(box_two, program_write);
    walk(box_two);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The same word each run",
    '{ console.log("joy"); n++; }',
  );
  let lesson = app_code_lesson_repeat_word_up_generic(
    program_write,
    above,
    name_id,
  );
  return lesson;
}
