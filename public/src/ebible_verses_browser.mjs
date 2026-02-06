import { global_function_property_initialize_async } from "../../../love/public/src/global_function_property_initialize_async.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { firebase_storage_download_json_decompress } from "../../../love/public/src/firebase_storage_download_json_decompress.mjs";
import { ebible_firebase_upload_path } from "../../../love/public/src/ebible_firebase_upload_path.mjs";
export async function ebible_verses_browser(bible_folder, chapter_code) {
  let value = await global_function_property_initialize_async(
    fn,
    bible_folder,
    get,
  );
  (function lambda() {});
  let destination = ebible_firebase_upload_path(bible_folder, chapter_code);
  let c = await firebase_storage_download_json_decompress(destination);
  let verses = object_property_get(c, "verses");
  return verses;
}
