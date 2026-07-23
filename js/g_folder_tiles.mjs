import { g_game_prefix } from "./g_game_prefix.mjs";
import { text_combine } from "./text_combine.mjs";
export function g_folder_tiles() {
  let game_prefix = g_game_prefix();
  let tiles_path = text_combine(game_prefix, "tiles\\seamless\\");
  return tiles_path;
}
