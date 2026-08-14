import { list_map } from "./list_map.mjs";
import { list_to_dictionary_keys_lists } from "./list_to_dictionary_keys_lists.mjs";
import { wolff_entries } from "./wolff_entries.mjs";
import { wolff_entry_derived_words } from "./wolff_entry_derived_words.mjs";
import { wolff_word_key } from "./wolff_word_key.mjs";
export async function wolff_derived_words() {
  "Every built form the dictionary spells out in full, filed under the spelling a text writes it with, pointing at the entry that builds it.";
  "A text is written in built words and a dictionary is ordered by roots, and this is the one bridge between them that the book itself lays down. Nothing here works out how a word was put together or takes affixes off it by guess - every pair is a form the book printed under a headword, so a word found this way is found on the dictionary's own authority.";
  "It reaches only as far as the book chose to spell things out, which is not every form of every word. A word absent from it may still be built on a root that is here, and finding that is a different job that has to take the word apart.";
  let entries = await wolff_entries();
  function entry_keys(entry) {
    let words = wolff_entry_derived_words(entry);
    let keys = list_map(words, wolff_word_key);
    return keys;
  }
  let r = list_to_dictionary_keys_lists(entries, entry_keys);
  return r;
}
