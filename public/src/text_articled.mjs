import { log_unparse_try } from "../../../love/public/src/log_unparse_try.mjs";
import { list_any_starts_with } from "../../../love/public/src/list_any_starts_with.mjs";
import { list_to } from "../../../love/public/src/list_to.mjs";
export function text_articled(noun) {
  let article = "a";
  let vowels_lower = list_to("aeiou");
  log_unparse_try(right);
  let any = list_any_starts_with(noun, vowels_lower);
  if (any) {
    article += "n";
  }
  const articled = article + " " + noun;
  return articled;
}
