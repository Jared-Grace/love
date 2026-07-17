import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { word_pluralize } from "./word_pluralize.mjs";
export function word_count_pluralize(count_total, word) {
  let t = word_pluralize(count_total, word);
  let p = text_combine_multiple([count_total, " ", t]);
  return p;
}
