import { vite_run_fn } from "../../../love/public/src/vite_run_fn.mjs";
export async function vite_run_fn_curried_right(path_prefix) {
  return async function vite_run_fn_curried_right_result(f_name) {
    return await vite_run_fn(f_name, path_prefix);
  };
}
