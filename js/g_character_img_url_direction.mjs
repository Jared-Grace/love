import { g_img_game_url } from "./g_img_game_url.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_character_img_url_direction(c, direction) {
  "$plain direction";
  "One character's PNG for one facing, as a URL.";
  "The separators are forward slashes because this is a URL. They were backslashes, which an img src never noticed - URL parsing rewrites a backslash to a slash - but which a CSS url() reads as an escape, quietly eating the character after it.";
  let img = property_get(c, "img");
  let path = text_combine_multiple([
    "characters/",
    img,
    "/rotations/",
    direction,
    ".png",
  ]);
  let c_src = g_img_game_url(path);
  return c_src;
}
