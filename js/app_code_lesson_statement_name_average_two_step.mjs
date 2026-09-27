import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
export function app_code_lesson_statement_name_average_two_step() {
  arguments_assert(arguments, 0);
  ("the lines of the average-of-two lesson: let sum = a + b; let average = sum / 2; - and average is written out");
  let names = app_code_lesson_statement_name_value_names();
  let name_a = list_first(names);
  let name_b = list_second(names);
  let sum = "sum";
  let average = "average";
  let plus = js_operator_plus_symbol();
  let slash = js_operator_division_symbol();
  let added = js_code_binary_spaced_nb(name_a, plus, name_b);
  let line_sum = js_code_let_statement(sum, added);
  let divided = js_code_binary_spaced_nb(sum, slash, "2");
  let line_average = js_code_let_statement(average, divided);
  let step = {
    middle: [line_sum, line_average],
    logged: [average],
  };
  return step;
}
