import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_explain_sentences } from "./app_en_learn_bible_gloss_urdu_explain_sentences.mjs";
import { app_en_learn_bible_gloss_urdu_explain_pointing_sentence_is } from "./app_en_learn_bible_gloss_urdu_explain_pointing_sentence_is.mjs";
import { app_en_learn_bible_gloss_urdu_explain_aside_is } from "./app_en_learn_bible_gloss_urdu_explain_aside_is.mjs";
import { not } from "./not.mjs";
import { and } from "./and.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_en_learn_bible_gloss_urdu_explain_meaning_parts(explain) {
  "The sentences of one Urdu explanation that say what the word means, with the pointing and the asides about this one place left out.";
  "What is left is the part that would still be true if the word stood somewhere else in the chapter, which is exactly the part another place may borrow. An explanation whose every sentence is thrown out here has nothing to lend, and answers with an empty list rather than with nothing, so a caller can tell that apart from a word never seen.";
  arguments_assert(arguments, 1);
  let sentences = app_en_learn_bible_gloss_urdu_explain_sentences(explain);
  function meaning_is(sentence) {
    let pointing =
      app_en_learn_bible_gloss_urdu_explain_pointing_sentence_is(sentence);
    let aside = app_en_learn_bible_gloss_urdu_explain_aside_is(sentence);
    let carried = not(pointing);
    let own = not(aside);
    let meaning = and(carried, own);
    return meaning;
  }
  let parts = list_filter(sentences, meaning_is);
  return parts;
}
