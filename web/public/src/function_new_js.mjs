import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { function_new } from "./function_new.mjs";
export async function function_new_js(name) {
  await function_new(name);
  marker();
  await function_transform(f_name, async function lambda(ast) {});
}
