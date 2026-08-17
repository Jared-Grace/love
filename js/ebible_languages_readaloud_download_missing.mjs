import { ebible_languages_without_original_bible_folders } from "./ebible_languages_without_original_bible_folders.mjs";
import { ebible_version_readaloud_download_path } from "./ebible_version_readaloud_download_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export async function ebible_languages_readaloud_download_missing() {
  "Every translation this app ships whose read-aloud edition has not been unpacked onto this machine yet.";
  "Read aloud is how a chapter is cut into verses, so a translation without one on disk stops the chapter build the moment it is reached. Asking first turns that into a list to finish rather than a run that dies part way through.";
  "This is about what is here, not about what eBible publishes - a translation can have a read-aloud edition and still be missing locally, which is exactly the case a half-finished download leaves behind.";
  "Counting the folders on disk cannot answer this, because a count says how many arrived and never which ones.";
  let bible_folders = await ebible_languages_without_original_bible_folders();
  async function missing_or_null(bible_folder) {
    let folder_path = ebible_version_readaloud_download_path(bible_folder);
    let present = await file_exists(folder_path);
    if (present) {
      return null;
    }
    return bible_folder;
  }
  let asked = await list_map_async(bible_folders, missing_or_null);
  let missing = list_filter_null_not_is(asked);
  return missing;
}
