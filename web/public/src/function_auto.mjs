import { js_auto } from "./js_auto.mjs";
import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
export async function function_auto(f_name) {
  marker("1");
  await function_transform(f_name, js_auto);
  return;
}
