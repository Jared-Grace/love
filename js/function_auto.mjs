import { js_auto } from "./js_auto.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
export async function function_auto(f_name) {
  let unaliased = await function_name_unalias_only(f_name);
  await function_transform(unaliased, js_auto);
  return;
}
