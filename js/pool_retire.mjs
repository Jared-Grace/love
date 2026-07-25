import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export function pool_retire() {
  if (equal(pool, null)) {
    return;
  }
  let workers = property_get(pool, "workers");
  function lambda(worker) {
    worker.retired = true;
    worker_exit_if_idle(worker);
  }
  workers.forEach(lambda);
}
