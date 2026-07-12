import { function_run_prompt } from "../../love/js/function_run_prompt.mjs";
import { lock_try } from "../../love/js/lock_try.mjs";
export async function lock_try_prompt(lambda, who) {
  let r = await lock_try(function_run_prompt.name, lambda, who);
  return r;
}
