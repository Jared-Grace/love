import { function_new_js } from "./function_new_js.mjs";
import { function_open } from "./function_open.mjs";
export async function function_new_js_open(f_name_unprefixed) {
  let combined = await function_new_js(f_name_unprefixed);
  await function_open(combined);
  return combined;
}
