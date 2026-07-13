import { function_run_prompt } from "../../love/js/function_run_prompt.mjs";
import { lock_wait } from "../../love/js/lock_wait.mjs";
export async function lock_wait_prompt(lambda, who) {
  let r2 = await lock_wait(function_run_prompt.name, lambda, who);
  return r2;
}
