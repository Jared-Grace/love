import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_verses_storage_browser_fresh(
  bible_folder,
  chapter_code,
) {
  "one chapter straight off the internet, remembering nothing; the caller decides what to keep";
  "this exists so a whole-bible download does not leave a second copy of every chapter behind it: it is already writing each one where the reader will look for it, and a read-through copy of the same thing would double what the download costs in room";
  let destination = ebible_firebase_upload_path(bible_folder, chapter_code);
  let project_url = firebase_storage_url_project_jg();
  let c = await firebase_storage_download_json_decompress(
    project_url,
    destination,
  );
  let verses = property_get(c, "verses");
  return verses;
}
