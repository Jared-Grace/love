import { string_replace_space_underscore } from "../../../love/public/src/string_replace_space_underscore.mjs";
import { folder_files_names_transform } from "../../../love/public/src/folder_files_names_transform.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function folder_files_names_underscore(path) {
  marker("1");
  let list = await folder_files_names_transform(path, transform);
  return list;
  function transform(name_old) {
    let replaced = string_replace_space_underscore(name_old);
    return replaced;
  }
}
