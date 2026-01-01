import { json_compress } from "../../../love/public/src/json_compress.mjs";
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
    let compressed = await json_compress(data);
    let v = {
      key: path,
      compressed,
    };
    return v;
  }
  let files = await list_map_unordered_async(filtered, lambda2);
  return files;
}
