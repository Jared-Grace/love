import { json_to } from "../../../love/public/src/json_to.mjs";
import { list_to } from "../../../love/public/src/list_to.mjs";
import { global_function_property_initialize_async } from "../../../love/public/src/global_function_property_initialize_async.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { firebase_storage_download_json_decompress } from "../../../love/public/src/firebase_storage_download_json_decompress.mjs";
import { ebible_firebase_upload_path } from "../../../love/public/src/ebible_firebase_upload_path.mjs";
export async function ebible_verses_browser(bible_folder, chapter_code) {
  async function get() {
    let destination = ebible_firebase_upload_path(bible_folder, chapter_code);
    let c = await firebase_storage_download_json_decompress(destination);
    let verses = object_property_get(c, "verses");
    return verses;
  }
  let fn = ebible_verses_browser;
  let args1 = arguments;
  let args = list_to(args1);
  let json = json_to(args);
  let value = await global_function_property_initialize_async(fn, json, get);
  return value;
}
