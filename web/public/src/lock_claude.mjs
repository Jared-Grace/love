import { promise_wrap } from "../../../love/public/src/promise_wrap.mjs";
import { lock_wait } from "../../../love/public/src/lock_wait.mjs";
import { function_run_prompt } from "../../../love/public/src/function_run_prompt.mjs";
export async function lock_claude() {
  async function lambda2() {
    async function lambda(resolve, reject) {}
    let p = await promise_wrap(lambda);
  }
  await lock_wait(function_run_prompt.name, lambda2);
  return r;
}
