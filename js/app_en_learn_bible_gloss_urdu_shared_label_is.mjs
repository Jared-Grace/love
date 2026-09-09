import { app_en_learn_bible_gloss_urdu_shared_labels } from "./app_en_learn_bible_gloss_urdu_shared_labels.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_en_learn_bible_gloss_urdu_shared_label_is(explain) {
  "Whether an explanation in the store that explains English words to an Urdu reader is one of the wordings handed to a whole class of words at once, and so may be written over by a sentence written for the one word under it.";
  "Matched word for word rather than by anything the sentence contains. A wording is on the list because somebody read it and judged it to say nothing about the particular word, which is a judgment about that sentence and not about a turn of phrase - and a wording that merely looks like one of these, but was written for the place it sits in, must not be caught. The cost of being wrong is one way only: the sentence that was there cannot be got back.";
  let labels = app_en_learn_bible_gloss_urdu_shared_labels();
  let shared = list_includes(labels, explain);
  return shared;
}
