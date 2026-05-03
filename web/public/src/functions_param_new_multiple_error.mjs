import { functions_param_new_multiple } from "../../../love/public/src/functions_param_new_multiple.mjs";
export async function functions_param_new_multiple_error(
  f_names_comma,
  param_names,
  default_value,
) {
  return await functions_param_new_multiple(
    f_names_comma,
    param_names,
    default_value,
  );
}
