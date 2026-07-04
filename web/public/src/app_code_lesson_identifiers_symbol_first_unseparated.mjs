import { app_code_container_light_blue_text } from "../../../love/public/src/app_code_container_light_blue_text.mjs";
import { app_code_lesson_same_message } from "../../../love/public/src/app_code_lesson_same_message.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { app_code_lesson_identifiers_symbol_first_generic } from "../../../love/public/src/app_code_lesson_identifiers_symbol_first_generic.mjs";
export function app_code_lesson_identifiers_symbol_first_unseparated() {
  let symbol_create = html_span_text;
  let name = "Identifiers (first symbol, unseparated)";
  let id = "identifiers_symbol_first_unseparated";
  function above(root) {
    let text = app_code_lesson_same_message("the symbols are not separated");
    app_code_container_light_blue_text(root, text);
  }
  let r = app_code_lesson_identifiers_symbol_first_generic(
    symbol_create,
    name,
    id,
    above,
  );
  return r;
}
