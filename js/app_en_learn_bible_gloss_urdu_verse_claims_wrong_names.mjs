import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_verse_claims_wrong } from "./app_en_learn_bible_gloss_urdu_chapters_verse_claims_wrong.mjs";
import { gloss_chapters_claims_wrong_names } from "./gloss_chapters_claims_wrong_names.mjs";
export async function app_en_learn_bible_gloss_urdu_verse_claims_wrong_names() {
  "Every Urdu word explanation naming a verse of its own chapter that holds nothing built on the same English root, named once each by the chapter, the verses the passage covers, the word and the verse it named.";
  "★ A ROW HERE IS NOT YET A FAULT, AND IN THIS STORE FEWER OF THEM ARE THAN IN THE CEBUANO ONE. Measured on 2026-09-25 the store made fourteen thousand six hundred and twenty-five claims across eighty chapters and two thousand eight hundred and ninety-seven came back not held, which is one claim in five. Reading a sample of them showed the store's ordinary habit is to name a verse in order to point at some OTHER word standing there, or to say that a word was absent from it, and both of those are right while being caught. So this is a reading queue rather than a fault count, and the record is a ratchet rather than a nought.";
  "Three were read against the stored text and are genuinely wrong: the word and naming verse fifteen of the first letter of John's second chapter, which holds no and; the word is naming verse twenty-one, which holds no form of be; the word the naming verse twenty-six, which holds no the. So the queue is not empty of real faults either.";
  "How a row is named is the same in every store, so it is asked for rather than written out here.";
  arguments_assert(arguments, 0);
  let chapters =
    await app_en_learn_bible_gloss_urdu_chapters_verse_claims_wrong();
  let names = gloss_chapters_claims_wrong_names(chapters);
  return names;
}
