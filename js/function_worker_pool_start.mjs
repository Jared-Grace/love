import { worker_start } from "./worker_start.mjs";
import { property_get } from "./property_get.mjs";
import { function_worker_generation_holder } from "./function_worker_generation_holder.mjs";
import { function_worker_pool_workers_wanted } from "./function_worker_pool_workers_wanted.mjs";
import { less_than } from "./less_than.mjs";
export function function_worker_pool_start() {
  let workers = [];
  let generation = property_get(function_worker_generation_holder(), "count");
  let started = {
    generation,
    workers,
    next: 0,
    broken: null,
  };
  let index = 0;
  let wanted = function_worker_pool_workers_wanted();
  while (less_than(index, wanted)) {
    workers.push(worker_start(started));
    index = index + 1;
  }
  return started;
}
