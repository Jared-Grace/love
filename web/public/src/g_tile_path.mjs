import { g_folder_tiles } from "../../../love/public/src/g_folder_tiles.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function g_tile_path(tile_name) {
  const tiles_path = g_folder_tiles();
  const src = text_combine_multiple([tiles_path, tile_name, ".png"]);
  return src;
}
