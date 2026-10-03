import { arguments_assert } from "./arguments_assert.mjs";
import { app_search_chapter_verses_matching } from "./app_search_chapter_verses_matching.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function app_search_results_missing(words, div_results) {
  arguments_assert(arguments, 2);
  let r = await app_search_chapter_verses_matching(words);
  let dictionary = property_get(r, "dictionary");
  let words_missing = property_get(r, "words_missing");
  html_clear(div_results);
  let missing = list_empty_not_is(words_missing);
  let r2 = {
    dictionary,
    words_missing,
    missing,
  };
  return r2;
}
