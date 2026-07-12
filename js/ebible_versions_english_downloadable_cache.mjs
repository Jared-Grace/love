import { ebible_versions_english_downloadable } from "./ebible_versions_english_downloadable.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";
export async function ebible_versions_english_downloadable_cache() {
  let bible_folders = await invoke_cache_file(
    ebible_versions_english_downloadable,
    [],
  );
  return bible_folders;
}
