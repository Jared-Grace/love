import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { app_shared_name_prefixed } from "../../../love/public/src/app_shared_name_prefixed.mjs";
export async function app_shared_screen_add_generic(a_name, lambda) {
  let prefixed = app_shared_name_prefixed(a_name);
  let combined = function_name_combine(prefixed, "screens");
  async function lambda_ftms(ast) {
    let elements = js_array_expression_single_elements(ast);
    await lambda(elements, prefixed);
  }
  let result = await function_transform(combined, lambda_ftms);
  return result;
}
