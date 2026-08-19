import { worker_child_start } from "./worker_child_start.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function worker_child_ensure(worker) {
  "Memoize the PROMISE, not the child: concurrent jobs landing on one worker";
  "must share a single spawn rather than each racing to start their own.";
  let starting = property_get(worker, "child_starting");
  if (equal(starting, null)) {
    worker.child_starting = worker_child_start(worker);
  }
  let r2 = worker.child_starting;
  return r2;
}
