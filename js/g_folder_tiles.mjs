import { fn_name } from "./fn_name.mjs";
import { g_game_prefix } from "./g_game_prefix.mjs";
import { text_combine } from "./text_combine.mjs";
export function g_folder_tiles() {
  let game_prefix = g_game_prefix();
  ("forward slashes, because this is a URL and not a file path. an img src survived backslashes only because URL parsing rewrites them, while CSS reads a backslash as an ESCAPE — so the same path inside url() lost a character each time and 404'd, which is how ",
    fn_name("app_g_map_room_new"),
    " found this");
  let tiles_path = text_combine(game_prefix, "tiles/seamless/");
  return tiles_path;
}
