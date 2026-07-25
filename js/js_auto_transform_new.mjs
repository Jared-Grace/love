import { js_auto_transform_new_inner } from "./js_auto_transform_new_inner.mjs";
import { function_new_js_open } from "./function_new_js_open.mjs";
export async function js_auto_transform_new(f_name_unprefixed) {
  await function_new_js_open(f_name_unprefixed);
  await js_auto_transform_new_inner(f_name_unprefixed);
}
