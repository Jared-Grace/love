export function function_worker_pool_quiet_milliseconds() {
  "How long the pool waits after a file is saved before it retires its workers.";
  "Measured from the last save rather than the first, so a burst of them collapses into one retirement. Firing on the first save instead would boot a fresh worker in the middle of an edit batch, and what it loaded would be whatever half of the change had reached the disk by then.";
  "Waiting at all is what makes the next worker load the finished state. A worker only ever serves the code it booted with, so the quiet is the whole of how a save becomes the running code.";
  let milliseconds = 300;
  return milliseconds;
}
