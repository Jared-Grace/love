import { function_param_delete } from "../../../love/public/src/function_param_delete.mjs";
export async function function_param_delete_curried(f_name) {
  let r2 = async function function_param_delete_curried_result(param_name) {
    let r = await function_param_delete(f_name, param_name);
    return r;
  };
  return r2;
}
