import { file_read } from "../../../love/public/src/file_read.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { app_a_download_paths } from "../../../love/public/src/app_a_download_paths.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_download() {
  marker("1");
  let filtered = await app_a_download_paths();
  let waited = await list_map_unordered_async(filtered, file_read);
  return waited;
}
