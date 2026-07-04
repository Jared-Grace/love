import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { app_code_lesson_identifiers_symbol_first_generic } from "../../../love/public/src/app_code_lesson_identifiers_symbol_first_generic.mjs";
export function app_code_lesson_identifiers_symbol_first_unseparated() {
  let symbol_create = html_span_text;
  let name = "Identifiers (first symbol, unseparated)";
  let id = "identifiers_symbol_first_unseparated";
  function above(root) {
    let c2 = app_code_container_light_blue(root);
    let div = html_div_text(
      c,
      "This lesson is the same as the previous lesson, except ",
      "there are not numbers underneath",
    );
  }
  let r = app_code_lesson_identifiers_symbol_first_generic(
    symbol_create,
    name,
    id,
    above,
  );
  return r;
}
