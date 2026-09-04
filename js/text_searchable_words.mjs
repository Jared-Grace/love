import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function text_searchable_words(searchable) {
  "$plain searchable";
  "The separate words of a piece of writing that has been laid out to be searched, in the order they stand in it.";
  "The laying out is what makes this a split and not a reading of the language. Every word there stands between two spaces of its own, so a pair of spaces falls between each word and the next, and a single space is left over at each end. Taking the pair as the divider and trimming what is left is exact: nothing about the language is being guessed at, and a script that puts no spaces of its own between its words comes out the same as one that does.";
  "Writing with no words in it is laid out as a single space, which the split would otherwise hand back as one word that is empty. An empty word is not a word, and every caller counting neighbours would count it, so it is dropped here where the laying out is already known rather than at each place that asks.";
  arguments_assert(arguments, 1);
  let pieces = searchable.split("  ");
  let words = list_map(pieces, text_trim);
  let first = words[0];
  let wordless = text_empty_is(first);
  if (wordless) {
    let r = [];
    return r;
  }
  return words;
}
