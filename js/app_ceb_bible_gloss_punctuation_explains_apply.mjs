import { app_ceb_bible_gloss_explains_over_pointers_set } from "./app_ceb_bible_gloss_explains_over_pointers_set.mjs";
import { app_ceb_bible_gloss_punctuation_explains } from "./app_ceb_bible_gloss_punctuation_explains.mjs";
export async function app_ceb_bible_gloss_punctuation_explains_apply() {
  "Write over each pointing explanation of a Cebuano word that arrived wearing punctuation, using the wording already settled for that word written bare, and answer with the chapters it rewrote.";
  "It writes over a pointer and nothing else, for the same reason every other apply here does: a wording written for the sentence it sits in is better than one settled word-by-word, and taking that out to put this in would be a loss dressed as a repair.";
  let explains = await app_ceb_bible_gloss_punctuation_explains();
  let r = await app_ceb_bible_gloss_explains_over_pointers_set(explains);
  return r;
}
