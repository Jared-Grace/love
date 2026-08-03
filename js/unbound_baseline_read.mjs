import { baseline_known_read } from "./baseline_known_read.mjs";
import { functions_unbound_baseline_path } from "./functions_unbound_baseline_path.mjs";
export async function unbound_baseline_read() {
  "the names the repo already read without binding when the rule was written - parked scratchpads and half-finished experiments, honest to keep and dishonest to add to. The gate compares against this rather than against zero, so the rule binds new code today instead of waiting on a cleanup of every old file, and the list only ever shrinks, because anything not in it fails.";
  let path = functions_unbound_baseline_path();
  let known = await baseline_known_read(path);
  return known;
}
