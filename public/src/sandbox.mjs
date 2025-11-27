import { g_folder_tiles } from "../../../love/public/src/g_folder_tiles.mjs";
import { folder_files_names_underscore } from "../../../love/public/src/folder_files_names_underscore.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { path_join } from "./path_join.mjs";
export async function sandbox() {
  marker("1");
  const tiles_path = g_folder_tiles("");
  let joined = path_join(["public", tiles_path]);
  let list = await folder_files_names_underscore(joined);
}
