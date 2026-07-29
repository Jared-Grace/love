import { firebase_storage_download_json_decompress_cache } from "./firebase_storage_download_json_decompress_cache.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_verses_storage_browser(
  bible_folder,
  chapter_code,
) {
  "one chapter for a reader to look at, kept on this disk once it has been read once, so turning back to it costs nothing";
  "the sibling ending in fresh is the same read without the keeping, and is for whoever is already storing what comes back";
  let destination = ebible_firebase_upload_path(bible_folder, chapter_code);
  let project_url = firebase_storage_url_project_jg();
  let c = await firebase_storage_download_json_decompress_cache(
    project_url,
    destination,
  );
  let verses = property_get(c, "verses");
  return verses;
}
