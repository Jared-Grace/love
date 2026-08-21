import { ebible_version_readaloud_download_path } from "./ebible_version_readaloud_download_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_map_async_filter_null_not_is } from "./list_map_async_filter_null_not_is.mjs";
export async function ebible_versions_readaloud_missing(bible_folders) {
  "Which of these bibles have not got their read-aloud edition unpacked onto this machine yet.";
  "Read aloud is how a chapter is cut into verses, so a bible without one on disk answers with no verses at all, and it does it in silence - the walk reads its pages, finds nothing to lay against them, and passes over every chapter. Asking first turns that into a list to finish rather than a bible that looks as though it disagreed about numbering everywhere.";
  "This is about what is here, not about what eBible publishes - a bible can have a read-aloud edition and still be missing locally, which is exactly the case a half-finished download leaves behind, and it is the case twenty-seven English bibles were in while every one of them was published and fetchable.";
  "Which bibles to ask about is handed in rather than decided here, because the two lists that need this answer are not the same list and neither is the whole of what is shipped. What is fetched for reading follows one of them and what the search index walks follows another, and the gap between them is precisely how those twenty-seven came to be missing with nothing anywhere saying so.";
  "Counting the folders on disk cannot answer this, because a count says how many arrived and never which ones.";
  async function missing_or_null(bible_folder) {
    let folder_path = ebible_version_readaloud_download_path(bible_folder);
    let present = await file_exists(folder_path);
    if (present) {
      return null;
    }
    return bible_folder;
  }
  let missing = await list_map_async_filter_null_not_is(
    bible_folders,
    missing_or_null,
  );
  return missing;
}
