import { firebase_storage_download } from "../../../love/public/src/firebase_storage_download.mjs";
import { firebase_upload_buffer } from "../../../love/public/src/firebase_upload_buffer.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
import { http_firebase_file_path } from "../../../love/public/src/http_firebase_file_path.mjs";
import { firebase_storage_exists } from "../../../love/public/src/firebase_storage_exists.mjs";
import { http } from "../../../love/public/src/http.mjs";
export async function http_firebase(url) {
  let key_get = function lambda() {
    let joined = http_firebase_file_path(url);
    return joined;
  };
  let cached_exists = firebase_storage_exists;
  let cached_get = firebase_storage_download;
  let value_get = http;
  async function cache_save(key, value) {
    await firebase_upload_buffer(value, key);
  }
  let result = await cache_generic(
    key_get,
    url,
    cached_exists,
    cached_get,
    value_get,
    cache_save,
  );
  return result;
}
