import { list_to_dictionary_unordered_async } from "../../../love/public/src/list_to_dictionary_unordered_async.mjs";
import { ebible_version_symbols_unique_cache } from "../../../love/public/src/ebible_version_symbols_unique_cache.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { ebible_versions_english } from "../../../love/public/src/ebible_versions_english.mjs";
export async function sandbox() {
  marker("1");
  const versions = await ebible_versions_english();
  let dictionary = await list_to_dictionary_unordered_async(
    versions,
    ebible_version_symbols_unique_cache,
  );
  return dictionary;
}
