import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_timings_load_ceiling } from "./qa_gate_timings_load_ceiling.mjs";
import { machine_load_minute } from "./machine_load_minute.mjs";
import { less_than } from "./less_than.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { error_json } from "./error_json.mjs";
export async function qa_gate_timings_load_settle_wait() {
  arguments_assert(arguments, 0);
  ("Waits for the machine to go quiet before the gates are timed, and refuses to time them at all if it never does.");
  ("This stands after the lock has been taken and before the first gate is timed, which is the only moment the question can be asked honestly. Asked any earlier it is asked of a machine that is not the one the timing will run on: the lock is what the heaviest thing this machine does is holding, so a run that finds the machine quiet and then waits for the lock has measured the lull before somebody else started, and begins its own work in the middle of theirs.");
  ("Measured 2026-08-25, that is exactly what happened. A run looked, found a load of two and a half, waited twenty minutes for the lock, and started at a load of thirty - a whole measurement of every gate, finished, and worth nothing, because the load never fell below thirteen while it ran.");
  ("What it waits for is the load falling rather than a length of time passing. The number it is waiting on is an average over the last minute, so straight after the lock comes free it is still mostly a reading of the run that has just finished and it falls on its own if nothing else starts.");
  ("It refuses rather than going ahead when the wait runs out. Going ahead writes numbers that describe nothing, and the shares dealt from them would be worse than the shares dealt from the stale record it replaced - so the honest end of a busy night is no new record.");
  let quiet_enough = qa_gate_timings_load_ceiling();
  let looks_most = 30;
  let minute_seconds = 60;
  let load = machine_load_minute();
  for (let look = 0; less_than(look, looks_most); look++) {
    let quiet = less_than(load, quiet_enough);
    if (quiet) {
      return load;
    }
    await sleep_seconds(minute_seconds);
    load = machine_load_minute();
  }
  error_json({
    hint: "the machine never went quiet enough to time the gates one at a time, so nothing was timed - the numbers a busy machine gives are of gates waiting for processors and would make the shares worse than leaving the old record alone",
    f_name: qa_gate_timings_load_settle_wait.name,
    load,
    quiet_enough,
  });
}
