import { json_to } from "../../../love/public/src/json_to.mjs";
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
    let json = json_to(object);
    let v = {
      path,
      data,
    };
    return v;
  }
  let files = await list_map_unordered_async(filtered, lambda2);
  return files;
}
