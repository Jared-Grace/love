import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { bible_search_language_built_download } from "./bible_search_language_built_download.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function app_search_language_searchable(language_code) {
  "$plain language_code";
  "Whether storage holds a search index for one language. English always has one; any other language has one once its upload has written its mark.";
  arguments_assert(arguments, 1);
  let right = ebible_language_en_code();
  let english = equal(language_code, right);
  if (english) {
    return true;
  }
  let built = await bible_search_language_built_download(language_code);
  let searchable = null_not_is(built);
  return searchable;
}
