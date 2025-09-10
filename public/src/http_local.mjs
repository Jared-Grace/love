import { cache_generic } from "./cache_generic.mjs";
import { http_firebase_file_name } from "./http_firebase_file_name.mjs";
import { firebase_storage_download_property } from "./firebase_storage_download_property.mjs";
import { firebase_storage_exists } from "./firebase_storage_exists.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { http } from "./http.mjs";
export async function http_local(url) {
  let key_get = http_firebase_file_name;
  let cached_exists = firebase_storage_exists;
  const property_name = "text";
  let cached_get = async function lambda(key) {
    let result = await firebase_storage_download_property(key, property_name);
    return result;
  };
  let value_get = http;
  async function cache_save(key, value) {
    await firebase_upload_object(
      {
        [property_name]: value,
      },
      key,
    );
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
