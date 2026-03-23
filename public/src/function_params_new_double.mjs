import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
export async function function_params_new_double(f_name, param_names_comma) {
  let r = await function_params_new(
    f_name,
    param_names_comma,
    param_names_comma,
  );
  return r;
}
