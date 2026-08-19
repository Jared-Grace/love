import { app_ceb_bible_gloss_roots_shallower } from "./app_ceb_bible_gloss_roots_shallower.mjs";
import { app_ceb_bible_gloss_roots_shallower_baseline_growth_assert } from "./app_ceb_bible_gloss_roots_shallower_baseline_growth_assert.mjs";
import { app_ceb_bible_gloss_roots_shallower_baseline_path } from "./app_ceb_bible_gloss_roots_shallower_baseline_path.mjs";
import { app_ceb_bible_gloss_stored_is } from "./app_ceb_bible_gloss_stored_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_ceb_bible_gloss_roots_shallower_baseline_write() {
  "Rewrite the record of the Cebuano explanations naming a built word as their root, from what the store holds right now. For seeding it once, and for banking a repair - never for blessing a fresh disagreement, which is the one thing the gate exists to refuse.";
  "A store that is not on the disk stops the rewrite before it starts. A folder that is not there holds no chapters, so the sweep would come back empty and the record would be emptied to match - and a record wiped while the drive was unmounted looks to every later reading exactly like a store somebody has finished repairing.";
  let stored = await app_ceb_bible_gloss_stored_is();
  assert_json(stored, {
    hint: "the Cebuano gloss store is not on the disk, so there is nothing to write the record from - mount the drive the store lives on and run this again",
    stored,
  });
  let known = await app_ceb_bible_gloss_roots_shallower();
  await app_ceb_bible_gloss_roots_shallower_baseline_growth_assert(known);
  let path = app_ceb_bible_gloss_roots_shallower_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
