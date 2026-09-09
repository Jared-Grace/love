import { gloss_explains_repeated_across_share_key } from "./gloss_explains_repeated_across_share_key.mjs";
import { gloss_explains_repeated_same_share_key } from "./gloss_explains_repeated_same_share_key.mjs";
import { gloss_store_counted_versus_baseline } from "./gloss_store_counted_versus_baseline.mjs";
import { gloss_store_change_named } from "./gloss_store_change_named.mjs";
import { list_concat } from "./list_concat.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_store_shares_versus_baseline(counts, recorded) {
  "What changed since the record of how much of each gloss store hands one explanation to more than one word was written, watching both of the two numbers a store is measured on and saying in every row which of them moved.";
  "A share out of every thousand explanations rather than a count of them, because these stores are still being written. A total would rise the moment a new chapter was authored however well it was written, so a gate on the total would go red at every chapter and would be asking for the store to stop growing rather than for the writing to get better. A share asks the only thing worth asking of new work: that it be no worse than what is already there.";
  "Both numbers are watched and neither is allowed to stand in for the other. A wording worn by different words is the fault and must only ever fall. The same word told the same thing twice is not a fault, but it is left on the ratchet all the same, because a store where it climbed steeply would mean somebody had started writing one sentence everywhere - and the number that would have caught that is exactly this one.";
  let across_key = gloss_explains_repeated_across_share_key();
  let same_key = gloss_explains_repeated_same_share_key();
  let across_change = gloss_store_counted_versus_baseline(
    counts,
    recorded,
    across_key,
  );
  let same_change = gloss_store_counted_versus_baseline(
    counts,
    recorded,
    same_key,
  );
  let across = gloss_store_change_named(across_change, across_key);
  let same = gloss_store_change_named(same_change, same_key);
  let a = property_get(across, "added");
  let b = property_get(same, "added");
  let a2 = property_get(across, "stale");
  let b2 = property_get(same, "stale");
  let r = {
    added: list_concat(a, b),
    stale: list_concat(a2, b2),
  };
  return r;
}
