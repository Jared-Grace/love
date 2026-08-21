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
  let z_index = g_z("overlay");
  let overlay = html_overlay(container, z_index);
  html_on(overlay, "click", html_stop_propagation);
  return overlay;
}
