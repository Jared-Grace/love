import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function worker_exited(worker, code) {
  let waiting = property_get(worker, "waiting");
  let ids = Object.keys(waiting);
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
  let booted_empty = equal(ids.length, 0) && not(retired);
  if (booted_empty && equal(owner, pool)) {
    owner.broken = message;
  }
}
