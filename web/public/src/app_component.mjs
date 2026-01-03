import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { html_margin_0 } from "../../../love/public/src/html_margin_0.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { js_code_global_init } from "../../../karate_code/public/src/js_code_global_init.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_karate_button_back_text } from "../../../love/public/src/app_karate_button_back_text.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { app_context_initialize_root } from "../../../love/public/src/app_context_initialize_root.mjs";
import { function_dependencies_code_unaliased } from "../../../love/public/src/function_dependencies_code_unaliased.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
export async function app_component(a_name, back) {
  marker("1");
  let combined = app_name_main(a_name);
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
  let shell = html_div(root);
  html_style_assign(shell, {
    display: "flex",
    "flex-direction": "column",
    height: "100dvh",
  });
  let bar = html_div(shell);
  html_style_assign(bar, {
    flex: "0 0 auto",
  });
  let text = app_karate_button_back_text();
  function lambda() {
      app_generic_refresh_screen(context, without);}
  let component = html_button(bar, text, lambda);
  html_width_full(component);
  let div = html_div(shell);
  html_style_assign(div, {
    flex: "1 1 auto",
    "min-height": "0",
    position: "relative",
    overflow: "hidden",
  });
  await app_context_initialize_root(div, fn);
}
