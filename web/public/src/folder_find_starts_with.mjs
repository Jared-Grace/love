import { folder_read_async } from "../../../love/public/src/folder_read_async.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
export async function folder_find_starts_with(path_folder, prefix) {
  let files = await folder_read_async(path_folder);
  function lambda(item) {
    let sw = text_starts_with(item, prefix);
    return sw;
  }
  let only = list_find(files, lambda);
  return only;
}
