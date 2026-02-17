import { js_call_insert } from "../../../love/public/src/js_call_insert.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
export async function function_multiplize(f_name) {
  let combined = function_name_combine(f_name, "multiple");
  async function lambda(ast) {
    js_call_insert(f_name2, args_code, list, index);
  }
  let output = await function_new_transform(combined, lambda);
}
