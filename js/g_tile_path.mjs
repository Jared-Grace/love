import { g_img_game_url } from "./g_img_game_url.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_tile_path(tile_name) {
  "$plain tile_name";
  "Where a browser fetches the picture for one floor tile.";
  "The separators are forward slashes because this is a URL and not a path on any disk. An img src survived backslashes only because URL parsing rewrites them, while CSS reads a backslash as an ESCAPE - so the same path inside url() lost a character each time and 404'd.";
  let folder_name = "tiles/seamless/";
  let path = text_combine_multiple([folder_name, tile_name, ".png"]);
  let url = g_img_game_url(path);
  return url;
}
