import { functions_param_delete_generic } from "../../../love/public/src/functions_param_delete_generic.mjs";
import { function_param_delete } from "../../../love/public/src/function_param_delete.mjs";
export async function functions_param_delete(f_names_comma, param_name) {
  let fn = function_param_delete;
  await functions_param_delete_generic(f_names_comma, param_name, fn);
}
