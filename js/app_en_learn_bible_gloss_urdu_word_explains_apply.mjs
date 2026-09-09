import { app_en_learn_bible_gloss_urdu_word_explains } from "./app_en_learn_bible_gloss_urdu_word_explains.mjs";
import { gloss_chapters_word_explains_set } from "./gloss_chapters_word_explains_set.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_shared_label_is } from "./app_en_learn_bible_gloss_urdu_shared_label_is.mjs";
export async function app_en_learn_bible_gloss_urdu_word_explains_apply() {
  "Write the settled wording for each named English word over the shared labels standing under that word in the store that teaches English to an Urdu reader, and answer with the chapters it rewrote.";
  "It takes no list from the caller and finds none of its own by reading: the words and their wordings are written down together in one place, so adding a word there and running this again covers the new word and asks nothing twice.";
  "It writes over a shared label and nothing else. Most of these words also carry, in some places, a sentence written for the verse they stand in - ‘to’ marking where a crowd went, ‘that’ opening what somebody said - and a settled wording is better than a class label and worse than that. So the one thing that must not happen is the settled wording taking the place of both.";
  let explains = app_en_learn_bible_gloss_urdu_word_explains();
  let r = await gloss_chapters_word_explains_set(
    app_en_learn_bible_gloss_urdu_generate,
    explains,
    app_en_learn_bible_gloss_urdu_shared_label_is,
  );
  return r;
}
