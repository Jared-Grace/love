import { folder_read_recursive_async } from "../../../love/public/src/folder_read_recursive_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_download() {
  marker("1");
  let result = await folder_read_recursive_async(path_folder);
}
