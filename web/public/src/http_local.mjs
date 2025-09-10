import { file_read_buffer } from "./file_read_buffer.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { http_local_file_name } from "./http_local_file_name.mjs";
import { http_firebase } from "./http_firebase.mjs";
import { marker } from "./marker.mjs";
import { cache_generic } from "./cache_generic.mjs";
export async function http_local(url) {
  marker("1");
  let key_get = http_local_file_name;
  let cached_exists = file_exists;
  let cached_get = file_read_buffer;
  let value_get = http_firebase;
  async function cache_save(key, value) {
    await file_write_json(key, value);
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
