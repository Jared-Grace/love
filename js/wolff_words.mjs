import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_to_dictionary_keys_lists } from "./list_to_dictionary_keys_lists.mjs";
import { property_get } from "./property_get.mjs";
import { text_is } from "./text_is.mjs";
import { wolff_entries } from "./wolff_entries.mjs";
import { wolff_entry_headwords } from "./wolff_entry_headwords.mjs";
import { wolff_word_key } from "./wolff_word_key.mjs";
export async function wolff_words() {
  "The whole of Wolff's dictionary filed under the spellings a Cebuano text actually writes, each spelling holding every entry the book prints for it.";
  "Every entry keeps its list even when only one entry answers to a spelling, because the book prints unrelated words identically often enough that a single answer would be a guess. Which of two words a passage means is a thing to decide while reading the passage, and this is not that.";
  "A paragraph carrying no headword is dropped here rather than filed under nothing. Each section of the book opens with prose about the section, and that prose is a paragraph in the same place as the entries without being one.";
  "An entry headed by several spellings is filed once under each of them, and once only where two of those spellings come to the same thing. The book distinguishes some words by a mark this filing drops on purpose, so two headwords printed apart arrive here identical - and the entry would otherwise stand twice under one spelling, which reads as the book printing it twice.";
  "An entry headed by several spellings is filed under each of them. Read as one spelling, such a line matches nothing any text writes, so the entry answers to nobody - and nothing anywhere goes red, because an entry filed under a spelling no one asks for looks exactly like an entry nobody happened to want.";
  let entries = await wolff_entries();
  function headworded_is(entry) {
    let headword = property_get(entry, "headword");
    let carried = text_is(headword);
    return carried;
  }
  let kept = list_filter(entries, headworded_is);
  function entry_keys(entry) {
    let spellings = wolff_entry_headwords(entry);
    let keys = list_map(spellings, wolff_word_key);
    let once = list_unique(keys);
    return once;
  }
  let r = list_to_dictionary_keys_lists(kept, entry_keys);
  return r;
}
