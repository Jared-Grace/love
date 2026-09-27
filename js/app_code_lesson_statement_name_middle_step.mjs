import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
export function app_code_lesson_statement_name_middle_step() {
  arguments_assert(arguments, 0);
  ("the lines of the middle lesson: let sum = low + high; let middle = Math.floor(sum / 2); - and middle is written out");
  ("This is the middle a search through a sorted list looks at on every step, which is why it is taught: the formulas split into short lines are chosen by whether a later algorithm uses them, at the human's request, 2026-09-27.");
  let low = "low";
  let high = "high";
  let sum = "sum";
  let middle_name = "middle";
  let plus = js_operator_plus_symbol();
  let slash = js_operator_division_symbol();
  let added = js_code_binary_spaced_nb(low, plus, high);
  let line_sum = js_code_let_statement(sum, added);
  let halved = js_code_binary_spaced_nb(sum, slash, "2");
  let floor_name = js_code_math_floor_name();
  let rounded = js_code_call_args(floor_name, [halved]);
  let line_middle = js_code_let_statement(middle_name, rounded);
  let step = {
    middle: [line_sum, line_middle],
    logged: [middle_name],
  };
  return step;
}
