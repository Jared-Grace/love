import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_map } from "./list_map.mjs";
import { regex_punctuation_dash_kept } from "./regex_punctuation_dash_kept.mjs";
export function text_punctuation_dash_kept_split(t) {
  "The words one piece of text carries, cut apart wherever punctuation stands, with a dash inside a word left where it is.";
  "This is the reader for a language that writes a dash inside its words, which Cebuano does. The one beside it cuts at every dash and is right everywhere that a dash only ever stands between two words.";
  "A dash left hanging at either end of a word is taken off, since there it was standing between things after all. Nothing empty comes back, so a run of dashes on a line of its own adds no words.";
  function dash_trim(part) {
    let stripped = part.replace(/^-+|-+$/g, "");
    return stripped;
  }
  let r = regex_punctuation_dash_kept();
  let parts = t.split(r);
  let trimmed = list_map(parts, dash_trim);
  let words = list_filter_text_empty_not_is(trimmed);
  return words;
}
