import { app_ceb_bible_gloss_stored_is } from "./app_ceb_bible_gloss_stored_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { app_ceb_bible_gloss_affix_kinds_wrong_names } from "./app_ceb_bible_gloss_affix_kinds_wrong_names.mjs";
import { app_ceb_bible_gloss_affix_kinds_wrong_baseline_growth_assert } from "./app_ceb_bible_gloss_affix_kinds_wrong_baseline_growth_assert.mjs";
import { app_ceb_bible_gloss_affix_kinds_wrong_baseline_path } from "./app_ceb_bible_gloss_affix_kinds_wrong_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_ceb_bible_gloss_affix_kinds_wrong_baseline_write() {
  "Rewrite the record of the Cebuano explanations naming a piece their word has no piece of, from what the store holds right now. For seeding it once, and for banking each batch of repairs - never for widening it, which is the one thing the gate exists to refuse.";
  "This is the command to run after authoring a batch of corrected explanations, and the gate's own message names it. The record fails on a line that no longer offends as surely as on a new one, because an entry left behind after a repair lets the same fault come back under cover of being already known.";
  "A store that is not on the disk stops the rewrite before it starts. A folder that is not there holds no chapters, so the sweep would come back empty and the record would be emptied to match - and a record wiped while the drive was unmounted looks to every later reading exactly like a store somebody has finished repairing.";
  let stored = await app_ceb_bible_gloss_stored_is();
  assert_json(stored, {
    hint: "the Cebuano gloss store is not on the disk, so there is nothing to write the record from - mount the drive the store lives on and run this again",
    stored,
  });
  let known = await app_ceb_bible_gloss_affix_kinds_wrong_names();
  await app_ceb_bible_gloss_affix_kinds_wrong_baseline_growth_assert(known);
  let path = app_ceb_bible_gloss_affix_kinds_wrong_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
