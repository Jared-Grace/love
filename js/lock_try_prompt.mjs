import { function_run_prompt } from "../../love/js/function_run_prompt.mjs";
import { lock_try } from "../../love/js/lock_try.mjs";
export async function lock_try_prompt(lambda3, who) {
  let r2 = await lock_try(function_run_prompt.name, lambda3, who);
  return r2;
}
