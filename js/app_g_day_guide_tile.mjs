import { fn_name } from "./fn_name.mjs";
import { app_g_tiles_centered_window } from "./app_g_tiles_centered_window.mjs";
import { g_coordinates_window_inside_is } from "./g_coordinates_window_inside_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_day_guide_pick } from "./app_g_day_guide_pick.mjs";
export function app_g_day_guide_tile(g, player, target, div_map) {
  ("the GOLD guide tile toward the discerned person. ",
    fn_name("app_g_tiles_centered_window"),
    " gives the tile WINDOW that will be FULLY visible once the map has centred on the player; then, once the PERSON is ON-screen (their tile is in that window = 'in range') the gold sits on their OWN tile — the player taps it to walk over + initiate (no separate step) — while they're still OFF-screen, ",
    fn_name("app_g_day_guide_pick"),
    " takes the visible tile CLOSEST to them. the reading of the page and the arithmetic over it both live elsewhere, so what is left here is only the choice between those two answers");
  let window_tiles = app_g_tiles_centered_window(player, div_map);
  let target_in_window = g_coordinates_window_inside_is(target, window_tiles);
  if (target_in_window) {
    let r = {
      x: target.x,
      y: target.y,
    };
    return r;
  }
  let minX = property_get(window_tiles, "min_x");
  let maxX = property_get(window_tiles, "max_x");
  let minY = property_get(window_tiles, "min_y");
  let maxY = property_get(window_tiles, "max_y");
  let gold = app_g_day_guide_pick(g, player, target, minX, maxX, minY, maxY);
  return gold;
}
