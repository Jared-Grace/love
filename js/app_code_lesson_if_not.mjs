import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_statement_name_not } from "./app_code_lesson_statement_name_not.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_if_program_lines } from "./app_code_if_program_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_if_cases_generic } from "./app_code_lesson_if_cases_generic.mjs";
export function app_code_lesson_if_not() {
  arguments_assert(arguments, 0);
  ('an if around the opposite of a name: let a = false; if (!a) { console.log("love"); } console.log("joy"); writes out love and joy, and with let a = true; writes out joy alone');
  ("The one new fact is that ! may stand inside the parentheses; the learner has turned a name into its opposite with ! before. It comes last of the three the human chose 2026-10-07, so that it sits just before an if beside an if (!a), which leads to else.");
  ("Every program names its value a or b, as in If a name.");
  ("The writing is a first draft by Claude 2026-10-07.");
  let bang = js_operator_bang_symbol();
  let fruits = fruits_of_the_spirit();
  let inside_shown = list_get(fruits, 0);
  let after_shown = list_get(fruits, 1);
  function setup_get(name, value) {
    "let name = value;";
    let right2 = json_to(value);
    let line = js_code_let_statement(name, right2);
    let setup = [line];
    return setup;
  }
  function parts_get(name, runs) {
    "the name holds the opposite of whether the if runs";
    let n = not(runs);
    let v = setup_get(name, n);
    let combined = text_combine(bang, name);
    let parts = [v, combined];
    return parts;
  }
  function above(root, context) {
    "! remembered, then !a inside an if, with a false and then true";
    let brace_left = js_code_brace_left();
    let brace_right = js_code_brace_right();
    ("The name goes in an if, worded so since 2026-10-08, as in If less than at the human's word. Not picked: inside ( and ), the first wording, since a ( and a ) also group a value.");
    let name = "a";
    let opposite = text_combine(bang, name);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_statement_name_not,
      [
        "",
        bang,
        " turns ",
        "true",
        " into ",
        "false",
        ", and ",
        "false",
        " into ",
        "true",
      ],
    );
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "We can put ",
      opposite,
      " in an ",
      "if",
      ":",
    ]);
    let setup2 = setup_get(name, false);
    let true_lines = app_code_if_program_lines(
      setup2,
      opposite,
      inside_shown,
      after_shown,
      true,
    );
    let both = list_join_newline([inside_shown, after_shown]);
    app_code_code_lines_writes_out(box_two, true_lines, both);
    html_div_cycle_code(box_two, ["", name, " is ", "false"]);
    html_div_cycle_code(box_two, ["So ", opposite, " is ", "true"]);
    html_div_cycle_code(box_two, [
      "So the lines inside ",
      brace_left,
      " and ",
      brace_right,
      " run",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, ["But suppose ", name, " is ", "true", ":"]);
    let setup3 = setup_get(name, true);
    let false_lines = app_code_if_program_lines(
      setup3,
      opposite,
      inside_shown,
      after_shown,
      true,
    );
    app_code_code_lines_writes_out(box_three, false_lines, after_shown);
    html_div_cycle_code(box_three, ["So ", opposite, " is ", "false"]);
    html_div_cycle_code(box_three, [
      "So the lines inside ",
      brace_left,
      " and ",
      brace_right,
      " do not run",
    ]);
  }
  let lesson = app_code_lesson_if_cases_generic(
    "If not",
    "if (!a) { ... }",
    above,
    ["a", "b"],
    parts_get,
  );
  return lesson;
}
