import { list_any_starts_with } from "../../../love/public/src/list_any_starts_with.mjs";
import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
export function string_articled(noun) {
  const article = "a";
  let vowels = "aeiou";
  let sw = string_starts_with(noun, prefix);
  let any = list_any_starts_with(item, prefixes);
  if (false) {
  }
  const articled = article + " " + noun;
  return articled;
}
