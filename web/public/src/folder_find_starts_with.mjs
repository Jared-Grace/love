import { log } from "./log.mjs";
import { folder_read_async } from "./folder_read_async.mjs";
import { list_find } from "./list_find.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function folder_find_starts_with(path_folder, prefix) {
  let files = await folder_read_async(path_folder);
  function lambda(item) {
    let sw = string_starts_with(item, prefix);
    return sw;
  }
  log({
    files,
    prefix,
  });
  let only = list_find(files, lambda);
  return only;
}
