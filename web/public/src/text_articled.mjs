import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { list_vowels } from "../../../love/public/src/list_vowels.mjs";
import { list_any_starts_with } from "../../../love/public/src/list_any_starts_with.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function text_articled(noun) {
  let exceptions = ["something"];
  let includes = list_includes(exceptions, noun);
  if (includes) {
    return noun;
  }
  let article = "a";
  let vowels = list_vowels();
  let any = list_any_starts_with(noun, vowels);
  if (any) {
    article += "n";
  }
  let articled = text_combine_multiple([article, " ", noun]);
  return articled;
}
