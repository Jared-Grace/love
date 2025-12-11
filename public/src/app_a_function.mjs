import { html_button } from "../../../love/public/src/html_button.mjs";
import { app_a_control_style } from "../../../love/public/src/app_a_control_style.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { html_pre_text } from "../../../love/public/src/html_pre_text.mjs";
import { app_a_api } from "../../../love/public/src/app_a_api.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
export async function app_a_function(context) {
  function lambda2() {}
  let b = html_button(parent, emoji_search(), lambda2);
  app_a_control_style(b);
  let { app_fn, root } = context;
  let f_name = storage_local_get(app_fn, "f_name_selected");
  html_clear(root);
  let function_name = fn_name("function_read");
  let code = await app_a_api(function_name, [f_name]);
  let p = html_pre_text(root, code);
}
