import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { app_en_learn_bible_gloss_urdu_words_glosses } from "./app_en_learn_bible_gloss_urdu_words_glosses.mjs";
export async function app_en_learn_bible_gloss_urdu_words_glosses_args(
  words_text,
) {
  "$plain words_text";
  "The same reading of every Urdu meaning given to a list of English words, with the list handed over as one comma-joined word so it can come off a command line.";
  "A command line hands each word over separately, so a list has to arrive joined and be split here. Walking the joined text as if it were already a list would read it one letter at a time and answer for the alphabet.";
  arguments_assert(arguments, 1);
  let words = text_split_comma(words_text);
  let r = await app_en_learn_bible_gloss_urdu_words_glosses(words);
  return r;
}
