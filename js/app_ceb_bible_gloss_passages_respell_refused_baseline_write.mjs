import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_stored_is } from "./app_ceb_bible_gloss_stored_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { app_ceb_bible_gloss_passages_respell_refused_names } from "./app_ceb_bible_gloss_passages_respell_refused_names.mjs";
import { app_ceb_bible_gloss_passages_respell_refused_baseline_growth_assert } from "./app_ceb_bible_gloss_passages_respell_refused_baseline_growth_assert.mjs";
import { app_ceb_bible_gloss_passages_respell_refused_baseline_path } from "./app_ceb_bible_gloss_passages_respell_refused_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_ceb_bible_gloss_passages_respell_refused_baseline_write() {
  "Rewrite the record of the Cebuano passages the respell walks past, from what the store holds right now. For seeding it once, and for banking each batch of mended passages - never for widening it, which is the one thing the gate exists to refuse.";
  "This is the command to run after a batch of passages has been given the explanations it was missing, and the gate's own message names it. The record fails on a passage that no longer offends as surely as on a new one, because an entry left behind after a repair lets the same silence come back under cover of being already known.";
  "A store that is not on the disk stops the rewrite before it starts. A folder that is not there holds no chapters, so the sweep would come back empty and the record would be emptied to match - and a record wiped while the drive was unmounted looks to every later reading exactly like a store somebody has finished mending.";
  arguments_assert(arguments, 0);
  let stored = await app_ceb_bible_gloss_stored_is();
  assert_json(stored, {
    hint: "the Cebuano gloss store is not on the disk, so there is nothing to write the record from - mount the drive the store lives on and run this again",
    stored,
  });
  let known = await app_ceb_bible_gloss_passages_respell_refused_names();
  await app_ceb_bible_gloss_passages_respell_refused_baseline_growth_assert(
    known,
  );
  let path = app_ceb_bible_gloss_passages_respell_refused_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
