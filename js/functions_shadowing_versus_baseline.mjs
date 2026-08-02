import { entries_versus_baseline } from "./entries_versus_baseline.mjs";
export function functions_shadowing_versus_baseline(offenders, known) {
  "what changed since the baseline was written. added is what the repo shadows now and did not then — the gate refuses it. stale is what the baseline still lists but no longer happens — the ratchet's other tooth, because an entry left behind after a cleanup lets the same name come back unnoticed.";
  "the two rules are two lists on the same entry, and reading a ratchet each way round is the same work for every such gate, so only the names of the lists are said here.";
  let fields = ["shadows_outer", "shadows_function"];
  let change = entries_versus_baseline(offenders, known, fields);
  return change;
}
