import { server } from "../../../love/public/src/server.mjs";
import { promise_wrap_unawait } from "../../../love/public/src/promise_wrap_unawait.mjs";
import { lock_wait } from "../../../love/public/src/lock_wait.mjs";
import { function_run_prompt } from "../../../love/public/src/function_run_prompt.mjs";
export async function lock_claude() {
  async function on_lock_lambda(resolve, reject) {
    let on_lock_resolve = null;
    on_lock_resolve = resolve;
    let on_lock_reject = null;
    on_lock_reject = reject;
  }
  let on_lock = promise_wrap_unawait(on_lock_lambda);
  async function on_finish_lambda(resolve, reject) {
    let on_finish_resolve = null;
    on_finish_resolve = resolve;
    let on_finish_reject = null;
    on_finish_reject = reject;
  }
  let on_finish = promise_wrap_unawait(on_finish_lambda);
  function lambda() {
    on_lock_resolve();
    server();
  }
  await lock_wait(function_run_prompt.name, lambda);
  let r = {
    on_lock,
    on_finish,
  };
  return r;
}
