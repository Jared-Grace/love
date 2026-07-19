import { function_run } from "./function_run.mjs";
export async function function_run_from_process_argv() {
  const [, , f_name, ...args] = process.argv;
 let result=await function_run(f_name, args)
  return result
}
