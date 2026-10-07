import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { multiply } from "./multiply.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_if_program_lines } from "./app_code_if_program_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { app_code_lesson_if_cases_generic } from "./app_code_lesson_if_cases_generic.mjs";
export function app_code_lesson_if_steps() {
  arguments_assert(arguments, 0);
  ('practice: a value worked out over several lines, then an if at the end: let a = 4; let b = a * 3; let c = b - 5; if (c < 10) { console.log("love"); } console.log("joy");');
  ("Asked by the human 2026-10-07 as one practice before else: a multistep computation that then uses if at the end. Nothing in it is new; every line is one the learner has worked out before, and the if asks only what the last three lessons asked.");
  ("The comparison is with a number 3 above what c holds when the if runs, and 1 below when it does not, so it is near enough that c has to be worked out rather than guessed. Not picked: c compared with itself, c < c, which is false though it can look true, a lesson of its own.");
  ("The writing is a first draft by Claude 2026-10-07.");
  let less = js_operator_less_than_symbol();
  let times = js_operator_asterisk_symbol();
  let minus = js_operator_minus_symbol();
  let fruits = fruits_of_the_spirit();
  let inside_shown = list_get(fruits, 0);
  let after_shown = list_get(fruits, 1);
  function c_get(seed) {
    "what c holds: a times the multiplier, less the amount taken away";
    let a = list_get(seed, 0);
    let m = list_get(seed, 1);
    let s = list_get(seed, 2);
    let left = multiply(a, m);
    let c = subtract(left, s);
    return c;
  }
  function limit_get(seed, runs) {
    "3 above c when the if runs, 1 below when it does not";
    let c = c_get(seed);
    if (runs) {
      let above_c = c + 3;
      return above_c;
    }
    let below_c = subtract(c, 1);
    return below_c;
  }
  function setup_get(seed) {
    "let a = 4; let b = a * 3; let c = b - 5;";
    let a = list_get(seed, 0);
    let m = list_get(seed, 1);
    let s = list_get(seed, 2);
    let right = json_to(a);
    let code = js_code_let_statement("a", right);
    let right2 = js_code_binary_spaced_nb("a", times, m);
    let code2 = js_code_let_statement("b", right2);
    let right3 = js_code_binary_spaced_nb("b", minus, s);
    let code3 = js_code_let_statement("c", right3);
    let setup = [code, code2, code3];
    return setup;
  }
  function condition_get(seed, runs) {
    "c < limit";
    let right4 = limit_get(seed, runs);
    let c = js_code_binary_spaced_nb("c", less, right4);
    return c;
  }
  function parts_get(seed, runs) {
    "the steps, then c compared with a number above or below it";
    let v = setup_get(seed);
    let v2 = condition_get(seed, runs);
    let parts = [v, v2];
    return parts;
  }
  function above(root, context) {
    "one program worked out a line at a time";
    let brace_left = js_code_brace_left();
    let brace_right = js_code_brace_right();
    let seed = [4, 3, 5];
    let condition = condition_get(seed, true);
    let box = app_code_container_light_blue(root);
    html_div_cycle_code(box, [
      "Each line can work something out, and an ",
      "if",
      " at the end can use the answer:",
    ]);
    let setup2 = setup_get(seed);
    let lines = app_code_if_program_lines(
      setup2,
      condition,
      inside_shown,
      after_shown,
      true,
    );
    let both = list_join_newline([inside_shown, after_shown]);
    app_code_code_lines_writes_out(box, lines, both);
    html_div_cycle_code(box, ["", "a", " is ", "4"]);
    let combined = js_code_binary_spaced_nb(4, times, 3);
    html_div_cycle_code(box, ["", "b", " is ", combined, ", which is ", "12"]);
    let combined2 = js_code_binary_spaced_nb(12, minus, 5);
    html_div_cycle_code(box, ["", "c", " is ", combined2, ", which is ", "7"]);
    let combined3 = js_code_binary_spaced_nb(7, less, 10);
    html_div_cycle_code(box, ["", combined3, " is ", "true"]);
    html_div_cycle_code(box, [
      "So the lines inside ",
      brace_left,
      " and ",
      brace_right,
      " run",
    ]);
  }
  let lesson = app_code_lesson_if_cases_generic(
    "Practice: steps, then if",
    "if (c < 10) { ... }",
    above,
    [
      [4, 3, 5],
      [3, 4, 2],
      [5, 2, 3],
      [2, 5, 4],
      [6, 2, 7],
    ],
    parts_get,
  );
  return lesson;
}
