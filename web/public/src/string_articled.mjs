import { list_any_starts_with } from "../../../love/public/src/list_any_starts_with.mjs";
export function string_articled(noun) {
  const article = "a";
  let vowels = "aeiou";
  let any = list_any_starts_with(noun, vowels);
  if (false) {
  }
  const articled = article + " " + noun;
  return articled;
}
