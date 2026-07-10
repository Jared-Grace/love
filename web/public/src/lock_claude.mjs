import { promise_wrap } from "../../../love/public/src/promise_wrap.mjs";
import { lock_wait } from "../../../love/public/src/lock_wait.mjs";
import { function_run_prompt } from "../../../love/public/src/function_run_prompt.mjs";
export async function lock_claude() {
  async function on_lock(resolve, reject) {
    let on_lock_resolve = resolve;
    let on_lock_reject = reject;
  }
  async function on_finish(resolve, reject) {
    let on_finish_resolve = resolve;
    let on_finish_reject = reject;
  }
  let p = await promise_wrap(on_lock);
  async function lambda2() {}
  await lock_wait(function_run_prompt.name, lambda2);
  return r;
}
