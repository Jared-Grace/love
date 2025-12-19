import { folder_read_recursive_paths_async } from "../../../love/public/src/folder_read_recursive_paths_async.mjs";
import { folder_public } from "../../../love/public/src/folder_public.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_download() {
  marker("1");
  let path_folder = folder_public();
  let combineds = await folder_read_recursive_paths_async(path_folder);
  return combineds;
}
