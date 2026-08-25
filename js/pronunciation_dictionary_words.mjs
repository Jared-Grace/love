import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_lines } from "./file_read_lines.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_split_space } from "./text_split_space.mjs";
export async function pronunciation_dictionary_words(file_path) {
  "$plain file_path";
  "Every word a pronouncing dictionary holds an entry for, said once each and in small letters.";
  "A word that can be said more than one way is written out once per saying, and every line after the first marks itself with a number in brackets - abbey, then abbey(2). The brackets are cut off, so a word is met once however many ways there are to say it.";
  "Only the word is read and the sounds after it are dropped, because the question here is which words the dictionary has heard of rather than how any of them is pronounced.";
  arguments_assert(arguments, 1);
  let lines = await file_read_lines(file_path);
  function word_of(line) {
    let fields = text_split_space(line);
    let first = fields[0];
    let bare = first.replace(/\(\d+\)$/, "");
    let lower = text_lower_to(bare);
    return lower;
  }
  let words = list_map(lines, word_of);
  function said(word) {
    let g = greater_than(word.length, 0);
    return g;
  }
  let nonempty = list_filter(words, said);
  let unique = list_unique(nonempty);
  return unique;
}
