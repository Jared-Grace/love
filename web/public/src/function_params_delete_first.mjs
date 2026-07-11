import { function_params_delete } from "../../../love/public/src/function_params_delete.mjs";
export async function function_params_delete_first(f_name, param_names_comma) {
  let r = await function_params_delete(f_name, param_names_comma);
  return r;
}
