import { list_first } from "../../../love/public/src/list_first.mjs";
import { function_params_get } from "../../../love/public/src/function_params_get.mjs";
import { function_params_delete } from "../../../love/public/src/function_params_delete.mjs";
export async function function_params_delete_first(f_name, param_names_comma) {
  let params = await function_params_get(unaliased);
  let first = list_first(list);
  let r = await function_params_delete(f_name, param_names_comma);
  return r;
}
