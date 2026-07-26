import { shadowing_entries_difference } from "./shadowing_entries_difference.mjs";
export function functions_shadowing_versus_baseline(offenders, known) {
  "what changed since the baseline was written. added is what the repo shadows now and did not then — the gate refuses it. stale is what the baseline still lists but no longer happens — the ratchet's other tooth, because an entry left behind after a cleanup lets the same name come back unnoticed.";
  let added = shadowing_entries_difference(offenders, known);
  let stale = shadowing_entries_difference(known, offenders);
  let change = {
    added,
    stale,
  };
  return change;
}
