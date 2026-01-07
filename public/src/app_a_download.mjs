import { list_property_exists_not_debug } from "../../../love/public/src/list_property_exists_not_debug.mjs";
import { json_compress_object } from "../../../love/public/src/json_compress_object.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { app_a_download_paths } from "../../../love/public/src/app_a_download_paths.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_download() {
  marker("1");
  let filtered = await app_a_download_paths();
  async function lambda2(path) {
    let contents = await file_read(path);
    let data = {
      versions: [contents],
    };
    let c = await json_compress_object(data);
    object_merge(c, {
      key: path,
    });
    return c;
  }
  let files = await list_map_unordered_async(filtered, lambda2);
  list_property_exists_not_debug(all, "key");
  return files;
}
