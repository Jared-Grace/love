import { app_code_category_operators } from "./app_code_category_operators.mjs";
import { app_code_lesson_validity_code } from "./app_code_lesson_validity_code.mjs";
import { app_code_lesson_name_id_symbol } from "./app_code_lesson_name_id_symbol.mjs";
export function app_code_lesson_validity_operator(
  rights,
  symbol,
  batch,
  above,
) {
  let name_id = app_code_lesson_name_id_symbol(
    app_code_category_operators(),
    rights,
    symbol,
  );
  let lesson = app_code_lesson_validity_code(batch, name_id, above);
  return lesson;
}
