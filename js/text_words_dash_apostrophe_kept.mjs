import { text_split_space } from "./text_split_space.mjs";
import { text_punctuation_dash_apostrophe_kept_removed } from "./text_punctuation_dash_apostrophe_kept_removed.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
export function text_words_dash_apostrophe_kept(t) {
  "The words one piece of text carries, cut apart at spaces alone, with a dash and an apostrophe inside a word both left where they are.";
  "★ IT CUTS AT SPACES AND NOWHERE ELSE, WHICH IS THE WHOLE DIFFERENCE FROM THE READER BESIDE IT. That one cuts at every dash as well, which is the right reading of English and the wrong list for this job: a hyphenated pair is two words of the language and one word on a button, and it is buttons this list is for.";
  "Nothing empty comes back, so a dash or a quotation mark standing on its own adds no word.";
  let split = text_split_space(t);
  function word_bare(word) {
    let stripped = text_punctuation_dash_apostrophe_kept_removed(word);
    return stripped;
  }
  let bare = list_map(split, word_bare);
  let said = list_filter_text_empty_not_is(bare);
  return said;
}
