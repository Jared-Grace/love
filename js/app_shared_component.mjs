import { html_bar_content_padded } from "./html_bar_content_padded.mjs";
import { html_margin_0 } from "./html_margin_0.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_code_global_init } from "./js_code_global_init.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { app_context_initialize_root } from "./app_context_initialize_root.mjs";
import { function_dependencies_code_unaliased } from "./function_dependencies_code_unaliased.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_name_main } from "./app_shared_name_main.mjs";
import { html_button_wide } from "./html_button_wide.mjs";
export async function app_shared_component(a_name, on_click, button_text) {
  let combined = await app_shared_name_main(a_name);
  let v = await function_dependencies_code_unaliased(combined);
  let d = property_get(v, "d");
  let code = property_get(d, "code");
  let code_assign = js_code_global_init();
  let list = [code_assign, code, combined];
  let joined = list_join_newline(list);
  let fn = eval(joined);
  let root = html_document_body();
  html_margin_0(root);
  html_clear(root);
  let bc = html_bar_content_padded(root);
  let content = property_get(bc, "content");
  let bar = property_get(bc, "bar");
  let component = html_button_wide(bar, button_text, on_click);
  await app_context_initialize_root(content, fn);
}
