import { firebase_storage_verses_download_cache } from "./firebase_storage_verses_download_cache.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
export async function ebible_verses_storage_browser(
  bible_folder,
  chapter_code,
) {
  "one chapter for a reader to look at, kept on this disk once it has been read once, so turning back to it costs nothing";
  "the sibling ending in fresh is the same read without the keeping, and is for whoever is already storing what comes back";
  let destination = ebible_firebase_upload_path(bible_folder, chapter_code);
  let verses = await firebase_storage_verses_download_cache(destination);
  return verses;
}
