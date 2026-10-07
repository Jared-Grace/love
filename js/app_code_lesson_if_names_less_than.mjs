import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_less_than } from "./app_code_lesson_if_less_than.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_if_program_lines } from "./app_code_if_program_lines.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_if_cases_generic } from "./app_code_lesson_if_cases_generic.mjs";
export function app_code_lesson_if_names_less_than() {
  arguments_assert(arguments, 0);
  ('names compared inside an if: let a = 2; let b = 3; if (a < b) { console.log("love"); } console.log("joy"); writes out love and joy, and with a and b swapped writes out joy alone');
  ("It puts If less than and If a name together: the numbers compared are held by names, so the learner reads what each name holds and then works the comparison out. Picked by Claude 2026-10-07 among three the human chose all of; it comes before If not, because it asks nothing the learner has not just done twice.");
  ("Each program's opposite holds the same two numbers in the other names, so a and b are swapped rather than the words.");
  ("The writing is a first draft by Claude 2026-10-07.");
  let less = js_operator_less_than_symbol();
  let fruits = fruits_of_the_spirit();
  let inside_shown = list_get(fruits, 0);
  let after_shown = list_get(fruits, 1);
  let condition = js_code_binary_spaced_nb("a", less, "b");
  function setup_get(left, right) {
    "let a = left; let b = right;";
    let right2 = json_to(left);
    let code = js_code_let_statement("a", right2);
    let right3 = json_to(right);
    let code2 = js_code_let_statement("b", right3);
    let setup = [code, code2];
    return setup;
  }
  function parts_get(pair, runs) {
    "the smaller number in a when the if runs, the larger when it does not";
    let small = list_first(pair);
    let big = list_last(pair);
    if (runs) {
      let v = setup_get(small, big);
      let parts = [v, condition];
      return parts;
    }
    let v2 = setup_get(big, small);
    let parts2 = [v2, condition];
    return parts2;
  }
  function above(root, context) {
    "If less than remembered, then the numbers held by names, true and then false";
    let brace_left = js_code_brace_left();
    let brace_right = js_code_brace_right();
    let small_first = js_code_binary_spaced_nb(2, less, 3);
    let big_first = js_code_binary_spaced_nb(3, less, 2);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_if_less_than,
      [
        "",
        small_first,
        " is ",
        "true",
        ", so the lines inside ",
        brace_left,
        " and ",
        brace_right,
        " run:",
      ],
    );
    let both = list_join_newline([inside_shown, after_shown]);
    let remember_lines = app_code_if_program_lines(
      [],
      small_first,
      inside_shown,
      after_shown,
      true,
    );
    app_code_code_lines_writes_out(box_one, remember_lines, both);
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, ["Names can hold the numbers instead:"]);
    let setup2 = setup_get(2, 3);
    let true_lines = app_code_if_program_lines(
      setup2,
      condition,
      inside_shown,
      after_shown,
      true,
    );
    app_code_code_lines_writes_out(box_two, true_lines, both);
    html_div_cycle_code(box_two, ["", condition, " is ", small_first]);
    html_div_cycle_code(box_two, ["", small_first, " is ", "true"]);
    html_div_cycle_code(box_two, [
      "So the lines inside ",
      brace_left,
      " and ",
      brace_right,
      " run",
    ]);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "But suppose the names hold them the other way:",
    ]);
    let setup3 = setup_get(3, 2);
    let false_lines = app_code_if_program_lines(
      setup3,
      condition,
      inside_shown,
      after_shown,
      true,
    );
    app_code_code_lines_writes_out(box_three, false_lines, after_shown);
    html_div_cycle_code(box_three, ["", condition, " is ", big_first]);
    html_div_cycle_code(box_three, ["", big_first, " is ", "false"]);
    html_div_cycle_code(box_three, [
      "So the lines inside ",
      brace_left,
      " and ",
      brace_right,
      " do not run",
    ]);
  }
  let lesson = app_code_lesson_if_cases_generic(
    "If names compared",
    "if (a < b) { ... }",
    above,
    [
      [1, 4],
      [2, 7],
      [3, 6],
      [4, 9],
      [5, 8],
    ],
    parts_get,
  );
  return lesson;
}
