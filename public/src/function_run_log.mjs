import { log_keep } from "./log_keep.mjs";
import { log } from "./log.mjs";
import { function_run } from "./function_run.mjs";
export async function function_run_log(funcName, args) {
  let result = await function_run(funcName, args);
  log_keep("result: " + result);
  return result;
}
