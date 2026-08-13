import { baseline_known_write } from "./baseline_known_write.mjs";
import { gloss_back_references_baseline_growth_assert } from "./gloss_back_references_baseline_growth_assert.mjs";
import { gloss_back_references_baseline_path } from "./gloss_back_references_baseline_path.mjs";
import { gloss_back_references_measure } from "./gloss_back_references_measure.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_back_references_baseline_write() {
  "Rewrite the record of how many gloss explanations point the reader further up, from what the stores hold right now.";
  "For seeding it once and for banking a repair - never for blessing a store that has gone backwards, which is the single thing the gate exists to refuse.";
  "A store that could not be read stops the whole rewrite. Its count would otherwise be dropped from the record, and dropping a store looks to every later reading exactly like a store with nothing wrong in it - so a rewrite run while the drive was unmounted would quietly throw away the number that was protecting it.";
  let measured = await gloss_back_references_measure();
  let missing = property_get(measured, "missing");
  list_empty_is_assert_json(missing, {
    hint: "these gloss stores are not on the disk, so their counts cannot be written down - mount the drive the stores live on and run this again",
    missing,
  });
  let counts = property_get(measured, "counts");
  await gloss_back_references_baseline_growth_assert(counts);
  let path = gloss_back_references_baseline_path();
  let r = await baseline_known_write(counts, path);
  return r;
}
