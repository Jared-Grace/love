import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_punctuation_dash_apostrophe_kept_split } from "./text_punctuation_dash_apostrophe_kept_split.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
export function ebible_chapters_words(chapters) {
  "$plain chapters";
  "Every different word a list of stored chapters spells, lowercased, in alphabetical order, counting as one word whatever somebody explaining the passage would put on one button.";
  "★ THIS IS THE READING, AND WHICH CHAPTERS TO READ IS THE CALLER'S QUESTION. Asking it about one book and asking it about a whole bible are the same reading over a different list, and they were the same reading written twice until this was given a name. Two copies of a reader do not break when one of them is improved - they drift - and this one holds three separate decisions that were each measured and each cost something to get right.";
  "It keeps the dash and the apostrophe inside a word, because the question is not what the words of the language are but what an author will treat as one entry: demon-possessed, mother-in-law and Moses' are each one button and each one sound.";
  "It cuts at punctuation as well. A reader that took punctuation out instead of cutting at it welded 1303 pairs into words nobody wrote across the English bible and hid 44 real words behind them.";
  arguments_assert(arguments, 1);
  let words = [];
  function chapter_each(chapter) {
    let verses = property_get(chapter, "verses");
    function verse_each(verse) {
      let text = property_get(verse, "text");
      let said = text_punctuation_dash_apostrophe_kept_split(text);
      function word_each(word) {
        let lower = text_lower_to(word);
        list_add(words, lower);
      }
      each(said, word_each);
    }
    each(verses, verse_each);
  }
  each(chapters, chapter_each);
  let unique = list_unique_sorted(words);
  return unique;
}
