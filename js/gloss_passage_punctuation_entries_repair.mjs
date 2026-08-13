import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { text_punctuation_removed } from "./text_punctuation_removed.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { subtract } from "./subtract.mjs";
export function gloss_passage_punctuation_entries_repair(passage) {
  "Drop the explanations of one passage that explain a mark rather than a word, and answer with how many were dropped.";
  "The page paints the explanations under the passage in order and nothing on it repeats which word each one is about, so a reader takes the third explanation to be about the third word. A full stop is not a word of the passage - it rides on the end of the word before it - so an explanation of its own for a full stop is one place nobody is standing in, and every explanation after it is painted one word along.";
  "Nothing of what a reader came for is lost by dropping one: what it explains is a mark, and the word it was standing between is explained by its own entry either side.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let entries = gloss_passage_entries(passage);
  function word_is(entry) {
    let word = property_get(entry, word_key);
    let bare = text_punctuation_removed(word);
    let wordy = text_empty_not_is(bare);
    return wordy;
  }
  let kept = list_filter(entries, word_is);
  let value = json_format_to(kept);
  property_set(passage, "generated", value);
  let left = list_size(entries);
  let right = list_size(kept);
  let removed = subtract(left, right);
  return removed;
}
