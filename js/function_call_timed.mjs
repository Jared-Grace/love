import { fn_name } from "./fn_name.mjs";
import { function_args_count_assert } from "./function_args_count_assert.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
export async function function_call_timed(fn, args) {
  "Runs one call and says how long it took, alongside whatever it handed back.";
  ("The record it returns is the shape the timing readers already take - a name and a count of milliseconds - so a list of these goes straight to ",
    fn_name("timings_ranked"),
    " or ",
    fn_name("timings_print"),
    " without anything in between. The returned value rides along because a caller timing a step usually needs that step's answer to take the next one.");
  ("It exists because timing a step by hand is three lines that read as bookkeeping, and the two of them that matter - the clock before and the clock after - end up far apart with the real work between them. Written out by hand in a function that has three steps to time, that is nine lines of clock for three lines of work.");
  function_args_count_assert(fn, args);
  let name = fn.name;
  let started = date_now_milliseconds();
  let value = await fn(...args);
  let milliseconds = date_milliseconds_since(started);
  let timing = {
    name,
    milliseconds,
    value,
  };
  return timing;
}
