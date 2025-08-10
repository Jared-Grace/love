import { marker } from "./marker.mjs";
import { function_new } from "./function_new.mjs";
export async function function_new_js(name) {
  marker();
  await function_new(name);
}
