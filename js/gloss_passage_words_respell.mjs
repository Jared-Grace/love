import { list_slice_count } from "./list_slice_count.mjs";
import { text_words_replaced } from "./text_words_replaced.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { text_punctuation_split } from "./text_punctuation_split.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function gloss_passage_words_respell(passage, words_read) {
  "Give every explanation in one passage the passage's own spelling of the word it is about, and answer with the spellings it changed.";
  "The word an explanation names is written out beside the explanation rather than pointed at, so it can be spelt differently from the word it sits under - a letter doubled, a letter dropped, an accent nobody else wrote. The reader is then shown a word the passage does not contain, next to an explanation that is otherwise standing in exactly the right place.";
  "It refuses the whole passage unless the words named come to the same number as the words there are. That is the difference between a misspelling and a real gap: where a word was never explained at all, every explanation after it is about a different word, and writing the passage's spellings over them would not correct anything - it would paint the fault over and make it unfindable.";
  "An explanation naming several words at once is corrected the same way, word by word: only the runs of letters are swapped, so the hyphen inside a word and the comma at the end of one stay exactly where they were written.";
  let entries = gloss_passage_entries(passage);
  if (list_empty_is(entries)) {
    let none = [];
    return none;
  }
  let words_written = words_read(passage);
  let line = list_join_space(words_written);
  let written = text_punctuation_split(line);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let named = 0;
  function entry_measure(entry) {
    let word = property_get(entry, word_key);
    let words = text_punctuation_split(word);
    let right = list_size(words);
    named = add(named, right);
  }
  each(entries, entry_measure);
  let count = list_size(written);
  let counted_same = equal(named, count);
  if (not(counted_same)) {
    let gapped = [];
    return gapped;
  }
  let changes = [];
  let at = 0;
  function entry_respell(entry) {
    let word = property_get(entry, word_key);
    let words = text_punctuation_split(word);
    let size = list_size(words);
    let taken = list_slice_count(written, at, size);
    at = add(at, size);
    let after = text_words_replaced(word, taken);
    let same = equal(word, after);
    if (same) {
      return;
    }
    property_set(entry, word_key, after);
    let change = {
      before: word,
      after,
    };
    list_add(changes, change);
  }
  each(entries, entry_respell);
  let none_changed = list_empty_is(changes);
  if (none_changed) {
    return changes;
  }
  let value = json_format_to(entries);
  property_set(passage, "generated", value);
  return changes;
}
