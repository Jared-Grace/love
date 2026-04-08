import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { function_transform_prompt } from "../../../love/public/src/function_transform_prompt.mjs";
export async function function_transform_prompt_current(transformer_name) {
  let f_name_current = await function_current_get();
  let r = await function_transform_prompt(transformer_name, f_name);
  return r;
}
