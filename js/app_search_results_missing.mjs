import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function app_search_results_missing(matching, div_results) {
  arguments_assert(arguments, 2);
  let r = matching;
  let dictionary = property_get(r, "dictionary");
  let words_missing = property_get(r, "words_missing");
  let missing = list_empty_not_is(words_missing);
  let r2 = {
    dictionary,
    words_missing,
    missing,
  };
  return r2;
}
