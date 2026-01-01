import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_a_main } from "../../../love/public/src/app_a_main.mjs";
import { app_karate_button_back_text } from "../../../love/public/src/app_karate_button_back_text.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { newline } from "../../../love/public/src/newline.mjs";
import { app_context_initialize_root } from "../../../love/public/src/app_context_initialize_root.mjs";
import { function_dependencies_code_unaliased } from "../../../love/public/src/function_dependencies_code_unaliased.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
export async function app_component(a_name) {
  let combined = app_name_main(a_name);
  let v = await function_dependencies_code_unaliased(combined);
  let d = object_property_get(v, "d");
  let code = object_property_get(d, "code");
  code += newline() + combined;
  let fn = eval(code);
  let root = html_document_body();
  async function lambda2() {
    await app_a_main();
  }
  let text = app_karate_button_back_text();
  html_clear(root);
  let component = html_button(root, text, lambda2);
  let div = html_div(root);
  await app_context_initialize_root(div, fn);
}
