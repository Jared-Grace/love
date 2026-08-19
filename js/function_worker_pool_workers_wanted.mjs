export function function_worker_pool_workers_wanted() {
  "How many warm workers the pool keeps.";
  "One worker could serve every request, because node multiplexes async work and a reply is only ever waited on. What it could not do is stay responsive through a function that thinks rather than waits: a sum that occupies the processor blocks the one event loop, and every other caller queues behind it. Several processes keep that blast radius to a third.";
  "Three rather than one per processor, because these are warm and idle almost all the time. Their cost is memory held open, not work done, so the number is chosen against the worst call rather than against the machine.";
  let wanted = 3;
  return wanted;
}
