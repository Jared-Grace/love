import { firebase_upload_buffer } from "./firebase_upload_buffer.mjs";
import { cache_generic } from "./cache_generic.mjs";
import { http_firebase_file_path } from "./http_firebase_file_path.mjs";
import { firebase_storage_download_property } from "./firebase_storage_download_property.mjs";
import { firebase_storage_exists } from "./firebase_storage_exists.mjs";
import { http } from "./http.mjs";
export async function http_firebase(url) {
  let key_get = http_firebase_file_path;
  let cached_exists = firebase_storage_exists;
  const property_name = "buffer";
  let cached_get = async function lambda(key) {
    let result = await firebase_storage_download_property(key, property_name);
    return result;
  };
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
