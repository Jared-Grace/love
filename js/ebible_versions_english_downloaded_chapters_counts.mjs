import { ebible_versions_english_downloadable_cache } from "./ebible_versions_english_downloadable_cache.mjs";
import { list_map_async_record_try } from "./list_map_async_record_try.mjs";
import { ebible_version_downloaded_chapters_count } from "./ebible_version_downloaded_chapters_count.mjs";
export async function ebible_versions_english_downloaded_chapters_counts() {
  "How many chapters of scripture each English bible this repo can download is actually holding on this disk.";
  "The search index is built by walking these folders, and a folder with no pages in it walks to nothing without saying so - it looks exactly like a bible that disagrees about numbering everywhere, and it is turned away for a reason that was never true. Two dozen of them were in that state and the index carried not one word of any of them.";
  let bible_folders = await ebible_versions_english_downloadable_cache();
  let found = await list_map_async_record_try(
    bible_folders,
    ebible_version_downloaded_chapters_count,
  );
  return found;
}
