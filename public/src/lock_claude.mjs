import { lock_wait } from "../../../love/public/src/lock_wait.mjs";
import { function_run_prompt } from "../../../love/public/src/function_run_prompt.mjs";
export async function lock_claude(lambda) {
  function lambda2() {}
  let r = await lock_wait(function_run_prompt.name, lambda2);
  return r;
}
