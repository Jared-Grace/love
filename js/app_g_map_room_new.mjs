import { fn_name } from "./fn_name.mjs";
import { html_div } from "./html_div.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { g_water } from "./g_water.mjs";
import { g_tile_path } from "./g_tile_path.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_map_room_new(parent) {
  "the open water around the map, drawn as a REPEATING BACKGROUND rather than as tiles. holds half a window of room on every side, which is what lets the player sit in the middle of the screen even standing on the outermost tile of the world.";
  ("the same room used to be real water tiles - a ring padded into the grid by ",
    fn_name("app_g_map_buffer_pad"),
    " - and that cost grew as the square of how far it reached, so it was always sized to ALMOST enough: a wide desktop needed about 15 tiles of ring and had 8, and the player drifted off centre near the edge. one repeating image costs the same whatever it covers, so the room is now half a viewport each way and the centring is exact at every screen size.");
  ("the padding is 50vh/50vw and the background is offset by the same, so a water square begins exactly where the grid begins and the drawn water lines up with the water tiles inside the map.");
  let room = html_div(parent);
  let tile = g_img_square_size_css();
  let name = g_water();
  let src = g_tile_path(name);
  html_style_assign(room, {
    padding: "50vh 50vw",
    width: "max-content",
    "background-image": text_combine_multiple(["url(", src, ")"]),
    "background-repeat": "repeat",
    "background-size": text_combine_multiple([tile, " ", tile]),
    "background-position": "50vw 50vh",
  });
  return room;
}
