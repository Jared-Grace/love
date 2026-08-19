import { function_worker_pool_retire } from "./function_worker_pool_retire.mjs";
import { function_worker_pool_start } from "./function_worker_pool_start.mjs";
import { function_worker_pool_holder } from "./function_worker_pool_holder.mjs";
import { property_get } from "./property_get.mjs";
import { function_worker_generation_holder } from "./function_worker_generation_holder.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
export function function_worker_pool_ready() {
  let held = function_worker_pool_holder();
  let current = property_get(held, "current");
  let count = property_get(function_worker_generation_holder(), "count");
  let stale =
    equal(current, null) ||
    not_equal(property_get(current, "generation"), count);
  if (stale) {
    ("Retired before the new one is put in place, because retiring reads which");
    ("pool is current and it is the OLD one that has to be drained.");
    function_worker_pool_retire();
    current = function_worker_pool_start();
    held.current = current;
  }
  return current;
}
