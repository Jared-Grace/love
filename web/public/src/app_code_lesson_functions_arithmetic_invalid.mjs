import { list_between_empty } from "../../../love/public/src/list_between_empty.mjs";
import { app_code_lesson_name_id } from "../../../love/public/src/app_code_lesson_name_id.mjs";
import { app_code_lesson_validity_code } from "../../../love/public/src/app_code_lesson_validity_code.mjs";
import { range_1_next } from "../../../love/public/src/range_1_next.mjs";
import { app_code_lesson_operators_generic_batch_get_max } from "../../../love/public/src/app_code_lesson_operators_generic_batch_get_max.mjs";
import { js_operators } from "../../../love/public/src/js_operators.mjs";
export function app_code_lesson_functions_arithmetic_invalid() {
  let name_id = app_code_lesson_name_id("functions", ["arithmetic", "invalid"]);
  let operators = js_operators();
  let m = app_code_lesson_operators_generic_batch_get_max();
  let next = range_1_next(m);
  function batch_get() {
    let mapped = [];
    return mapped;
  }
  let lesson = app_code_lesson_validity_code(batch_get, name_id, above);
  return lesson;
  function above(root) {
    let parts = [
      "function_name",
      "(",
      "any_arguments",
      ",",
      "separated_by_commas",
      ")",
    ];
    let combined = list_between_empty(parts);
    ("Function calls require all of these parts: ");
  }
}
