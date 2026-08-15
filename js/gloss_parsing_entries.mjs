import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_parsing_entries(phrases, words) {
  arguments_assert(arguments, 2);
  ("The phrase table's entry for each word of a parsing, and nothing at all when the table has no entry for one of them.");
  ("Nothing rather than the entries it did find, because a caller handed a short list has no way to tell a parsing that carried fewer words from one carrying a word nobody has written a phrase for - and the two mean opposite things.");
  ("A word the table knows but leaves without a phrase is dropped rather than refused. It is a word somebody has already looked at and decided says nothing a reader needs, which is a decision recorded in the table rather than a gap in it.");
  let entries = [];
  for (let word of words) {
    let entry = list_find_property(phrases, "word", word);
    if (not(entry)) {
      return null;
    }
    let phrase = property_get(entry, "phrase");
    if (not(phrase)) {
      continue;
    }
    list_add(entries, entry);
  }
  return entries;
}
