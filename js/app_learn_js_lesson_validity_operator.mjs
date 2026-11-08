import { app_learn_js_category_operators } from "./app_learn_js_category_operators.mjs";
import { app_learn_js_lesson_validity_code } from "./app_learn_js_lesson_validity_code.mjs";
import { app_learn_js_lesson_name_id_symbol } from "./app_learn_js_lesson_name_id_symbol.mjs";
export function app_learn_js_lesson_validity_operator(
  rights,
  symbol,
  batch,
  above,
) {
  let name_id = app_learn_js_lesson_name_id_symbol(
    app_learn_js_category_operators(),
    rights,
    symbol,
  );
  let lesson = app_learn_js_lesson_validity_code(batch, name_id, above);
  return lesson;
}
