import { folder_read_files } from "./folder_read_files.mjs";
import { list_find } from "./list_find.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function folder_find_starts_with(path_folder, prefix) {
  let files = await folder_read_files(path_folder);
  function lambda(item) {
    let sw = text_starts_with(item, prefix);
    return sw;
  }
  let only = list_find(files, lambda);
  return only;
}
