import { qa_gate_timings_path } from "./qa_gate_timings_path.mjs";
import { file_read_json_initialize } from "./file_read_json_initialize.mjs";
export async function qa_gate_timings_read() {
  "How long each gate took when it was last timed on its own, by name, in milliseconds";
  "A missing file answers with nothing rather than complaining, and nothing is a usable answer: the dealing falls back to giving every gate the same weight, which is exactly what it did before any of this existed. So a fresh clone is slower to judge and never broken by it";
  "These numbers are a hint about how to divide the work and never a verdict about anything. They are allowed to be out of date - a gate that has grown slower since it was timed only makes the shares less even, which is the state the repo was already in - so nothing here needs a gate watching it for staleness";
  let path = qa_gate_timings_path();
  let known = await file_read_json_initialize(path, {});
  return known;
}
