import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_download_json_decompress } from "./firebase_storage_download_json_decompress.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_verses_storage_get(bible_folder, chapter_code) {
  ("one chapter's verses read back from what is already published to storage — the same bytes the app serves — so nothing local or audio-aligned is needed to reassemble a whole bible");
  let destination = ebible_firebase_upload_path(bible_folder, chapter_code);
  let project_url = firebase_storage_url_project_jg();
  let c = await firebase_storage_download_json_decompress(
    project_url,
    destination,
  );
  let verses = property_get(c, "verses");
  return verses;
}
