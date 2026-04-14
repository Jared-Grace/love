import { app_g_path_prefix } from "../../../love/public/src/app_g_path_prefix.mjs";
import { g_folder_img } from "../../../love/public/src/g_folder_img.mjs";
export function g_folder_tiles() {
  let path_prefix = app_g_path_prefix();
  const game_prefix1 = g_folder_img(path_prefix);
  const tiles_path = game_prefix1 + "tiles\\seamless\\";
  return tiles_path;
}
