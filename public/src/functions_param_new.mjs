import { functions_param_delete_generic } from "../../../love/public/src/functions_param_delete_generic.mjs";
import { function_param_new } from "../../../love/public/src/function_param_new.mjs";
export async function functions_param_new(
  f_names_comma,
  param_name,
  default_value,
) {
  let fn = async function lambda(param_name) {
    let v = await function_param_new(param_name, default_value);
    return v;
  };
  await functions_param_delete_generic(f_names_comma, param_name, fn);
}
