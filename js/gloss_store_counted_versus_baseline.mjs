import { property_get } from "./property_get.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function gloss_store_counted_versus_baseline(
  counts,
  recorded,
  count_key,
) {
  "What changed since a record of one number per gloss store was written - the caller names which number.";
  "$plain count_key";
  "the key is the name of the number to compare on each side. It names a part of a record and nothing that runs.";
  "It knows nothing about what is being counted, and that is the whole of what it is for. The ratchets over these stores ask different questions - how many explanations point the reader further up instead of saying the thing, and how many out of every thousand hand one word's wording to another word as well - and every one of them arrives here as a number per store. One comparison and several questions is one unit; a second copy would be a second answer about what has newly gone wrong, and each gate rests on refusing exactly what its writer declines to bless.";
  "added is a store carrying more than the record holds - the gate refuses it, because the one thing a ratchet like this exists to stop is a fresh pass writing back what a repair just took out.";
  "stale is a store carrying fewer - the gate refuses that too. A number that has fallen and a record that still names the old one is slack, and slack is what lets a word that was repaired go back to being wrong without anything noticing. Rewriting the record is what banks the repair.";
  "A store the record has never heard of is read as nought rather than skipped, so the first store to be authored is measured against zero the way it should be.";
  let added = [];
  let stale = [];
  function count_read(count) {
    let store = property_get(count, "store");
    let counted = property_get(count, count_key);
    let held = list_find_property_or_null(recorded, "store", store);
    let unheld = null_is(held);
    let before = 0;
    if (not(unheld)) {
      before = property_get(held, count_key);
    }
    let change = {
      store,
      counted,
      recorded: before,
    };
    let grew = greater_than(counted, before);
    if (grew) {
      list_add(added, change);
      return;
    }
    let fell = greater_than(before, counted);
    if (fell) {
      list_add(stale, change);
    }
  }
  each(counts, count_read);
  let r = {
    added,
    stale,
  };
  return r;
}
