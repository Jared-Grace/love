import { g_folder_tiles } from "../../../love/public/src/g_folder_tiles.mjs";
export function g_tile_path(r) {
  const tiles_path = g_folder_tiles();
  const src = tiles_path + r + ".png";
  return src;
}
