import { less_than } from "./less_than.mjs";
export function pool_start() {
  let workers = [];
  let started = {
    generation,
    workers,
    next: 0,
    broken: null,
  };
  let index = 0;
  while (less_than(index, WORKERS_WANTED)) {
    workers.push(worker_start(started));
    index = index + 1;
  }
  return started;
}
