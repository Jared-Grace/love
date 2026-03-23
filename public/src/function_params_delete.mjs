import { function_param_delete } from "../../../love/public/src/function_param_delete.mjs";
export async function function_params_delete(f_name, param_name) {
  let r = await function_param_delete(f_name, param_name);
  return r;
}
