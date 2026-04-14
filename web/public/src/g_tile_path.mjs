import { g_folder_tiles } from "../../../love/public/src/g_folder_tiles.mjs";
export function g_tile_path(tile_name) {
  const tiles_path = g_folder_tiles();
  const src = tiles_path + tile_name + ".png";
  return src;
}
