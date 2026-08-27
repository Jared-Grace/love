import { invoke_cache_file_clear } from "./invoke_cache_file_clear.mjs";
import { ebible_version_chapters } from "./ebible_version_chapters.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
export async function ebible_version_chapters_cache_refresh(bible_folder) {
  "The chapters of one bible, built again from the books on disk and written over whatever the cache was holding.";
  "The cache is what the upload reads, so after the reader itself changes there is no way to send the new wording up without this: asking for the chapters would hand back the answer the old reader gave, and the upload would put the old wording back where it already is and report success.";
  await invoke_cache_file_clear(ebible_version_chapters, [bible_folder]);
  let chapters = await ebible_version_chapters_cache(bible_folder);
  return chapters;
}
