import { function_param_new_error_value_default } from "./function_param_new_error_value_default.mjs";
import { functions_param_new_multiple } from "./functions_param_new_multiple.mjs";
export async function functions_param_new_multiple_error(
  f_names_comma,
  param_names,
) {
  let default_value = function_param_new_error_value_default();
  let r = await functions_param_new_multiple(
    f_names_comma,
    param_names,
    default_value,
  );
  return r;
}
