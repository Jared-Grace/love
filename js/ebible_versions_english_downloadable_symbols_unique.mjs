import { text_symbols_unique_multiple } from "./text_symbols_unique_multiple.mjs";
import { object_values } from "./object_values.mjs";
import { ebible_version_symbols_unique_cache } from "./ebible_version_symbols_unique_cache.mjs";
import { list_to_dictionary_async } from "./list_to_dictionary_async.mjs";
import { ebible_versions_english_downloadable_cache } from "./ebible_versions_english_downloadable_cache.mjs";
export async function ebible_versions_english_downloadable_symbols_unique() {
  let versions = await ebible_versions_english_downloadable_cache();
  let dictionary = await list_to_dictionary_async(
    versions,
    ebible_version_symbols_unique_cache,
  );
  let v = object_values(dictionary);
  let unique = text_symbols_unique_multiple(v);
  return unique;
}
