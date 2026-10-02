import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_stored_is } from "./app_ceb_bible_gloss_stored_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { app_ceb_bible_gloss_words_explained_apart_names } from "./app_ceb_bible_gloss_words_explained_apart_names.mjs";
import { app_ceb_bible_gloss_words_explained_apart_baseline_path } from "./app_ceb_bible_gloss_words_explained_apart_baseline_path.mjs";
import { baseline_known_write_unchecked } from "./baseline_known_write_unchecked.mjs";
export async function app_ceb_bible_gloss_words_explained_apart_baseline_reseed() {
  "Start the record of Cebuano words explained more than one way again from nothing, because the reading beneath it was widened and has no earlier record to measure against.";
  "★ THIS IS NOT THE WRITER AND MUST NEVER BE REACHED FOR INSTEAD OF IT. The writer refuses a name the record did not already hold, and that refusal is the whole of what the gate buys: a word newly explained two ways is a person opening two passages and keeping the right explanation, never a line added to a file. Everything here is the same except that it drops that refusal, so running it on a red gate would forgive exactly the fault the gate was built to catch.";
  "What it is for is the one case the refusal cannot tell apart from widening. On the second of October a pass rewrote nine hundred and sixty seven of the store's nine hundred and seventy nine chapters, and the reader underneath matched the word root followed by a quoted word and nothing else - so comes from kalooy and takes it back to kalooy stopped being read, and thirty six watched words went quiet without one of them being mended. The reading was pointed at the wider reader, which reads four wordings, and the same walk answers eight hundred and three. None of those eight hundred and three is new in the store; what is new is that they can be seen. A ratchet measured against a floor set by a blinder reading is measuring the reading rather than the store.";
  "So the saying-so is a person's, by name, and shows up in the log as its own line - the same bargain the clearing command strikes, for the same reason: nothing here can check that the widening is honest, and nothing could. What it buys is that starting a ratchet again was chosen rather than slipped in under a routine rewrite.";
  "A store that is not on the disk stops it before it starts, for the reason the writer gives: a folder that is not there holds no chapters, so the walk would come back empty and the record would be seeded at nothing, which reads ever after like a store somebody has finished mending.";
  arguments_assert(arguments, 0);
  let stored = await app_ceb_bible_gloss_stored_is();
  assert_json(stored, {
    hint: "the Cebuano gloss store is not on the disk, so there is nothing to seed the record from - mount the drive the store lives on and run this again",
    stored,
  });
  let known = await app_ceb_bible_gloss_words_explained_apart_names();
  let path = app_ceb_bible_gloss_words_explained_apart_baseline_path();
  let r = await baseline_known_write_unchecked(known, path);
  return r;
}
