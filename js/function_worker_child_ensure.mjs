import { promise_start_unawait } from "./promise_start_unawait.mjs";
import { function_worker_child_start } from "./function_worker_child_start.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function function_worker_child_ensure(worker) {
  "Memoize the PROMISE, not the child: concurrent jobs landing on one worker";
  "must share a single spawn rather than each racing to start their own.";
  "THE SPAWN IS STARTED THROUGH A HANDER-BACK OF PROMISES AND NOT CALLED HERE, because a call written here that nothing waits for is a call the auto pass writes the wait into - and then makes this function wait as well, and walks out to everything that calls it. What is stored would be the child rather than the promise of it, so two jobs arriving together would each find nothing stored and each spawn one. The race this function exists to close would be reopened by a pass that was working correctly.";
  let starting = property_get(worker, "child_starting");
  if (equal(starting, null)) {
    async function function_worker_child_starting() {
      let started = await function_worker_child_start(worker);
      return started;
    }
    worker.child_starting = promise_start_unawait(
      function_worker_child_starting,
    );
  }
  let r = worker.child_starting;
  return r;
}
