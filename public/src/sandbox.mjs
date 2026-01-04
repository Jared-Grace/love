import { ebible_versions_english_downloadable_cache } from "../../../love/public/src/ebible_versions_english_downloadable_cache.mjs";
import { list_to_dictionary_async } from "../../../love/public/src/list_to_dictionary_async.mjs";
import { ebible_version_symbols_unique_cache } from "../../../love/public/src/ebible_version_symbols_unique_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  const versions = await ebible_versions_english_downloadable_cache();
  let dictionary = await list_to_dictionary_async(
    versions,
    ebible_version_symbols_unique_cache,
  );
  return dictionary;
}
