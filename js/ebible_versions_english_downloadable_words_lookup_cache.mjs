import { ebible_versions_english_downloadable_words_lookup } from "./ebible_versions_english_downloadable_words_lookup.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";
export async function ebible_versions_english_downloadable_words_lookup_cache() {
  let v = await invoke_cache_file(
    ebible_versions_english_downloadable_words_lookup,
    [],
  );
  return v;
}
