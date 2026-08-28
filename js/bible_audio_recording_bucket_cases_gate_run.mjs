import { bible_audio_recording_bucket_cases } from "./bible_audio_recording_bucket_cases.mjs";
import { bible_audio_recording_bucket } from "./bible_audio_recording_bucket.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function bible_audio_recording_bucket_cases_gate_run() {
  "Gate: every written-down recording must be called what the corpus says it is. The sweep this reading feeds reads a disk, so it can never be a gate itself, and its counts add up to the total whatever order the questions are asked in - this is the only thing that would go red if the order moved. Throws so the dispatcher seam exits nonzero.";
  let cases = bible_audio_recording_bucket_cases();
  function answer(c) {
    let bucket = bible_audio_recording_bucket(c);
    return bucket;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "bucket",
    "note",
    "bible audio recording bucket",
  );
  return r;
}
