import { worker_exit_if_idle } from "./worker_exit_if_idle.mjs";
import { function_worker_pool_holder } from "./function_worker_pool_holder.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function pool_retire() {
  let held = function_worker_pool_holder();
  let current = property_get(held, "current");
  if (equal(current, null)) {
    return;
  }
  ("Drain, do not kill: in-flight jobs keep their worker alive and finish");
  ("normally. Closing the job stream is what tells a worker to exit once idle.");
  let workers = property_get(current, "workers");
  function lambda(worker) {
    worker.retired = true;
    worker_exit_if_idle(worker);
  }
  workers.forEach(lambda);
}
