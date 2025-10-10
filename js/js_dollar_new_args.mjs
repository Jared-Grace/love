import { js_dollar_new_args_inner } from "../../../love/public/src/js_dollar_new_args_inner.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { js_dollar_new_name } from "../../../love/public/src/js_dollar_new_name.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function js_dollar_new_args(code) {
  let combined = js_dollar_new_name(code);
  await function_transform(combined, js_dollar_new_args_inner);
  marker("1");
}
