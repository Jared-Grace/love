import { fn_name } from "./fn_name.mjs";
import { lock_wait } from "./lock_wait.mjs";
export async function lock_wait_prompt(lambda, who) {
  let r2 = await lock_wait(fn_name("function_run_prompt"), lambda, who);
  return r2;
}
