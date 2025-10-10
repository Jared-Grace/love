import { js_auto } from "../../../love/public/src/js_auto.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_auto(f_name) {
  marker("1");
  await function_transform(f_name, js_auto);
  return;
}
