import { function_worker_watching_start } from "./function_worker_watching_start.mjs";
import { function_worker_watching_holder } from "./function_worker_watching_holder.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export async function function_worker_watching_ensure() {
  "Memoize the PROMISE, not the result: concurrent first requests must share";
  "one watcher rather than each racing to build their own.";
  let held = function_worker_watching_holder();
  let promise = property_get(held, "promise");
  if (equal(promise, null)) {
    promise = function_worker_watching_start();
    held.promise = promise;
  }
  let r = await promise;
  return r;
}
