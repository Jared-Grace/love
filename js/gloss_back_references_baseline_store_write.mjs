import { property_equals } from "./property_equals.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { gloss_back_references_baseline_growth_assert } from "./gloss_back_references_baseline_growth_assert.mjs";
import { gloss_back_references_baseline_path } from "./gloss_back_references_baseline_path.mjs";
import { gloss_back_references_measure } from "./gloss_back_references_measure.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_back_references_baseline_store_write(store) {
  "Bank the repair of one named gloss store, leaving every other store's recorded number exactly where it stands.";
  "The record covers every store at once, and rewriting it measures all of them, so a store somebody else has gone backwards in refuses the rewrite for a store that has just been repaired. The repair is then either lost until the other store is fixed, or banked together with the regression it must never bless. Naming one store is what separates them.";
  "It cannot bless a regression either. The store named is refused by the same growth check as the whole rewrite, because the number written down for it is the number just measured - the only thing this can do to that store is lower it, and the only thing it can do to the others is nothing.";
  "A store the record has never heard of stops here rather than being added, because a store with no number yet has nothing to bank: seed the whole record first.";
  let measured = await gloss_back_references_measure();
  let missing = property_get(measured, "missing");
  list_empty_is_assert_json(missing, {
    hint: "these gloss stores are not on the disk, so the one named cannot be measured against a full reading - mount the drive the stores live on and run this again",
    missing,
  });
  let counts = property_get(measured, "counts");
  let counted = list_find_property(counts, "store", store);
  let path = gloss_back_references_baseline_path();
  let recorded = await baseline_known_read(path);
  list_find_property(recorded, "store", store);
  function entry_bank(entry) {
    let named = property_equals(entry, "store", store);
    if (named) {
      return counted;
    }
    return entry;
  }
  let known = list_map(recorded, entry_bank);
  await gloss_back_references_baseline_growth_assert(known);
  let r = await baseline_known_write(known, path);
  return r;
}
