import { fn_name } from "./fn_name.mjs";
import { lock_try } from "./lock_try.mjs";
export async function lock_try_prompt(lambda, who) {
  let r = await lock_try(fn_name("function_run_prompt"), lambda, who);
  return r;
}
