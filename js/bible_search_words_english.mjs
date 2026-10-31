import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_versions_english_downloadable_words_lookup_cache } from "./ebible_versions_english_downloadable_words_lookup_cache.mjs";
import { properties_get } from "./properties_get.mjs";
export async function bible_search_words_english() {
  "Every word the English search index holds, and nothing about where each one stands - the vocabulary on its own, small enough to read through when judging which spellings ought to meet.";
  arguments_assert(arguments, 0);
  let lookup = await ebible_versions_english_downloadable_words_lookup_cache();
  let words = properties_get(lookup);
  return words;
}
