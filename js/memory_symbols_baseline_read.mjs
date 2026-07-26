import { baseline_known_read } from "./baseline_known_read.mjs";
import { memory_symbols_baseline_path } from "./memory_symbols_baseline_path.mjs";
export async function memory_symbols_baseline_read() {
  "The call-shaped names memory already carried when the rule was written. The gate measures against this rather than against nothing, so the rule binds what is written today instead of waiting on a triage of every old note.";
  let path = memory_symbols_baseline_path();
  let known = await baseline_known_read(path);
  return known;
}
