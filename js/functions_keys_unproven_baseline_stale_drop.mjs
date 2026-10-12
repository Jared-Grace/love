import { functions_keys_unproven } from "./functions_keys_unproven.mjs";
import { functions_keys_unproven_baseline_path } from "./functions_keys_unproven_baseline_path.mjs";
import { baseline_entries_stale_drop } from "./baseline_entries_stale_drop.mjs";
export async function functions_keys_unproven_baseline_stale_drop() {
  "Shrink the unproven-key record by the functions it lists that now prove their keys, even while someone else's new key keeps the whole rewrite refused.";
  let offenders = await functions_keys_unproven();
  let path = functions_keys_unproven_baseline_path();
  let fields = ["keys"];
  let r = await baseline_entries_stale_drop(offenders, path, fields);
  return r;
}
