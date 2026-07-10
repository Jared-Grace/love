import { function_run_prompt } from "../../../love/public/src/function_run_prompt.mjs";
import { lock_generic } from "../../../love/public/src/lock_generic.mjs";
export async function lock_claude(lambda) {
  let r = await lock_generic(function_run_prompt.name, wait, lambda);
  return r;
}
