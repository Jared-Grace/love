import { function_run } from "./function_run.mjs";
export async function function_run_args_none(f_name) {
  let r = await function_run(f_name, []);
  return r;
}
