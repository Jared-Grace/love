import { gloss_passage_entries_kept_set } from "./gloss_passage_entries_kept_set.mjs";
import { gloss_entry_word_is } from "./gloss_entry_word_is.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_filter } from "./list_filter.mjs";
export function gloss_passage_punctuation_entries_repair(passage) {
  "Drop the explanations of one passage that explain a mark rather than a word, and answer with how many were dropped.";
  "The page paints the explanations under the passage in order and nothing on it repeats which word each one is about, so a reader takes the third explanation to be about the third word. A full stop is not a word of the passage - it rides on the end of the word before it - so an explanation of its own for a full stop is one place nobody is standing in, and every explanation after it is painted one word along.";
  "Nothing of what a reader came for is lost by dropping one: what it explains is a mark, and the word it was standing between is explained by its own entry either side.";
  let entries = gloss_passage_entries(passage);
  let kept = list_filter(entries, gloss_entry_word_is);
  let removed = gloss_passage_entries_kept_set(passage, entries, kept);
  return removed;
}
