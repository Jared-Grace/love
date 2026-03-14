import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
import { word_plural } from "../../../love/public/src/word_plural.mjs";
export function word_count_pluralize(count_total, word) {
  let w = word_plural(word);
  let t = ternary(count_total === 1, word, w);
  let p = text_combine_multiple([count_total, " ", t]);
  return p;
}
