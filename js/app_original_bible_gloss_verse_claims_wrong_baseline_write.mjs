import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_store_stored_is } from "./gloss_store_stored_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { app_original_bible_gloss_verse_claims_wrong_names } from "./app_original_bible_gloss_verse_claims_wrong_names.mjs";
import { app_original_bible_gloss_verse_claims_wrong_baseline_growth_assert } from "./app_original_bible_gloss_verse_claims_wrong_baseline_growth_assert.mjs";
import { app_original_bible_gloss_verse_claims_wrong_baseline_path } from "./app_original_bible_gloss_verse_claims_wrong_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_original_bible_gloss_verse_claims_wrong_baseline_write() {
  "Rewrite the record of the original-language explanations naming a verse that holds nothing written with the same word, from what the store holds right now. For seeding it once, and for banking each batch of settled sentences - never for widening it, which is the one thing the gate exists to refuse.";
  "This is the command the gate's own message names. The record fails on a line that no longer offends as surely as on a new one, because an entry left behind after a sentence was mended lets the same claim come back under cover of being already known.";
  "A store that is not on the disk stops the rewrite before it starts. A folder that is not there holds no chapters, so the sweep would come back empty and the record would be emptied to match - and a record wiped while the drive was unmounted looks to every later reading exactly like a store somebody has finished reading through.";
  arguments_assert(arguments, 0);
  let fn = app_original_bible_gloss_generate;
  let stored = await gloss_store_stored_is(fn);
  assert_json(stored, {
    hint: "the original-language gloss store is not on the disk, so there is nothing to write the record from - mount the drive the store lives on and run this again",
    stored,
  });
  let known = await app_original_bible_gloss_verse_claims_wrong_names();
  await app_original_bible_gloss_verse_claims_wrong_baseline_growth_assert(
    known,
  );
  let path = app_original_bible_gloss_verse_claims_wrong_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
