import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { folder_files_names_transform } from "../../../love/public/src/folder_files_names_transform.mjs";
import { g_folder_tiles } from "../../../love/public/src/g_folder_tiles.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { path_join } from "./path_join.mjs";
export async function sandbox() {
  marker("1");
  const tiles_path = g_folder_tiles("");
  let joined = path_join(["public", tiles_path]);
  marker("1");
  let list2 = await folder_files_names_transform(joined, transform);
  return list2;
  function transform(name_old) {
    let replaced = string_lower_to(name_old);
    return replaced;
  }
}
