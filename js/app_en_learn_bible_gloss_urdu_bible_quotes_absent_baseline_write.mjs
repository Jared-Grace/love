import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_store_stored_is } from "./gloss_store_stored_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { app_en_learn_bible_gloss_urdu_bible_quotes_absent_names } from "./app_en_learn_bible_gloss_urdu_bible_quotes_absent_names.mjs";
import { app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_growth_assert } from "./app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_growth_assert.mjs";
import { app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_path } from "./app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_write() {
  "Rewrite the record of the Urdu explanations quoting a Bible chapter with words it does not hold, from what the store holds right now. For seeding it once, and for banking each batch of mended quotes - never for widening it.";
  "A store that is not on the disk stops the rewrite before it starts, because an empty sweep would empty the record to match.";
  arguments_assert(arguments, 0);
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let stored = await gloss_store_stored_is(fn);
  assert_json(stored, {
    hint: "the Urdu gloss store is not on the disk, so there is nothing to write the record from - mount the drive the store lives on and run this again",
    stored,
  });
  let known = await app_en_learn_bible_gloss_urdu_bible_quotes_absent_names();
  await app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_growth_assert(
    known,
  );
  let path = app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
