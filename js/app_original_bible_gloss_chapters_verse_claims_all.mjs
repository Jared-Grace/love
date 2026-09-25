import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_chapters_claims_generic } from "./app_original_bible_gloss_chapters_claims_generic.mjs";
import { gloss_passages_verse_claims_all } from "./gloss_passages_verse_claims_all.mjs";
export async function app_original_bible_gloss_chapters_verse_claims_all() {
  "Every authored chapter of the original-language store beside every verse its word explanations name, whether or not the named verse holds the word.";
  "This is the denominator. Six claims coming back not held is a store in good order if two hundred were made and a detector that has quietly stopped firing if seven were, and only the whole count can tell those apart.";
  arguments_assert(arguments, 0);
  let r = await app_original_bible_gloss_chapters_claims_generic(
    gloss_passages_verse_claims_all,
  );
  return r;
}
