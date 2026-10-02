import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_chapters_verse_claims_wrong } from "./app_ceb_bible_gloss_chapters_verse_claims_wrong.mjs";
import { gloss_chapters_claims_wrong_names } from "./gloss_chapters_claims_wrong_names.mjs";
export async function app_ceb_bible_gloss_verse_claims_wrong_names() {
  "Every Cebuano word explanation naming a verse of its own chapter that holds nothing built on the same root, named once each by the chapter, the verses the passage covers, the word and the verse it named.";
  "★ A ROW HERE IS NOT YET A FAULT, WHICH IS WHY THE RECORD IS A RATCHET AND NOT A NOUGHT. An explanation is allowed to name a verse in order to say what happens in it - that the king was charged there, that the chapter was called a mother's teaching there - and such a sentence is right while being caught. So a row is something a reader has to judge one at a time, and freezing the ones already judged is what turns the check into a warning about the next one.";
  "★ THIS CHECK IS NOW A TRIPWIRE RATHER THAN A QUEUE, BECAUSE THE WRITERS OF THIS STORE ALMOST NEVER NAME A VERSE. Measured on 2026-10-02 over nine hundred and seventy-nine chapters, the whole store names a numbered verse about twenty times, and exactly one of those is a claim this reading can pin to a word - in Mark thirteen, and it holds. The record went to nought on the same day, so the next explanation that names a verse wrongly fails the build outright instead of joining a list.";
  "That is a change of kind and not of degree, and it is worth knowing which one you are reading. The record used to stand at six, out of fifty-six claims, over a store that was a handful of chapters - and all six were in Proverbs thirty-one, which has since been rewritten and now names no verse at all. A number measured against a store is only true of the store it was measured on, and this one grew by two orders of magnitude underneath it.";
  "The Urdu store is the opposite case and the comparison is the useful half: it says آیت twenty-four thousand times, so the same reading over it is a long reading queue. The difference is not the languages, it is what the writers habitually do, and nothing in the reading can tell you which kind of store it has been handed.";
  "How a row is named is the same in every store, so it is asked for rather than written out here. What this keeps is which sweep to run.";
  arguments_assert(arguments, 0);
  let chapters = await app_ceb_bible_gloss_chapters_verse_claims_wrong();
  let names = gloss_chapters_claims_wrong_names(chapters);
  return names;
}
