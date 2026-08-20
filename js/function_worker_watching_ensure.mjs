import { promise_start_unawait } from "./promise_start_unawait.mjs";
import { function_worker_watching_start } from "./function_worker_watching_start.mjs";
import { function_worker_watching_holder } from "./function_worker_watching_holder.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export async function function_worker_watching_ensure() {
  "Memoize the PROMISE, not the result: concurrent first requests must share";
  "one watcher rather than each racing to build their own.";
  "THE WATCHER IS STARTED THROUGH A HANDER-BACK OF PROMISES AND NOT CALLED HERE. This function waits, so a call written here that nothing waits for is one the auto pass writes the wait into - and what would then be stored is the watcher itself rather than the promise of it. Two first requests arriving together would each find nothing stored, and each build a watcher, which is the one thing the memoizing is for. The line below still waits for the promise; the waiting is not what moved.";
  let held = function_worker_watching_holder();
  let promise = property_get(held, "promise");
  if (equal(promise, null)) {
    async function function_worker_watching_starting() {
      let started = await function_worker_watching_start();
      return started;
    }
    promise = promise_start_unawait(function_worker_watching_starting);
    held.promise = promise;
  }
  let r = await promise;
  return r;
}
