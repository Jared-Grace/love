import { html_pre_text } from "../../../love/public/src/html_pre_text.mjs";
import { app_a_api } from "../../../love/public/src/app_a_api.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
export async function app_a_function(body, f_name) {
  html_clear(body);
  let function_name = fn_name("function_read");
  let code = await app_a_api(function_name, [f_name]);
  let p = html_pre_text(body, code);
}
