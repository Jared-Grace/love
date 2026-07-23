import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_verses_storage_browser(
  bible_folder,
  chapter_code,
) {
  ("one chapter straight off the internet, remembering nothing; the caller decides what to keep");
  let destination = ebible_firebase_upload_path(bible_folder, chapter_code);
  let project_url = firebase_storage_url_project_jg();
  let c = await firebase_storage_download_json_decompress(
    project_url,
    destination,
  );
  let verses = property_get(c, "verses");
  return verses;
}
