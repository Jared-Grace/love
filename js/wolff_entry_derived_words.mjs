import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { text_trim } from "./text_trim.mjs";
import { wolff_derived_word_is } from "./wolff_derived_word_is.mjs";
export function wolff_entry_derived_words(entry) {
  "Every whole word one dictionary entry builds on its headword, with the patterns showing where an affix goes left out.";
  "These are the words a reader actually meets. A Cebuano text is written in built forms far more often than in the roots they are built from, and the book prints a great many of those forms in full under the root - so they can be found by the spelling on the page, without anything having to work out how the word was put together.";
  "A line listing several forms at once is split apart first. The book writes them separated by commas where one meaning has more than one form, and taken whole the line is a spelling nobody will ever look up.";
  let derived = property_get(entry, "derived");
  function line_split(line) {
    let parts = text_split_comma(line);
    let trimmed = list_map(parts, text_trim);
    return trimmed;
  }
  let split = list_map(derived, line_split);
  let all = split.flat();
  let r = list_filter(all, wolff_derived_word_is);
  return r;
}
