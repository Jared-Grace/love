import { js_auto } from "../../../love/public/src/js_auto.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function function_auto(f_name) {
  await function_transform(f_name, js_auto);
  return;
}
