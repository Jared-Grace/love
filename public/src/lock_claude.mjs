import { promise_wrap_unawait } from "../../../love/public/src/promise_wrap_unawait.mjs";
import { lock_wait } from "../../../love/public/src/lock_wait.mjs";
import { function_run_prompt } from "../../../love/public/src/function_run_prompt.mjs";
export async function lock_claude() {
  async function on_lock(resolve, reject) {
    let on_lock_resolve = null;
    on_lock_resolve = resolve;
    let on_lock_reject = null;
    on_lock_reject = reject;
  }
  async function on_finish(resolve, reject) {
    let on_finish_resolve = null;
    on_finish_resolve = resolve;
    let on_finish_reject = null;
    on_finish_reject = reject;
  }
  let p = promise_wrap_unawait(on_lock);
  async function lambda2() {}
  await lock_wait(function_run_prompt.name, lambda2);
  return r;
}
