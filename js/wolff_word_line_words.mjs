import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { text_trim } from "./text_trim.mjs";
import { wolff_derived_word_is } from "./wolff_derived_word_is.mjs";
export function wolff_word_line_words(line) {
  "The whole words one printed line of the dictionary gives, with the patterns showing where an affix goes left out.";
  "$plain line";
  "the line is a run of printed text from the book. It is taken apart and read; nothing reaches anywhere and nothing it is given is run.";
  "The book writes several spellings on one line, separated by commas, wherever one meaning has more than one form - and it does this at the head of an entry as readily as under it. Taken whole, such a line is a spelling nobody will ever look up: a word filed as ‘himu, himu’ is found by nobody asking about ‘himu’, and the entry is lost without anything going wrong anywhere.";
  let parts = text_split_comma(line);
  let trimmed = list_map(parts, text_trim);
  let r = list_filter(trimmed, wolff_derived_word_is);
  return r;
}
