import { js_dollar_new_args_inner } from "./js_dollar_new_args_inner.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_dollar_new_name } from "./js_dollar_new_name.mjs";
import { marker } from "./marker.mjs";
export async function js_dollar_new_args(code) {
  let combined = js_dollar_new_name(code);
  await function_transform(combined, js_dollar_new_args_inner);
  marker("1");
}
