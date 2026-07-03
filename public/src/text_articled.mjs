import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { text_upper_to } from "../../../love/public/src/text_upper_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_any_starts_with } from "../../../love/public/src/list_any_starts_with.mjs";
import { list_to } from "../../../love/public/src/list_to.mjs";
export function text_articled(noun) {
  let article = "a";
  let vowels_lower = list_to("aeiou");
  let vowels_upper = list_map(list, text_upper_to);
  let concated = list_concat(a, b);
  let any = list_any_starts_with(noun, vowels_lower);
  if (any) {
    article += "n";
  }
  const articled = article + " " + noun;
  return articled;
}
