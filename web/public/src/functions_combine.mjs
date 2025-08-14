import { js_code_call_args_await_maybe } from "./js_code_call_args_await_maybe.mjs";
import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { function_new_transform } from "./function_new_transform.mjs";
import { string_split_comma } from "./string_split_comma.mjs";
import { string_split } from "./string_split.mjs";
export async function functions_combine(f_names) {
  let split = string_split_comma(f_names);
  let combined = function_name_combine_multiple(split);
  async function lambda2() {
    let code = js_code_call_args_await_maybe(unaliased, args_code, declaration);
  }
  await function_new_transform(combined, lambda2);
}
