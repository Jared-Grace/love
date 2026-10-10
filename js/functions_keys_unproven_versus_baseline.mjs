import { entries_versus_baseline } from "./entries_versus_baseline.mjs";
export function functions_keys_unproven_versus_baseline(offenders, known) {
  "what changed since the unproven-key baseline was written: added is a key the repo leaves unproven now and did not then, which the gate refuses; stale is one the baseline still lists that is gone, the ratchet's other tooth";
  let fields = ["keys"];
  let change = entries_versus_baseline(offenders, known, fields);
  return change;
}
