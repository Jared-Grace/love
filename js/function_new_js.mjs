import { function_new_js_inner } from "./function_new_js_inner.mjs";
import { function_new_js_name } from "./function_new_js_name.mjs";
export async function function_new_js(f_name_unprefixed) {
  "Creates a new js transform fn with the ast parameter already in place, and stops there";
  "The variant named for opening does this and then shows the human the result";
  let combined = function_new_js_name(f_name_unprefixed);
  await function_new_js_inner(combined);
  return combined;
}
