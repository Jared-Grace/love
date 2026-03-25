import { js_auto } from "../../../love/public/src/js_auto.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function function_auto(f_name) {
  let unaliased=function_name_unalias_only(f_name)
  await function_transform(unaliased, js_auto);
  return;
}
