import { property_list_map } from "./property_list_map.mjs";
import { wolff_word_line_words } from "./wolff_word_line_words.mjs";
export function wolff_entry_derived_words(entry) {
  "Every whole word one dictionary entry builds on its headword, with the patterns showing where an affix goes left out.";
  "These are the words a reader actually meets. A Cebuano text is written in built forms far more often than in the roots they are built from, and the book prints a great many of those forms in full under the root - so they can be found by the spelling on the page, without anything having to work out how the word was put together.";
  "A line listing several forms at once is split apart first. The book writes them separated by commas where one meaning has more than one form, and taken whole the line is a spelling nobody will ever look up.";
  let split = property_list_map(entry, "derived", wolff_word_line_words);
  let r = split.flat();
  return r;
}
