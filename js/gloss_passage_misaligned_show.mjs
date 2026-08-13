import { gloss_passage_words_misaligned } from "./gloss_passage_words_misaligned.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
export function gloss_passage_misaligned_show(passage, words_read) {
  "Everything somebody needs in front of them to write the missing explanations of one passage back in, or nothing when its explanations already line up.";
  "The reader that finds the fault says only where the two sides first part company, which is the right answer for a gate and far too little to author by. This lays the passage out beside the words its explanations name, so the run that was never explained can be seen as a run rather than as one index.";
  "The explaining prose is deliberately left out and only the words are listed. What is missing is found by comparing words, and carrying every explanation along would bury the comparison in the very text being repaired.";
  let misaligned = gloss_passage_words_misaligned(passage, words_read);
  let aligned = null_is(misaligned);
  if (aligned) {
    let fine = null;
    return fine;
  }
  let entries = gloss_passage_entries(passage);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let words_explained = list_map_property(entries, word_key);
  let words_written = words_read(passage);
  let line = list_join_space(words_written);
  let texts = property_get(passage, "texts");
  let r = {
    verses: g_sermon_passage_verses_key(passage),
    misaligned,
    line,
    texts,
    words_explained,
  };
  return r;
}
