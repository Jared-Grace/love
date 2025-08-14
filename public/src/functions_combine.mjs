import { function_new_transform } from "./function_new_transform.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { string_split } from "./string_split.mjs";
export async function functions_combine(f_names) {
  let split = string_split_comma(f_names);
  async function lambda2() {}
  await function_new_transform(f_name, lambda2);
}
