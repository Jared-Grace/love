import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_claims_generic } from "./app_en_learn_bible_gloss_urdu_chapters_claims_generic.mjs";
import { gloss_passages_verse_claims_all } from "./gloss_passages_verse_claims_all.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_verse_claims_all() {
  "Every authored chapter of the Urdu-explained English store holding a word explanation that names a verse of its own chapter, with each claim saying whether that verse holds a word built on the same root.";
  "This is the reading beside the one that keeps only the wrong claims, and it exists to say how many claims there were to be wrong about. A count of wrong claims on its own cannot tell a store in good order from a check that has stopped reaching anything - which is exactly what this store had, a check written for English sentences run over Urdu ones, reporting nothing wrong because it could see nothing at all.";
  "Chapters naming no verse at all drop out, so the chapters that come back are the ones that cross-reference themselves rather than the ones that are authored.";
  arguments_assert(arguments, 0);
  let r = await app_en_learn_bible_gloss_urdu_chapters_claims_generic(
    gloss_passages_verse_claims_all,
  );
  return r;
}
