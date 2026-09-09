import { app_ceb_bible_gloss_explains_over_pointers_set } from "./app_ceb_bible_gloss_explains_over_pointers_set.mjs";
import { app_ceb_bible_gloss_root_explains } from "./app_ceb_bible_gloss_root_explains.mjs";
export async function app_ceb_bible_gloss_root_explains_apply() {
  "Write the settled wording for each named built-up Cebuano word over the explanations of that word that point the reader further up, leaving every other one alone, and answer with the chapters it rewrote.";
  "It writes over a pointer and nothing else, for the same reason the particles do: a wording written for the sentence it sits in is better than one settled word-by-word, and taking that out to put this in would be a loss dressed as a repair.";
  let explains = app_ceb_bible_gloss_root_explains();
  let r = await app_ceb_bible_gloss_explains_over_pointers_set(explains);
  return r;
}
