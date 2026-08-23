import { app_shared_game_side_room } from "./app_shared_game_side_room.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_overlay } from "./html_overlay.mjs";
import { html_on } from "./html_on.mjs";
import { html_stop_propagation } from "./html_stop_propagation.mjs";
import { g_z } from "./g_z.mjs";
export function app_shared_game_overlay_container(container) {
  arguments_assert(arguments, 1);
  ("the overlay every g-family screen is drawn on, asked for by the plain box it covers rather than by a map. a map has one, so ",
    fn_name("app_g_overlay"),
    " hands this its map's box and nothing changes there; a page with no map at all has a box too, which is what lets a sibling game put up the same panel without first having to own a world for it to sit over");
  ("it holds its contents off the left and right edges of the screen. what it inherits is a");
  ("gap measured as a share of the SCREEN's width, which reads as a margin on a desktop and");
  ("as almost nothing on a phone - about four pixels - so a menu's buttons ran hard into");
  ("both sides of the device they are actually played on. the room here is measured in text");
  ("instead, so it is the same size next to the words it is holding back whatever the");
  ("screen is.");
  let z_index = g_z("overlay");
  let overlay = html_overlay(container, z_index);
  let room = app_shared_game_side_room();
  html_style_padding_x(overlay, room);
  html_on(overlay, "click", html_stop_propagation);
  return overlay;
}
