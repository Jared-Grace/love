import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { app_learn_js_for_if_skipped_parts } from "./app_learn_js_for_if_skipped_parts.mjs";
import { json_to } from "./json_to.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_learn_js_lesson_expression_remainder_2 } from "./app_learn_js_lesson_expression_remainder_2.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { object_copy_assign } from "./object_copy_assign.mjs";
import { app_learn_js_lesson_for_if_even_options } from "./app_learn_js_lesson_for_if_even_options.mjs";
import { app_code_lesson_for_if_generic } from "./app_code_lesson_for_if_generic.mjs";
export function app_learn_js_lesson_for_if_even() {
  arguments_assert(arguments, 0);
  ("even numbers in a for: for (let n = 2; n < 5; n++) { if (n % 2 === 0) { console.log(n); } } writes out 2 and 4, one under the other");
  ("The one new fact is that the remainder after dividing by 2 can be what an if asks, so a for can pick out the even numbers, or with === 1 the odd ones.");
  ("Chosen by the human 2026-11-06, the third of four lessons of an if inside a for before arrays.");
  ("It writes out inside the if, as An if inside a for does, so which numbers were let through is read straight off what is written out.");
  ("The writing is a first draft by Claude 2026-11-06.");
  let name = "n";
  let statement = js_code_console_log_statement(name);
  function inside_write(asked) {
    let lines = js_code_if_lines(asked, statement);
    return lines;
  }
  function effect(value, passed, state) {
    "n is written out when the if lets it through";
    let parts = app_learn_js_for_if_skipped_parts();
    if (passed) {
      let json = json_to(value);
      parts = [", so ", json, " is written out, then "];
    }
    let told = {
      parts,
      state,
    };
    return told;
  }
  function walk_end(state2) {
    let end = ["Only the even numbers were written out"];
    return end;
  }
  function above(root, context, example, walk) {
    "Remainder after dividing by 2 remembered, then it asked by an if inside a for";
    let box_one = app_learn_js_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_expression_remainder_2,
      [
        "a number ",
        "% 2",
        " is ",
        "0",
        " when the number is even, and ",
        "1",
        " when it is odd.",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "So an ",
      "if",
      " inside a ",
      "for",
      " can pick out the even numbers:",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "Even numbers in a for",
    "if (n % 2 === 0) { ... }",
  );
  let to = app_learn_js_lesson_for_if_even_options();
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
