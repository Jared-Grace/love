import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_occurrence_claims_wrong } from "./app_en_learn_bible_gloss_urdu_chapters_occurrence_claims_wrong.mjs";
import { gloss_chapters_claims_wrong_names_generic } from "./gloss_chapters_claims_wrong_names_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_occurrence_claims_wrong_names() {
  "Every Urdu word explanation saying which time over one of its English words has come and naming a number the chapter's own words reach no way of counting, named once each by the chapter, the verses the passage covers, the word, and which explanation in the passage said it.";
  "★ A ROW HERE IS A FAULT, UNLIKE THE QUEUE OF VERSE CLAIMS BESIDE IT. A sentence is only kept when the number it names is reached by neither way of counting the chapter's words, so no row here waits on anybody deciding anything. Measured on 2026-10-20 the store held one: the word to in the thirty-seventh verse of Genesis nineteen is called the twenty-eighth and is the twenty-seventh, counted by hand against the chapter file both ways.";
  "The place in the passage is what names a row rather than the number claimed, because one English word is explained many times in one chapter and a sentence that gets rewritten would otherwise read as a new fault.";
  "How a row is named is the same in every store, so it is asked for rather than written out here, and the part of the finding that distinguishes one row from another is handed over because this reading's rows differ by where they stand and not by what verse they name.";
  arguments_assert(arguments, 0);
  let part = "at";
  let chapters =
    await app_en_learn_bible_gloss_urdu_chapters_occurrence_claims_wrong();
  let names = gloss_chapters_claims_wrong_names_generic(chapters, part);
  return names;
}
