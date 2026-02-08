import { list_any_starts_with } from "../../../love/public/src/list_any_starts_with.mjs";
import { list_to } from "./list_to.mjs";
export function text_articled(noun) {
  let article = "a";
  let vowels = list_to("aeiou");
  let any = list_any_starts_with(noun, vowels);
  if (any) {
    article += "n";
  }
  const articled = article + " " + noun;
  return articled;
}
