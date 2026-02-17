import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
export async function function_multiplize(f_name) {
  let combined = function_name_combine(f_name, "multiple");
  async function lambda(ast) {}
  let output = await function_new_transform(f_name, lambda);
}
