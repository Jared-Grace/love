import { arguments_assert } from "./arguments_assert.mjs";
import { performance_now } from "./performance_now.mjs";
export function lyric_timing_screen_lag_on_heard(run) {
  arguments_assert(arguments, 1);
  if (run.running) {
    let v = performance_now();
    run.taps.push(v);
  }
}
