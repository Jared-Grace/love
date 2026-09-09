import { gloss_explains_repeated_across_share_key } from "./gloss_explains_repeated_across_share_key.mjs";
import { gloss_explains_repeated_total_share_key } from "./gloss_explains_repeated_total_share_key.mjs";
import { gloss_store_counted_versus_baseline } from "./gloss_store_counted_versus_baseline.mjs";
import { gloss_store_change_named } from "./gloss_store_change_named.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat } from "./list_concat.mjs";
export function gloss_store_shares_versus_baseline(counts, recorded) {
  "What changed since the record of how much of each gloss store hands one explanation to more than one word was written, watching the two numbers a store is held to and saying in every row which of them moved.";
  "A share out of every thousand explanations rather than a count of them, because these stores are still being written. A total would rise the moment a new chapter was authored however well it was written, so a gate on the total would go red at every chapter and would be asking for the store to stop growing rather than for the writing to get better. A share asks the only thing worth asking of new work: that it be no worse than what is already there.";
  "The two held to are the fault on its own and the fault added to the harmless kind. The fault is a wording worn by genuinely different words and must only ever fall. The harmless kind is the same word told the same thing twice, and it is deliberately not held to on its own, because repairing the fault turns it into exactly that and a ratchet on it would refuse every repair. Holding the two added together keeps what that ratchet was for: a store where somebody had begun writing one sentence over more and more words goes red whichever kind the sentence lands in.";
  let across_key = gloss_explains_repeated_across_share_key();
  let total_key = gloss_explains_repeated_total_share_key();
  let across_change = gloss_store_counted_versus_baseline(
    counts,
    recorded,
    across_key,
  );
  let total_change = gloss_store_counted_versus_baseline(
    counts,
    recorded,
    total_key,
  );
  let across = gloss_store_change_named(across_change, across_key);
  let total = gloss_store_change_named(total_change, total_key);
  let a = property_get(across, "added");
  let b = property_get(total, "added");
  let a2 = property_get(across, "stale");
  let b2 = property_get(total, "stale");
  let r = {
    added: list_concat(a, b),
    stale: list_concat(a2, b2),
  };
  return r;
}
