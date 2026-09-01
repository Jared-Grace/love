import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_timing_lag_measured_cases } from "./lyric_timing_lag_measured_cases.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_timing_lag_measured } from "./lyric_timing_lag_measured.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function lyric_timing_lag_measured_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("Works out the lag of every authored run in the corpus and refuses the run when one of them comes back as a different number, or as a different count of sounds heard.");
  ("WHAT THIS GUARDS IS THE ONLY PLACE THE LAG IS KNOWN RATHER THAN GUESSED. Everything downstream of it takes the number on trust: the desk writes it into the box, the save takes it off every moment in the passage, and the video is where anybody would find out. So a wrong answer here is not a wrong answer on a screen, it is a wrong answer baked into a document and then into a finished video, and the fault it looks like on arrival is the person having mistimed the song.");
  ("The count of sounds nobody answered is checked alongside the lag rather than left to the screen. It is what decides whether the number means anything, and a run that reported ten of ten heard from two presses would hand the screen a median of two presses wearing the confidence of ten.");
  let cases = lyric_timing_lag_measured_cases();
  function answer(one) {
    let clicks = property_get(one, "clicks");
    let taps = property_get(one, "taps");
    let window_seconds = property_get(one, "window_seconds");
    let measured = lyric_timing_lag_measured(clicks, taps, window_seconds);
    return measured;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "measured",
    "why",
    "lyric timing lag measured",
  );
  return r;
}
