import { list_filter_includes } from "../../../love/public/src/list_filter_includes.mjs";
import { folder_files_names_lower } from "../../../love/public/src/folder_files_names_lower.mjs";
import { folder_files_names_underscore } from "../../../love/public/src/folder_files_names_underscore.mjs";
import { g_folder_tiles } from "../../../love/public/src/g_folder_tiles.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { path_join } from "./path_join.mjs";
export async function sandbox() {
  marker("1");
  const tiles_path = g_folder_tiles("");
  let joined = path_join(["public", tiles_path]);
  marker("1");
  let list = await folder_files_names_underscore(joined);
  let list2 = await folder_files_names_lower(joined);
  let m = list_filter_includes(list2, "grass");
}
