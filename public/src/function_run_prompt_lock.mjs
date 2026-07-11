import { function_run_prompt } from "../../../love/public/src/function_run_prompt.mjs";
import { lock_wait } from "../../../love/public/src/lock_wait.mjs";
export async function function_run_prompt_lock(lambda) {
  let r = await lock_wait(
    function_run_prompt.name,
    lambda,
    function_run_prompt_lock.name,
  );
  return r;
}
