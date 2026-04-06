import { g_folder_img } from "../../../love/public/src/g_folder_img.mjs";
import { app_g_path_prefix } from "../../../love/public/src/app_g_path_prefix.mjs";
export function g_game_prefix() {
  let path_prefix2 = app_g_path_prefix();
  const game_prefix = g_folder_img(path_prefix2);
  return game_prefix;
}
