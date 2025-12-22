import { log } from "../../../love/public/src/log.mjs";
import { folder_read_recursive_paths_to } from "../../../love/public/src/folder_read_recursive_paths_to.mjs";
import { folder_read_recursive_skipped_async } from "../../../love/public/src/folder_read_recursive_skipped_async.mjs";
export async function folder_read_recursive_skipped_paths_async(
  path_folder,
  folders_skipped,
) {
  log({
    folders_skipped,
  });
  let result = await folder_read_recursive_skipped_async(
    path_folder,
    folders_skipped,
  );
  let mapped = folder_read_recursive_paths_to(result, path_folder);
  return mapped;
}
