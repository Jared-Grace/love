import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_chapters_verse_claims_wrong } from "./app_ceb_bible_gloss_chapters_verse_claims_wrong.mjs";
import { gloss_chapters_claims_wrong_names } from "./gloss_chapters_claims_wrong_names.mjs";
export async function app_ceb_bible_gloss_verse_claims_wrong_names() {
  "Every Cebuano word explanation naming a verse of its own chapter that holds nothing built on the same root, named once each by the chapter, the verses the passage covers, the word and the verse it named.";
  "★ A ROW HERE IS NOT YET A FAULT, WHICH IS WHY THE RECORD IS A RATCHET AND NOT A NOUGHT. An explanation is allowed to name a verse in order to say what happens in it - that the king was charged there, that the chapter was called a mother's teaching there - and such a sentence is right while being caught. Fifty of the fifty-six claims the store makes do hold, so the six standing here are the ones a reader has to judge one at a time, and freezing them is what turns the check into a warning about the next one.";
  "How a row is named is the same in every store, so it is asked for rather than written out here. What this keeps is which sweep to run.";
  arguments_assert(arguments, 0);
  let chapters = await app_ceb_bible_gloss_chapters_verse_claims_wrong();
  let names = gloss_chapters_claims_wrong_names(chapters);
  return names;
}
