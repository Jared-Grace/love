import { global_function_property_initialize_async } from "../../../love/public/src/global_function_property_initialize_async.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { g_sermon_generate_upload_path } from "../../../love/public/src/g_sermon_generate_upload_path.mjs";
export async function g_sermon_generate_download(chapter_code) {
  async function get() {
    let destination = g_sermon_generate_upload_path(chapter_code);
    let o = await firebase_storage_download_json(destination);
    return o;
  }
  let value = await global_function_property_initialize_async(
    g_sermon_generate_download,
    chapter_code,
    get,
  );
  return value;
}
