import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_worker_pool_holder } from "./function_worker_pool_holder.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function worker_exited(worker, code) {
  let waiting = property_get(worker, "waiting");
  let ids = object_property_names(waiting);
  let message = text_combine_multiple([
    "the warm worker exited with code ",
    code,
    " before answering — did a watched file get saved in a broken state? its stderr is in the love_server journal",
  ]);
  function lambda(id) {
    waiting[id].reject(new Error(message));
    delete waiting[id];
  }
  ids.forEach(lambda);
  worker.child = null;
  worker.child_starting = null;
  let owner = property_get(worker, "owner");
  let retired = property_get(worker, "retired");
  ("A worker that dies with nothing in flight died at BOOT. Mark the whole");
  ("generation broken rather than respawning per request, which would hot-loop");
  ("node boots for as long as the file stays broken. The next save moves the");
  ("generation forward and clears this by itself.");
  let held = function_worker_pool_holder();
  let current = property_get(held, "current");
  let booted_empty = equal(ids.length, 0) && not(retired);
  if (booted_empty && equal(owner, current)) {
    owner.broken = message;
  }
}
