import { app_ceb_bible_gloss_particle_explains } from "./app_ceb_bible_gloss_particle_explains.mjs";
import { app_ceb_bible_gloss_root_explains } from "./app_ceb_bible_gloss_root_explains.mjs";
import { app_ceb_bible_gloss_unanalysed_explains } from "./app_ceb_bible_gloss_unanalysed_explains.mjs";
import { app_ceb_bible_gloss_word_explains } from "./app_ceb_bible_gloss_word_explains.mjs";
import { objects_merge } from "./objects_merge.mjs";
export function app_ceb_bible_gloss_explains() {
  "Every Cebuano word this repo has settled wording for, whichever of the authored maps holds it.";
  "The maps are split by what could be said about a word - one the dictionary breaks into a root, one it takes no further, the small words that hold a sentence together, the ones written before any of that was sorted. That split is right at the writing and wrong at the reading: somebody asking whether a word has been explained does not care which map answered, and asking four in turn is how a caller comes to know four names it has no other use for.";
  let r2 = app_ceb_bible_gloss_particle_explains();
  let r3 = app_ceb_bible_gloss_word_explains();
  let r4 = app_ceb_bible_gloss_root_explains();
  let r5 = app_ceb_bible_gloss_unanalysed_explains();
  let maps = [r2, r3, r4, r5];
  let r = objects_merge(maps);
  return r;
}
