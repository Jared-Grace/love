import { app_code_lesson_validity_code } from "./app_code_lesson_validity_code.mjs";
import { app_code_lesson_name_id_symbol } from "./app_code_lesson_name_id_symbol.mjs";
export function app_code_lesson_validity_operator(math_name, symbol, batch, above) {
  let name_id = app_code_lesson_name_id_symbol("operators", [math_name], symbol);
  let lesson = app_code_lesson_validity_code(batch, name_id, above);
  return lesson;
}
