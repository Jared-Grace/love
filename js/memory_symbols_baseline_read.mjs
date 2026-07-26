import { memory_symbols_baseline_path } from "./memory_symbols_baseline_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function memory_symbols_baseline_read() {
  "The call-shaped names memory already carried when the rule was written. The gate measures against this rather than against nothing, so the rule binds what is written today instead of waiting on a triage of every old note.";
  let path = memory_symbols_baseline_path();
  let parsed = await file_read_json(path);
  let known = property_get(parsed, "known");
  return known;
}
