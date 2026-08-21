import { ebible_versions_english_downloadable_cache } from "./ebible_versions_english_downloadable_cache.mjs";
import { list_map_async_record_try } from "./list_map_async_record_try.mjs";
import { ebible_version_downloaded_chapters_count } from "./ebible_version_downloaded_chapters_count.mjs";
export async function ebible_versions_english_downloaded_chapters_counts() {
  "How many chapters of scripture each English bible this repo can download is actually holding on this disk.";
  "The search index is built by walking these folders, and a folder with no pages in it walks to nothing without saying so - it looks exactly like a bible that disagrees about numbering everywhere. So when two dozen of these carried not one word into the index, this was asked first, and it was not the answer: every one of those is holding all eleven hundred and eighty-nine chapters. What stops them is that the walk cuts verses out of the read-aloud edition and those bibles have none, which no download can put right, because nobody ever recorded them.";
  "Worth keeping for all that, because it is the one reading that tells a download that arrived short from one that arrived whole, and several of these are genuinely short.";
  let bible_folders = await ebible_versions_english_downloadable_cache();
  let found = await list_map_async_record_try(
    bible_folders,
    ebible_version_downloaded_chapters_count,
  );
  return found;
}
