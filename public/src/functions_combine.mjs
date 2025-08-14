import { function_new_transform } from "./function_new_transform.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { string_split } from "./string_split.mjs";
export async function functions_combine(f_names) {
  let split = string_split_comma(f_names);
  await function_new_transform(f_name, async function lambda2() {});
}
