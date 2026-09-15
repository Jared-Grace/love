import { list_map_filter } from "./list_map_filter.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function app_en_learn_bible_gloss_urdu_explain_sentences(explain) {
  "Cut one Urdu explanation into the sentences it is made of.";
  "Urdu closes a sentence with its own mark rather than the full stop English uses, and it closes the last sentence too, so cutting on that mark leaves an empty piece at the end that is thrown away here rather than by every caller.";
  arguments_assert(arguments, 1);
  let stop = "۔";
  let pieces = text_split(explain, stop);
  let sentences = list_map_filter(pieces, text_trim, text_empty_not_is);
  return sentences;
}
