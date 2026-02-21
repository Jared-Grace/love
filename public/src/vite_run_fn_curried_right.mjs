import { vite_run_fn } from "../../../love/public/src/vite_run_fn.mjs";
export function vite_run_fn_curried_right(path_prefix) {
  let r2 = async function vite_run_fn_curried_right_result(f_name) {
    let r = await vite_run_fn(f_name);
    return r;
  };
  return r2;
}
