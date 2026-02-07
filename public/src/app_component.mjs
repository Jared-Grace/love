import { html_bar_content_padded } from "../../../love/public/src/html_bar_content_padded.mjs";
import { html_margin_0 } from "../../../love/public/src/html_margin_0.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { js_code_global_init } from "../../../karate_code/public/src/js_code_global_init.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { app_context_initialize_root } from "../../../love/public/src/app_context_initialize_root.mjs";
import { function_dependencies_code_unaliased } from "../../../love/public/src/function_dependencies_code_unaliased.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_shared_name_main } from "../../../love/public/src/app_shared_name_main.mjs";
import { html_button_width_full } from "../../../love/public/src/html_button_width_full.mjs";
export async function app_component(a_name, on_click, button_text) {
  let combined = app_shared_name_main(a_name);
  let v = await function_dependencies_code_unaliased(combined);
  let d = object_property_get(v, "d");
  let code = object_property_get(d, "code");
  let code_assign = js_code_global_init();
  let list = [code_assign, code, combined];
  let joined = list_join_newline(list);
  let fn = eval(joined);
  let root = html_document_body();
  html_margin_0(root);
  html_clear(root);
  let bc = html_bar_content_padded(root);
  let content = object_property_get(bc, "content");
  let bar = object_property_get(bc, "bar");
  let component = html_button_width_full(bar, button_text, on_click);
  await app_context_initialize_root(content, fn);
}
