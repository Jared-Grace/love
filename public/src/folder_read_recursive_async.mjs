import { folder_read_recursive_skipped_async } from "../../../love/public/src/folder_read_recursive_skipped_async.mjs";
export async function folder_read_recursive_async(path_folder) {
  let folders_skipped = [];
  let result = await folder_read_recursive_skipped_async(
    path_folder,
    folders_skipped,
  );
  return result;
}
