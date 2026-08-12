import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each } from "./each.mjs";
import { null_is } from "./null_is.mjs";
import { not_equal } from "./not_equal.mjs";
import { each_index } from "./each_index.mjs";
import { list_size } from "./list_size.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
export function gloss_passage_words_misaligned(passage, words_read) {
  "Where a passage's word explanations stop lining up with the passage itself, or nothing when they line up all the way through.";
  "The page paints the passage and then the explanations straight under it, one after another in order, so a reader takes the third explanation to be about the third word. Nothing on the page repeats a word's place to check that against - the alignment is the whole of the promise, and a single skipped word silently shifts every explanation after it onto the wrong word.";
  "Which of a passage's texts is the one being explained is asked for rather than assumed, because a store glossing the original language and a store glossing a translation both live in this shape and reading the wrong one of the two reports every passage as broken.";
  "An explanation may name several words at once, so what is compared is the words themselves rather than the count of explanations. A passage nobody has authored yet lines up trivially and is reported as fine; asking which passages are still waiting is a different question.";
  let entries = gloss_passage_entries(passage);
  if (list_empty_is(entries)) {
    let none = null;
    return none;
  }
  let written = words_read(passage);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explained = [];
  function entry_read(entry) {
    let word = property_get(entry, word_key);
    let words = text_split_space(word);
    list_add_multiple(explained, words);
  }
  each(entries, entry_read);
  let difference = null;
  function compare(word, index) {
    let first = null_is(difference);
    if (first) {
      let other = explained[index];
      let neq = not_equal(word, other);
      if (neq) {
        difference = {
          index,
          written: word,
          explained: other,
        };
      }
    }
  }
  each_index(written, compare);
  let count = list_size(written);
  let counted_same = list_size_equal(explained, count);
  let matched = null_is(difference);
  if (matched && counted_same) {
    let aligned = null;
    return aligned;
  }
  let r = {
    verses: g_sermon_passage_verses_key(passage),
    words: count,
    explained: list_size(explained),
    difference,
  };
  return r;
}
