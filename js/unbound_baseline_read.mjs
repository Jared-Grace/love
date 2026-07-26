import { unbound_baseline_path } from "./unbound_baseline_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function unbound_baseline_read() {
  "the names the repo already read without binding when the rule was written - parked scratchpads and half-finished experiments, honest to keep and dishonest to add to. The gate compares against this rather than against zero, so the rule binds new code today instead of waiting on a cleanup of every old file, and the list only ever shrinks, because anything not in it fails.";
  let path = unbound_baseline_path();
  let parsed = await file_read_json(path);
  let known = property_get(parsed, "known");
  return known;
}
