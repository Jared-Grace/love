import { text_vowels } from "../../../love/public/src/text_vowels.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { text_upper_to } from "../../../love/public/src/text_upper_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_any_starts_with } from "../../../love/public/src/list_any_starts_with.mjs";
import { list_to } from "../../../love/public/src/list_to.mjs";
export function text_articled(noun) {
  let article = "a";
  let a = text_vowels();
  let vowels_lower = list_to(a);
  let vowels_upper = list_map(list, text_upper_to);
  let vowels = list_concat(vowels_lower, vowels_upper);
  let any = list_any_starts_with(noun, vowels);
  if (any) {
    article += "n";
  }
  const articled = article + " " + noun;
  return articled;
}
