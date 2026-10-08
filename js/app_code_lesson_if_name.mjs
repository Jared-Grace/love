import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_statement_name_true_false } from "./app_code_lesson_statement_name_true_false.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_if_program_lines } from "./app_code_if_program_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_lesson_if_cases_generic } from "./app_code_lesson_if_cases_generic.mjs";
export function app_code_lesson_if_name() {
  arguments_assert(arguments, 0);
  ('an if given a name: let a = true; if (a) { console.log("love"); } console.log("joy"); writes out love and joy, and with let a = false; writes out joy alone');
  ("The one new fact is that the true or false inside the parentheses can be held by a name, as the learner has already seen a name hold true or false. It comes after If less than by the human's word, 2026-10-07: whichever is easier goes first, and carrying a value from one line to the next is the harder of the two.");
  ("Every program names its value a or b, the names the course uses first; a name spelled out as a word was not picked, because it would hint at the answer.");
  ("The writing is a first draft by Claude 2026-10-07.");
  let fruits = fruits_of_the_spirit();
  let inside_shown = list_get(fruits, 0);
  let after_shown = list_get(fruits, 1);
  function setup_get(name, value) {
    "let name = value;";
    let right = json_to(value);
    let line = js_code_let_statement(name, right);
    let setup = [line];
    return setup;
  }
  function parts_get(name, runs) {
    "the name holds whether the if runs";
    let v = setup_get(name, runs);
    let parts = [v, name];
    return parts;
  }
  function above(root, context) {
    "a name holding true written out, then that name inside an if, holding true and then false";
    let brace_left = js_code_brace_left();
    let brace_right = js_code_brace_right();
    ("The name goes in an if, worded so since 2026-10-08, as in If less than at the human's word. Not picked: inside ( and ), the first wording, since a ( and a ) also group a value.");
    let name = "a";
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_statement_name_true_false,
      ["a name can hold ", "true", ":"],
    );
    let logged = js_code_console_log_statement(name);
    let a = setup_get(name, true);
    let remember_lines = list_concat(a, [logged]);
    app_code_code_lines_writes_out(box_one, remember_lines, "true");
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, ["We can put the name in an ", "if", ":"]);
    let setup2 = setup_get(name, true);
    let true_lines = app_code_if_program_lines(
      setup2,
      name,
      inside_shown,
      after_shown,
      true,
    );
    let both = list_join_newline([inside_shown, after_shown]);
    app_code_code_lines_writes_out(box_two, true_lines, both);
    html_div_cycle_code(box_two, ["", name, " is ", "true"]);
    html_div_cycle_code(box_two, [
      "So the lines inside ",
      brace_left,
      " and ",
      brace_right,
      " run",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "But suppose ",
      name,
      " is ",
      "false",
      ":",
    ]);
    let setup3 = setup_get(name, false);
    let false_lines = app_code_if_program_lines(
      setup3,
      name,
      inside_shown,
      after_shown,
      true,
    );
    app_code_code_lines_writes_out(box_three, false_lines, after_shown);
    html_div_cycle_code(box_three, [
      "So the lines inside ",
      brace_left,
      " and ",
      brace_right,
      " do not run",
    ]);
  }
  let lesson = app_code_lesson_if_cases_generic(
    "If a name",
    "if (a) { ... }",
    above,
    ["a", "b"],
    parts_get,
  );
  return lesson;
}
