import { app_g_map_measure } from "./app_g_map_measure.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_day_guide_window } from "./app_g_day_guide_window.mjs";
export function app_g_tiles_centered_window(player, div_map) {
  "which tiles are fully visible on the map right now, as the window [min_x..max_x, min_y..max_y] - the READING half, and only the reading: it asks for the four measurements off the page and hands them to the pure arithmetic next door.";
  "the measuring itself lives one name over, shared with the twin that reads the scrolled position, because taking the first img in the container measures a character as often as it measures a tile and neither reader should be able to get that wrong on its own.";
  "it says 'right now' loosely - what it really answers is which tiles will be fully visible once the map has finished centring on the player, which is the same thing whenever the player is already centred, and is the useful answer while a centring scroll is still in flight.";
  "offsetLeft/offsetTop are read rather than a bounding rect because a rect has the in-flight scroll baked into it, and this is asked while the centring scroll is still animating.";
  "the bar is read here rather than left to the caller because a bar on the page covers the bottom edge of the map, and a tile underneath it is not visible whoever is asking.";
  "BESPOKE (reads offset and client sizes off the element), do NOT auto-canonicalize";
  let measured = app_g_map_measure(div_map);
  let container = property_get(measured, "container");
  let tile = property_get(measured, "tile");
  let grid = property_get(measured, "grid");
  let bar_height = property_get(measured, "bar_height");
  let viewport = {
    width: container.clientWidth,
    height: container.clientHeight,
    bar: bar_height,
  };
  let inset = {
    left: grid.offsetLeft,
    top: grid.offsetTop,
  };
  let content = {
    width: container.scrollWidth,
    height: container.scrollHeight,
  };
  let window_tiles = app_g_day_guide_window(
    player,
    tile,
    viewport,
    inset,
    content,
  );
  return window_tiles;
}
