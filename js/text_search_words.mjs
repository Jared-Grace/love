import { arguments_assert } from "./arguments_assert.mjs";
import { text_search_folded } from "./text_search_folded.mjs";
import { null_is } from "./null_is.mjs";
import { list_unique } from "./list_unique.mjs";
export function text_search_words(text) {
  "$plain text";
  "The words one run of text is known by in a search index, in any script, each named once and folded so accents do not matter.";
  "A word is a run of letters, the marks on them, and digits. Anything else - a space, punctuation, a quotation mark - is where one word ends.";
  "Chinese and Japanese write no space between words, so each of their characters is taken as a word of its own. A search for several characters then finds the verses holding all of them, wherever they stand in the verse.";
  "REJECTED: the browser's word segmenter. It cuts Chinese into real words, but by a dictionary that differs between browsers and between versions, and the index is cut once on this machine while the search box is cut on every reader's phone. Two cuttings that disagree make a word in the index that cannot be asked for, and nothing says so. One character to a word cannot disagree with itself.";
  arguments_assert(arguments, 1);
  let folded = text_search_folded(text);
  let characters = new RegExp(
    "[\\p{Script=Han}\\p{Script=Hiragana}\\p{Script=Katakana}]",
    "gu",
  );
  let spaced = folded.replace(characters, " $& ");
  let pattern = new RegExp("[\\p{L}\\p{M}\\p{N}]+", "gu");
  let found = spaced.match(pattern);
  if (null_is(found)) {
    let r = [];
    return r;
  }
  let words = list_unique(found);
  return words;
}
