import { gloss_explains_repeated_share_key } from "./gloss_explains_repeated_share_key.mjs";
import { gloss_store_counted_versus_baseline } from "./gloss_store_counted_versus_baseline.mjs";
export function gloss_store_shares_versus_baseline(counts, recorded) {
  "What changed since the record of how much of each gloss store hands one word's explanation to another word as well was written.";
  "A share out of every thousand explanations rather than a count of them, because these stores are still being written. A total would rise the moment a new chapter was authored however well it was written, so a gate on the total would go red at every chapter and would be asking for the store to stop growing rather than for the writing to get better. A share asks the only thing worth asking of new work: that it be no worse than what is already there.";
  let key = gloss_explains_repeated_share_key();
  let change = gloss_store_counted_versus_baseline(counts, recorded, key);
  return change;
}
