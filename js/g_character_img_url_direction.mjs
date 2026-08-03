import { fn_name } from "./fn_name.mjs";
import { g_game_prefix } from "./g_game_prefix.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_character_img_url_direction(c, direction) {
  "One character's PNG for one facing, as a URL.";
  ("The separators are forward slashes because this is a URL. They were backslashes, which an img src never noticed - URL parsing rewrites a backslash to a slash - but which a CSS url() reads as an escape, quietly eating the character after it. The same trap is written up in ",
    fn_name("g_path_prefix"),
    ", where it was found the first time.");
  let game_prefix = g_game_prefix();
  let img = property_get(c, "img");
  let c_src = text_combine_multiple([
    game_prefix,
    "characters/",
    img,
    "/rotations/",
    direction,
    ".png",
  ]);
  return c_src;
}
