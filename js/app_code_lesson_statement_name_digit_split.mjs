import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { app_code_lesson_statement_name_grid_position_step } from "./app_code_lesson_statement_name_grid_position_step.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_grid_position } from "./app_code_lesson_statement_name_grid_position.mjs";
export function app_code_lesson_statement_name_digit_split() {
  arguments_assert(arguments, 0);
  ("a number's last digit and the number left in front of it: let digit = n % 10; let rest = Math.floor(n / 10);");
  ("Chosen for later use: adding up a number's digits, reversing a number, and checking one reads the same both ways all take one digit off at a time with these two lines, once loops are taught.");
  ("It is the chair lesson with rows of 10, so that lesson is the one remembered: a chair's column is its last digit and its row is the rest.");
  ("No answer's two lines are the same, no digit is 0, and the five answers differ.");
  let names = ["n"];
  let n = list_first(names);
  let ten = "10";
  let digit = "digit";
  let rest = "rest";
  let percent = js_operator_percent_symbol();
  let slash = js_operator_division_symbol();
  let left_over = js_code_binary_spaced_nb(n, percent, ten);
  let line_digit = js_code_let_statement(digit, left_over);
  let divided = js_code_binary_spaced_nb(n, slash, ten);
  let floor_name = js_code_math_floor_name();
  let rounded = js_code_call_args(floor_name, [divided]);
  let line_rest = js_code_let_statement(rest, rounded);
  let step = {
    middle: [line_digit, line_rest],
    logged: [digit, rest],
  };
  let before = app_code_lesson_statement_name_grid_position_step();
  let middle_before = property_get(before, "middle");
  let logged_before = property_get(before, "logged");
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      ["chair", 23],
      ["columns", 10],
    ],
    middle_before,
    logged_before,
  );
  function values_get() {
    "four of the five, in a fresh order each screen";
    let candidates = [[47], [93], [258], [61], [734]];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let lesson = app_code_lesson_statement_formula({
    words: "Last digit and the rest",
    title_code: line_digit,
    names,
    values_get,
    example_values: [35],
    step,
    remember_lesson: app_code_lesson_statement_name_grid_position,
    remember_parts: ["we can find the row and column of a chair:"],
    remember_lines,
    explain: [
      [
        "With rows of 10 chairs, the column is the last digit and the row is the rest",
      ],
      ["So ", percent, " 10 takes off the last digit:"],
      ["", line_digit],
      [
        "And dividing by 10, rounded down with ",
        floor_name,
        ", leaves the rest",
      ],
      ["For 35 the digit is 5 and the rest is 3:"],
    ],
    decoys: null,
  });
  return lesson;
}
