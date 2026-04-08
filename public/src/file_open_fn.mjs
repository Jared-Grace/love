import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { function_run_args_none } from "../../../love/public/src/function_run_args_none.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
export async function file_open_fn(f_path_get) {
  let r2 = await function_run_args_none(fn_name);
  let f_path = f_path_get();
  let r = await file_open(f_path);
  return r;
}
