import { lock_wait_prompt } from "../../love/js/lock_wait_prompt.mjs";
export async function function_run_prompt_lock(lambda) {
  $a;
  let who = function_run_prompt_lock.name;
  let r = await lock_wait_prompt(lambda, who);
  return r;
}
