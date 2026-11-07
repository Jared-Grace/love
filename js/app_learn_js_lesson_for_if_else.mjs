import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_if_else_lines } from "./js_code_if_else_lines.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_else } from "./app_code_lesson_if_else.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { object_copy_assign } from "./object_copy_assign.mjs";
import { app_code_lesson_for_if_greater_options } from "./app_code_lesson_for_if_greater_options.mjs";
import { app_code_lesson_for_if_generic } from "./app_code_lesson_for_if_generic.mjs";
export function app_learn_js_lesson_for_if_else() {
  arguments_assert(arguments, 0);
  ('an if with an else inside a for: for (let n = 2; n < 5; n++) { if (n > 2) { console.log("big"); } else { console.log("small"); } } writes out small, big and big, one under the other');
  ("The one new fact is that with an else, every run writes something: the if's lines when it is true and the else's when it is false. Sorting the items of an array into two kinds is this shape.");
  ("Chosen by the human 2026-11-06, the last of four lessons of an if inside a for before arrays.");
  ("It asks n > threshold rather than whether n is even, picked 2026-11-06, so that big and small are true of every program: with a remainder the word even would sit in the if of a program asking for odd numbers. Not picked: writing out n in one branch and a word in the other, which asks the reader to follow two kinds of thing written out.");
  ("The writing is a first draft by Claude 2026-11-06.");
  let big = "big";
  let small = "small";
  let code = json_to(big);
  let yes = js_code_console_log_statement(code);
  let code2 = json_to(small);
  let no = js_code_console_log_statement(code2);
  function inside_write(asked) {
    let lines = js_code_if_else_lines(asked, yes, no);
    return lines;
  }
  function effect(value, passed, state) {
    "big is written out when the if is true, and small when it is false";
    let parts = [
      ", so the ",
      "else",
      " runs and ",
      small,
      " is written out, then ",
    ];
    if (passed) {
      parts = [", so ", big, " is written out, then "];
    }
    let told = {
      parts,
      state,
    };
    return told;
  }
  function walk_end(state2) {
    let end = [
      "Every run wrote out one line: the ",
      "if",
      "'s or the ",
      "else",
      "'s",
    ];
    return end;
  }
  function above(root, context, example, walk) {
    "An if with an else remembered, then one inside a for";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_if_else, [
      "the ",
      "else",
      " runs when the ",
      "if",
      " is ",
      "false",
      ".",
    ]);
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Inside a ",
      "for",
      ", one of the two runs every time:",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "An else inside a for",
    "if (...) {...} else {...}",
  );
  let to = app_code_lesson_for_if_greater_options();
  let options = object_copy_assign(to, {
    name_id,
    above,
    before: [],
    after: [],
    inside_write,
    effect,
    state_start: 0,
    walk_end,
  });
  let lesson = app_code_lesson_for_if_generic(options);
  return lesson;
}
