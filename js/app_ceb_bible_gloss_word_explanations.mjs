import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing } from "./app_ceb_bible_gloss_roots_disagreeing.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_offenders_word_explanations } from "./gloss_offenders_word_explanations.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_word_explanations(word) {
  "Every way the Cebuano app has explained one word, commonest wording first: the sheet to read before deciding which of two explanations is the wrong one.";
  "The queue of words explained more than one way says which roots were claimed and how often and in which chapters, and it cannot say the one thing the decision turns on - what the reader is actually shown. Ask this for a word off that queue and the wordings come back side by side, each once, so the choice is made from a screen rather than from a search.";
  "Only words the findings caught are here, which means only words where the dictionary and the app disagreed at all. A word explained perfectly consistently is not in the findings and will come back empty, and that is the right answer rather than a fault.";
  "$plain word";
  "the word to gather, as it is spelled anywhere it appears. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let disagreeing = await app_ceb_bible_gloss_roots_disagreeing();
  let offenders = property_get(disagreeing, "offenders");
  let wordings = gloss_offenders_word_explanations(offenders, word);
  let wordings_total = list_size(wordings);
  let consulted = property_get(disagreeing, "consulted");
  let r = {
    word,
    consulted,
    wordings_total,
    wordings,
  };
  return r;
}
