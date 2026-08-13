import { not_equal } from "./not_equal.mjs";
import { bible_interlinear_original_keys_find } from "./bible_interlinear_original_keys_find.mjs";
import { bible_interlinear_row_marked_text } from "./bible_interlinear_row_marked_text.mjs";
import { bible_interlinear_word_base_text } from "./bible_interlinear_word_base_text.mjs";
import { bible_interlinear_words_base } from "./bible_interlinear_words_base.mjs";
import { not } from "./not.mjs";
export function bible_interlinear_verse_words_dropped(verse_words) {
  "What dropping the later editions costs one verse: the words removed, still wearing their";
  "marks, alongside how many words the verse had and how many of them survived.";
  "The words come back MARKED rather than clean, because the mark is the evidence. A reader";
  "checking whether this filter is honest needs to see which edition claimed each word, and";
  "a word stripped of its bracket is just a Greek word with an assertion attached to it.";
  "Counted against the words the verse actually has, not against its rows - the tables pad";
  "a verse with blank rows and carry rows for words only the English side supplies, and";
  "counting those would quietly divide the loss by a bigger number than the text has.";
  let keys = bible_interlinear_original_keys_find(verse_words);
  let marked_key = keys.marked;
  function marked_of(row) {
    let marked = bible_interlinear_row_marked_text(row, marked_key);
    return marked;
  }
  function word_present_is(row) {
    let marked2 = marked_of(row);
    let word = bible_interlinear_word_base_text(marked2);
    let word_present = not_equal(word, "");
    return word_present;
  }
  let present = verse_words.filter(word_present_is);
  let base = bible_interlinear_words_base(present, marked_key);
  let kept = new Set(base);
  function removed_is(row) {
    let held = kept.has(row);
    let n = not(held);
    return n;
  }
  function word_of(row) {
    let r2 = {
      marked: marked_of(row),
      language: row["Language"],
    };
    return r2;
  }
  let removed = present.filter(removed_is).map(word_of);
  let r = {
    removed,
    words_total: present.length,
    words_kept: base.length,
  };
  return r;
}
