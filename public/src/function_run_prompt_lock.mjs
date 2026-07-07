import { function_run_prompt } from "../../../love/public/src/function_run_prompt.mjs";
import { lock_wait } from "../../../love/public/src/lock_wait.mjs";
export async function function_run_prompt_lock(lambda2) {
  let r2 = await lock_wait(function_run_prompt.name, lambda2);
  return r2;
}
