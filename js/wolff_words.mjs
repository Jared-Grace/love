import { list_filter } from "./list_filter.mjs";
import { list_to_dictionary_key_lists } from "./list_to_dictionary_key_lists.mjs";
import { property_get } from "./property_get.mjs";
import { text_is } from "./text_is.mjs";
import { wolff_entries } from "./wolff_entries.mjs";
import { wolff_word_key } from "./wolff_word_key.mjs";
export async function wolff_words() {
  "The whole of Wolff's dictionary filed under the spellings a Cebuano text actually writes, each spelling holding every entry the book prints for it.";
  "Every entry keeps its list even when only one entry answers to a spelling, because the book prints unrelated words identically often enough that a single answer would be a guess. Which of two words a passage means is a thing to decide while reading the passage, and this is not that.";
  "A paragraph carrying no headword is dropped here rather than filed under nothing. Each section of the book opens with prose about the section, and that prose is a paragraph in the same place as the entries without being one.";
  let entries = await wolff_entries();
  function headworded_is(entry) {
    let headword = property_get(entry, "headword");
    let carried = text_is(headword);
    return carried;
  }
  let kept = list_filter(entries, headworded_is);
  function entry_key(entry) {
    let headword = property_get(entry, "headword");
    let key = wolff_word_key(headword);
    return key;
  }
  let r = list_to_dictionary_key_lists(kept, entry_key);
  return r;
}
