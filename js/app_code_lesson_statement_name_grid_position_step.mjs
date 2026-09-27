import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
export function app_code_lesson_statement_name_grid_position_step() {
  arguments_assert(arguments, 0);
  ("the lines of the grid-position lesson: let row = Math.floor(index / width); let column = index % width; - and row and column are written out");
  ("A grid kept as one long numbered line is found this way in many algorithms, so it is one of the formulas chosen by later use, at the human's request, 2026-09-27.");
  let index = "index";
  let width = "width";
  let row = "row";
  let column = "column";
  let slash = js_operator_division_symbol();
  let percent = js_operator_percent_symbol();
  let divided = js_code_binary_spaced_nb(index, slash, width);
  let floor_name = js_code_math_floor_name();
  let rounded = js_code_call_args(floor_name, [divided]);
  let line_row = js_code_let_statement(row, rounded);
  let left = js_code_binary_spaced_nb(index, percent, width);
  let line_column = js_code_let_statement(column, left);
  let step = {
    middle: [line_row, line_column],
    logged: [row, column],
  };
  return step;
}
