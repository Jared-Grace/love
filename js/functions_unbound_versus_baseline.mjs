import { entries_versus_baseline } from "./entries_versus_baseline.mjs";
export function functions_unbound_versus_baseline(offenders, known) {
  "what changed since the baseline was written. added is what the repo reads unbound now and did not then - the gate refuses it. stale is what the baseline still lists but no longer happens, the ratchet's other tooth, because an entry left behind after a cleanup lets the same name come back unnoticed.";
  "one list on the entry rather than two, which is the only way this differs from the shadowing ratchet, so the comparison itself is shared and only the name of the list is said here.";
  let fields = ["unbound"];
  let change = entries_versus_baseline(offenders, known, fields);
  return change;
}
