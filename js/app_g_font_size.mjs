import { app_shared_font_size_generic } from "./app_shared_font_size_generic.mjs";
export function app_g_font_size(context) {
  "the size the game's words are set at, which the player may change like any other app's reader can";
  "it starts at 16 rather than the 20 the reading apps start at, because the game's chrome renders through the shared 1.2em control token: 1.2 x 16 lands at about 19px, level with a reading app's 20px, where a 20 root would put it at 24px and run larger than every other app";
  "the map is not sized from this. tiles are measured in px, vw and vh, so growing the words moves no tile and the player's own view stays exactly where it was";
  let value = app_shared_font_size_generic(context, 16);
  return value;
}
