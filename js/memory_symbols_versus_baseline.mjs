import { list_difference } from "./list_difference.mjs";
export function memory_symbols_versus_baseline(current, known) {
  "What changed since the baseline was written. Added is what memory names now and did not then, which is the only part worth anyone's attention. Stale is what the baseline still lists but memory no longer names - the ratchet's other tooth, because an entry left behind after a fix quietly re-admits the same name later.";
  let added = list_difference(current, known);
  let stale = list_difference(known, current);
  let change = {
    added,
    stale,
  };
  return change;
}
