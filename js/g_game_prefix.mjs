import { g_folder_img } from "./g_folder_img.mjs";
import { g_path_prefix } from "./g_path_prefix.mjs";
export function g_game_prefix() {
  let path_prefix = g_path_prefix();
  let game_prefix = g_folder_img(path_prefix);
  return game_prefix;
}
