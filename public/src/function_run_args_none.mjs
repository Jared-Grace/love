import { function_run } from "../../../love/public/src/function_run.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export async function function_run_args_none(fn_name) {
  let r = await function_run(fn_name, []);
  return r;
}
