import { text_symbols_unique_multiple } from "../../../love/public/src/text_symbols_unique_multiple.mjs";
import { object_values } from "../../../love/public/src/object_values.mjs";
import { ebible_version_symbols_unique_cache } from "../../../love/public/src/ebible_version_symbols_unique_cache.mjs";
import { list_to_dictionary_async } from "../../../love/public/src/list_to_dictionary_async.mjs";
import { ebible_versions_english_downloadable_cache } from "../../../love/public/src/ebible_versions_english_downloadable_cache.mjs";
export async function ebible_versions_english_downloadable_symbols_unique() {
  const versions = await ebible_versions_english_downloadable_cache();
  let dictionary = await list_to_dictionary_async(
    versions,
    ebible_version_symbols_unique_cache,
  );
  let v = object_values(dictionary);
  let unique = text_symbols_unique_multiple(v);
  return unique;
}
