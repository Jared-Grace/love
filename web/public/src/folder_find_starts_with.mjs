import {list_find} from "./list_find.mjs";
import {string_starts_with} from "./string_starts_with.mjs";
import {folder_read} from "./folder_read.mjs";
export function folder_find_starts_with(path_folder, prefix) {
  let files = folder_read(path_folder);
  function lambda(item) {
    let sw = string_starts_with(item, prefix);
    return sw;
  }
  let only = list_find(files, lambda);
  return only;
}
