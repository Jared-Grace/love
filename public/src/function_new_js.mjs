import { function_new_js_inner } from "./function_new_js_inner.mjs";
import { function_new_js_name } from "./function_new_js_name.mjs";
export async function function_new_js(f_name_unprefixed) {
  let combined = function_new_js_name(f_name_unprefixed);
  await function_new_js_inner(combined);
}
