import { function_name_combine } from "./function_name_combine.mjs";
import { function_new_transform } from "./function_new_transform.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { function_new } from "./function_new.mjs";
export async function function_new_js(f_name_unprefixed) {
  marker();
  function_name_combine(left, right);
  await function_new_transform(f_name_unprefixed, lambda);
  async function lambda(ast) {}
}
