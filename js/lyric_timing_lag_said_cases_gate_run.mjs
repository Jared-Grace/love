import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_timing_lag_said_cases } from "./lyric_timing_lag_said_cases.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_timing_lag_said } from "./lyric_timing_lag_said.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function lyric_timing_lag_said_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("Checks every written-out run of sounds against what the person is actually told about it.");
  let cases = lyric_timing_lag_said_cases();
  function answer(one) {
    let measured = property_get(one, "measured");
    let count = property_get(one, "count");
    let said = lyric_timing_lag_said(measured, count);
    return said;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "said",
    "why",
    "lyric timing lag said",
  );
  return r;
}
