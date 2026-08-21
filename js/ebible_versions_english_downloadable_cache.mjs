import { ebible_versions_english_downloadable } from "./ebible_versions_english_downloadable.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";
export async function ebible_versions_english_downloadable_cache() {
  "Which english bibles upstream offers for downloading, kept in a file after the first asking so that the rest of a session costs nothing and answers the same thing throughout it.";
  let bible_folders = await invoke_cache_file(
    ebible_versions_english_downloadable,
    [],
  );
  return bible_folders;
}
