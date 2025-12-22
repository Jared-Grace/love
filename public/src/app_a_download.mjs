import { list_to_dictionary_async } from "../../../love/public/src/list_to_dictionary_async.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { app_a_download_paths } from "../../../love/public/src/app_a_download_paths.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_download() {
  marker("1");
  let filtered = await app_a_download_paths();
  async function lambda2(file_path) {
    let contents = await file_read(file_path);
    let v = {
      path: file_path,
      contents,
    };
    return v;
  }
  let dictionary = await list_to_dictionary_async(filtered, lambda2);
  return dictionary;
}
