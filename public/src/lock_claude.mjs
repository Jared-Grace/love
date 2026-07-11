import { invoke } from "../../../love/public/src/invoke.mjs";
import { promise_wrap_unawait } from "../../../love/public/src/promise_wrap_unawait.mjs";
import { lock_wait } from "../../../love/public/src/lock_wait.mjs";
import { function_run_prompt } from "../../../love/public/src/function_run_prompt.mjs";
export async function lock_claude() {
  let on_lock_reject = null;
  let on_lock_resolve = null;
  async function on_lock_lambda(resolve, reject) {
    on_lock_resolve = resolve;
    on_lock_reject = reject;
  }
  let on_lock = promise_wrap_unawait(on_lock_lambda);
  let on_finish_resolve = null;
  let on_finish_reject = null;
  async function on_finish_lambda(resolve, reject) {
    on_finish_resolve = resolve;
    on_finish_reject = reject;
  }
  let on_finish = promise_wrap_unawait(on_finish_lambda);
  function lambda() {
    on_lock_resolve();
    return on_finish;
  }
  async function lambda3() {
    try {
      await lock_wait(function_run_prompt.name, lambda, "claude");
    } catch (e) {
      on_lock_reject(e);
    }
  }
  let r2 = invoke(lambda3);
  let r = {
    on_lock,
    on_finish_resolve,
    on_finish_reject,
  };
  return r;
}
