import { function_transform_prompt } from "../../../love/public/src/function_transform_prompt.mjs";
export async function function_transform_prompt_current(transformer_name) {
  let r = await function_transform_prompt(transformer_name, f_name);
  return r;
}
