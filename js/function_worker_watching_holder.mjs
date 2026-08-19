import { equal } from "./equal.mjs";
let holder = null;
export function function_worker_watching_holder() {
  "The one place the promise of the file watcher being started is kept, handed back as something its readers can write into.";
  "The promise is what is remembered, not the watcher. Two calls arriving before the first has finished starting must share one watcher, and only the promise exists early enough for the second of them to find. Remembering the watcher instead would let both of them start one.";
  "Started once for the life of the process, so nothing here ever puts it back. What retires the workers is the count next door going up, which this watcher is the thing that raises.";
  if (equal(holder, null)) {
    holder = {
      promise: null,
    };
  }
  return holder;
}
