import { function_run_args_none } from "../../../love/public/src/function_run_args_none.mjs";
export async function function_run_args_none_fn(fn) {
  let r = await function_run_args_none(fn.name);
  return r;
}
