import { function_transform_prompt_self } from "../../../love/public/src/function_transform_prompt_self.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { app_code_container_light_blue_text } from "../../../love/public/src/app_code_container_light_blue_text.mjs";
import { app_code_lesson_same_message } from "../../../love/public/src/app_code_lesson_same_message.mjs";
import { app_code_lesson_identifiers_symbol_first_generic } from "../../../love/public/src/app_code_lesson_identifiers_symbol_first_generic.mjs";
export function app_code_lesson_identifiers_symbol_first_unseparated() {
  let symbol_create = app_code_symbol;
  let name = "Identifiers (first symbol, unseparated)";
  let id = "identifiers_symbol_first_unseparated";
  let r = app_code_lesson_identifiers_symbol_first_generic(
    symbol_create,
    name,
    id,
    above,
  );
  async function above(root) {
    let text = app_code_lesson_same_message("the symbols are not separated");
    app_code_container_light_blue_text(root, text);
    let c = app_code_container_light_blue(root);
    let div = html_div(c);
    let batch = property_get(r, "batch");
    let b = batch();
    let first = list_first(b);
    let question = property_get(first, "question");
    let span = html_span_text(div, text2);
    let v = await function_transform_prompt_self(f_name);
    html_span_text(div);
    let span2 = html_span_text(div, text2);
    log(app_code_lesson_identifiers_symbol_first_unseparated.name, {
      question,
    });
  }
  return r;
}
