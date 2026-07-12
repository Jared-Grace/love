import { app_g_path_prefix } from "./app_g_path_prefix.mjs";
import { g_folder_img } from "./g_folder_img.mjs";
import { text_combine } from "./text_combine.mjs";
export function g_folder_tiles() {
  let path_prefix = app_g_path_prefix();
  let game_prefix = g_folder_img(path_prefix);
  let tiles_path = text_combine(game_prefix, "tiles\\seamless\\");
  return tiles_path;
}
