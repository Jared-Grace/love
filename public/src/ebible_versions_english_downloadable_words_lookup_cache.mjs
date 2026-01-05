import { ebible_versions_english_downloadable_words_lookup } from "../../../love/public/src/ebible_versions_english_downloadable_words_lookup.mjs";
import { invoke_cache_file } from "../../../love/public/src/invoke_cache_file.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english_downloadable_words_lookup_cache() {
  marker("1");
  let v = await invoke_cache_file(
    ebible_versions_english_downloadable_words_lookup,
    [],
  );
  return v;
}
