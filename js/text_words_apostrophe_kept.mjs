import { text_words } from "./text_words.mjs";
import { text_punctuation_apostrophe_kept_removed } from "./text_punctuation_apostrophe_kept_removed.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
export function text_words_apostrophe_kept(t) {
  "The words one piece of text carries, cut apart at spaces and at every dash, with an apostrophe inside a word left where it is.";
  "This is the reader for a language that only ever writes a dash between two words, which English does. The one beside it keeps a dash inside a word, because Cebuano spells the catch in the throat that way and cutting there makes two words nobody wrote.";
  "Nothing empty comes back, so a mark standing on its own adds no word.";
  let words = text_words(t);
  function word_bare(word) {
    let bare = text_punctuation_apostrophe_kept_removed(word);
    return bare;
  }
  let bare = list_map(words, word_bare);
  let said = list_filter_text_empty_not_is(bare);
  return said;
}
