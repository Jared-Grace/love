import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
export async function function_params_new_double(
  f_name,
  param_names_comma,
  values_default_comma,
) {
  return await function_params_new(
    f_name,
    param_names_comma,
    values_default_comma,
  );
}
