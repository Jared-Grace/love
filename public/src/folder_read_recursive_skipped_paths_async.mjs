import { marker } from "../../../love/public/src/marker.mjs";
import { folder_read_recursive_skipped_async } from "../../../love/public/src/folder_read_recursive_skipped_async.mjs";
export async function folder_read_recursive_skipped_paths_async(path_folder) {
  marker("1");
  let folders_skipped = [];
  let result = await folder_read_recursive_skipped_async(
    path_folder,
    folders_skipped,
  );
  return result;
}
