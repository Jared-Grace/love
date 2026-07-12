import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ternary } from "./ternary.mjs";
import { word_plural } from "./word_plural.mjs";
export function word_count_pluralize(count_total, word) {
  let w = word_plural(word);
  let t = ternary(count_total === 1, word, w);
  let p = text_combine_multiple([count_total, " ", t]);
  return p;
}
