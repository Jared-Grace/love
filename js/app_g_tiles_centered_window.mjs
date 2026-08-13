import { app_g_map_measure } from "./app_g_map_measure.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_day_guide_window } from "./app_g_day_guide_window.mjs";
export function app_g_tiles_centered_window(player, div_map) {
  "which tiles are fully visible on the map right now, as the window [min_x..max_x, min_y..max_y] - the READING half, and only the reading: it asks for the measurements off the page and hands them straight to the pure arithmetic next door.";
  "it says 'right now' loosely - what it really answers is which tiles will be fully visible once the map has finished centring on the player, which is the same thing whenever the player is already centred, and is the useful answer while a centring scroll is still in flight.";
  "where the grid sits is taken rather than where the map is scrolled to, because the scrolled position has the in-flight animation baked into it and this is asked while that animation is still running. the twin next door takes the other one, which is why the two of them want different groups out of the same measuring.";
  let measured = app_g_map_measure(div_map);
  let tile = property_get(measured, "tile");
  let viewport = property_get(measured, "viewport");
  let inset = property_get(measured, "inset");
  let content = property_get(measured, "content");
  let window_tiles = app_g_day_guide_window(
    player,
    tile,
    viewport,
    inset,
    content,
  );
  return window_tiles;
}
