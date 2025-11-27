import { folder_files_names_transform } from "../../../love/public/src/folder_files_names_transform.mjs";
import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function folder_files_names_underscore(path) {
  marker("1");
  let list = await folder_files_names_transform(path, transform);
  return list;
  function transform(name_old) {
    let replaced = string_replace(name_old, " ", "_");
    return replaced;
  }
}
