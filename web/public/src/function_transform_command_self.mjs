import { function_transform_prompt } from "../../../love/public/src/function_transform_prompt.mjs";
export async function function_transform_command_self(f_name) {
  let v = await function_transform_prompt(f_name, f_name);
  return v;
}
