import { function_multiple_param_delete_generic } from "../../../love/public/src/function_multiple_param_delete_generic.mjs";
import { function_param_delete } from "../../../love/public/src/function_param_delete.mjs";
export async function function_multiple_param_delete(
  f_names_comma,
  param_name,
) {
  let fn = function_param_delete;
  await function_multiple_param_delete_generic(f_names_comma, param_name);
}
