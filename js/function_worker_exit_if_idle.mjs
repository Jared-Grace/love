import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { not } from "./not.mjs";
export function function_worker_exit_if_idle(worker) {
  let waiting = property_get(worker, "waiting");
  let idle = equal(object_property_names(waiting).length, 0);
  let child = property_get(worker, "child");
  if (equal(child, null) || not(idle)) {
    return;
  }
  ("Nothing in flight, so stop holding the event loop open.");
  child.stdio[4].unref();
  let retired = property_get(worker, "retired");
  if (retired) {
    ("Closing the job stream is what tells a drained worker it may exit.");
    child.stdio[3].end();
  }
}
