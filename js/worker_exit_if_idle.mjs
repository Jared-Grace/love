import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function worker_exit_if_idle(worker) {
  let waiting = property_get(worker, "waiting");
  let idle = equal(Object.keys(waiting).length, 0);
  let child = property_get(worker, "child");
  if (equal(child, null) || not(idle)) {
    return;
  }
  child.stdio[4].unref();
  let retired = property_get(worker, "retired");
  if (retired) {
    child.stdio[3].end();
  }
}
