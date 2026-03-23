import { function_param_delete } from "../../../love/public/src/function_param_delete.mjs";
export async function function_param_delete_curried(f_name) {
  return async function function_param_delete_curried_result(param_name) {
    return await function_param_delete(f_name, param_name);
  };
}
