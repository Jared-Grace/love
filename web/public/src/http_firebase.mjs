import { http_firebase_file_name } from "./http_firebase_file_name.mjs";
import { firebase_storage_download_property } from "./firebase_storage_download_property.mjs";
import { firebase_storage_exists } from "./firebase_storage_exists.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { http } from "./http.mjs";
export async function http_firebase(url) {
  const property_name = "text";
  let cached_get = async function lambda(key) {
    let result = await firebase_storage_download_property(key, property_name);
    return result;
  };
  let cached_exists = firebase_storage_exists;
  let key_get = http_firebase_file_name;
  async function cache_save(key, value) {
    await firebase_upload_object(
      {
        [property_name]: value,
      },
      key,
    );
  }
  let value_get = http;
  let key = key_get(url);
  let e = await cached_exists(key);
  let result = null;
  if (e) {
    result = await cached_get(key);
  } else {
    let value = await value_get(url);
    await cache_save(key, value);
    result = await cached_get(key);
  }
  return result;
}
