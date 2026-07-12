import { list_property_exists_not_error } from "./list_property_exists_not_error.mjs";
import { json_compress_object } from "./json_compress_object.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { file_read } from "./file_read.mjs";
import { app_a_download_paths } from "./app_a_download_paths.mjs";
export async function app_a_download() {
  let filtered = await app_a_download_paths();
  async function lambda(path) {
    let contents = await file_read(path);
    let data = {
      versions: [contents],
    };
    let c = await json_compress_object(data);
    object_merge_set(c, {
      key: path,
    });
    return c;
  }
  let files = await list_map_unordered_async(filtered, lambda);
  list_property_exists_not_error(files, "key");
  return files;
}
