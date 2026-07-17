import { ternary } from "./ternary.mjs";
import { word_plural } from "./word_plural.mjs";
export function word_pluralize(count, word) {
  "the word in singular form when count is 1, otherwise its plural; plural is the naive word_plural (adds s), so pass a regularly-pluralized word";
  let many = word_plural(word);
  let one = count === 1;
  let chosen = ternary(one, word, many);
  return chosen;
}
