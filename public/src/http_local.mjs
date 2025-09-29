import { file_write_buffer } from "../../../love/public/src/file_write_buffer.mjs";
import { file_read_buffer } from "../../../love/public/src/file_read_buffer.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { http_local_file_name } from "../../../love/public/src/http_local_file_name.mjs";
import { http_firebase } from "../../../love/public/src/http_firebase.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
export async function http_local(url) {
  marker("1");
  let key_get = http_local_file_name;
  let cached_exists = file_exists;
  let cached_get = file_read_buffer;
  let value_get = http_firebase;
  let cache_save = file_write_buffer;
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
