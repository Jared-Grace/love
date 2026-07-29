import { list_find_starts_with } from "./list_find_starts_with.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
export async function folder_find_starts_with(path_folder, prefix) {
  let files = await folder_read_files(path_folder);
  let only = list_find_starts_with(files, prefix);
  return only;
}
