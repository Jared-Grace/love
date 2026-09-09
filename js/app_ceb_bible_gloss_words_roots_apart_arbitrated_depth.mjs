import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_words_roots_chapters_disagreeing } from "./app_ceb_bible_gloss_words_roots_chapters_disagreeing.mjs";
import { property_get } from "./property_get.mjs";
import { app_ceb_bible_gloss_words_roots_apart_arbitrated_contradiction_is } from "./app_ceb_bible_gloss_words_roots_apart_arbitrated_contradiction_is.mjs";
import { app_ceb_bible_gloss_words_roots_apart_arbitrated_unproved } from "./app_ceb_bible_gloss_words_roots_apart_arbitrated_unproved.mjs";
export async function app_ceb_bible_gloss_words_roots_apart_arbitrated_depth() {
  arguments_assert(arguments, 0);
  let reading = await app_ceb_bible_gloss_words_roots_chapters_disagreeing();
  let apart = property_get(reading, "apart");
  let r2 =
    await app_ceb_bible_gloss_words_roots_apart_arbitrated_contradiction_is(
      apart,
    );
  let r3 = app_ceb_bible_gloss_words_roots_apart_arbitrated_unproved(r2);
  let unproved = property_get(r3, "unproved");
  let contradiction = property_get(r3, "contradiction");
  let shared = property_get(r3, "shared");
  let depth = property_get(r3, "depth");
  let r = {
    apart,
    unproved,
    contradiction,
    shared,
    depth,
  };
  return r;
}
