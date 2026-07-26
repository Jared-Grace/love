import { list_difference } from "./list_difference.mjs";
export function names_versus_baseline(offenders, known) {
  "What changed since a baseline of plain names was written. Added is what offends now and did not then, which the gate refuses. Stale is what the baseline still lists but no longer offends, which the gate also refuses - that is the ratchet's other tooth, because an entry left behind after a cleanup quietly lets the same offense come back.";
  let added = list_difference(offenders, known);
  let stale = list_difference(known, offenders);
  let change = {
    added,
    stale,
  };
  return change;
}
