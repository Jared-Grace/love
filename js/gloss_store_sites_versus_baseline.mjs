import { gloss_store_counted_versus_baseline } from "./gloss_store_counted_versus_baseline.mjs";
export function gloss_store_sites_versus_baseline(counts, recorded) {
  "What changed since the record of how many places in each gloss store still point the reader further up instead of saying the thing itself was written.";
  "A count of the places rather than a share of them, because these are being taken out one at a time and never written on purpose. The number can only fall, so the number is the thing to hold.";
  let change = gloss_store_counted_versus_baseline(counts, recorded, "sites");
  return change;
}
