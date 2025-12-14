import { app_a_button } from "../../../love/public/src/app_a_button.mjs";
import { html_font_jetbrains_mono } from "../../../love/public/src/html_font_jetbrains_mono.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_a_function_node } from "../../../love/public/src/app_a_function_node.mjs";
import { js_parse } from "../../../love/public/src/js_parse.mjs";
import { app_a_home } from "../../../love/public/src/app_a_home.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { emoji_search } from "../../../love/public/src/emoji_search.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { app_api } from "../../../love/public/src/app_api.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
export async function app_a_function(context) {
  let function_name = fn_name("function_read");
  let code = await app_api(function_name, [f_name]);
  let { app_fn, root } = context;
  let f_name = storage_local_get(app_fn, "f_name_selected");
  html_clear(root);
  function lambda2() {
    app_generic_screen_set(context, app_a_home);
  }
  let text = emoji_search();
  let b = app_a_button(root, text, lambda2);
  let div = html_div(root);
  html_font_jetbrains_mono(div);
  html_style_assign(div, {
    "overflow-wrap": "break-word",
    "word-break": "break-word",
    "font-weight": "500",
  });
  let ast = js_parse(code);
  app_a_function_node({
    node: ast,
    parent: div,
    context,
    indent: 0,
    root,
  });
}
