import { global_function_call_cache_async } from "../../../love/public/src/global_function_call_cache_async.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { firebase_storage_download_json_decompress } from "../../../love/public/src/firebase_storage_download_json_decompress.mjs";
import { ebible_firebase_upload_path } from "../../../love/public/src/ebible_firebase_upload_path.mjs";
export async function ebible_verses_browser(bible_folder, chapter_code) {
  async function get() {
    let destination = ebible_firebase_upload_path(bible_folder, chapter_code);
    let c = await firebase_storage_download_json_decompress(destination);
    let verses = property_get(c, "verses");
    return verses;
  }
  let value = await global_function_call_cache_async(
    ebible_verses_browser,
    arguments,
    get,
  );
  return value;
}
