import { function_name_combine } from "./function_name_combine.mjs";
import { function_new_transform } from "./function_new_transform.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { function_new } from "./function_new.mjs";
export async function function_new_js(f_name_unprefixed) {
  let combined = function_name_combine("js", f_name_unprefixed);
  marker();
  await function_new_transform(combined, lambda);
  async function lambda(ast) {}
}
