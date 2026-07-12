import { g_folder_tiles } from "./g_folder_tiles.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_tile_path(tile_name) {
  let tiles_path = g_folder_tiles();
  let src = text_combine_multiple([tiles_path, tile_name, ".png"]);
  return src;
}
