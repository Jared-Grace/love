import { js_auto_transform_new_inner } from "../../../love/public/src/js_auto_transform_new_inner.mjs";
import { function_new_js } from "../../../love/public/src/function_new_js.mjs";
export async function js_auto_transform_new(f_name_unprefixed) {
  await function_new_js(f_name_unprefixed);
  await js_auto_transform_new_inner(f_name_unprefixed);
}
