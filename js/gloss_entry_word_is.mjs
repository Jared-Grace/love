import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { text_punctuation_removed } from "./text_punctuation_removed.mjs";
export function gloss_entry_word_is(entry) {
  "Whether one explanation is about a word of the passage at all, rather than about a mark that rides on the end of one.";
  "A full stop is not a word the reader is standing on - it belongs to the word before it - so an explanation of its own for a full stop is one place nobody is standing in, and every explanation painted after it is one word along from the word it is about.";
  "The rule sits here rather than inside the one thing that first needed it, because a check that finds these and a repair that drops them have to mean the same thing by 'a mark'. Two spellings of it would let a chapter be red for something the repair does not touch, which is a red light nothing can turn green.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let word = property_get(entry, word_key);
  let bare = text_punctuation_removed(word);
  let wordy = text_empty_not_is(bare);
  return wordy;
}
