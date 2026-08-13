import { app_g_map_measure } from "./app_g_map_measure.mjs";
import { property_get } from "./property_get.mjs";
import { g_tiles_window_axis } from "./g_tiles_window_axis.mjs";
export function app_g_tiles_onscreen_window(div_map) {
  "which tiles are fully on the screen RIGHT NOW, as the window [min_x..max_x, min_y..max_y] - read off where the map is actually scrolled to, not off where it is expected to end up.";
  "the twin next door predicts the offset instead, because it is asked the instant the player lands, while the centring scroll is still animating. this one is asked at a tap, when everything has come to a stop, and the honest number is then the one the map is sitting at - which is also the only one that is right after the player has scrolled the map with their own hand, where the predicted window would name tiles nobody can see and refuse tiles in plain view.";
  "a bar across the page covers the bottom edge of the map, and a tile underneath it is not on screen whoever is asking. it covers nothing on the horizontal, which is the whole of why the last argument to the two calls is not the same word.";
  let measured = app_g_map_measure(div_map);
  let scroll = property_get(measured, "scroll");
  let viewport = property_get(measured, "viewport");
  let inset = property_get(measured, "inset");
  let tile = property_get(measured, "tile");
  let across = g_tiles_window_axis(
    scroll.left,
    tile,
    viewport.width,
    inset.left,
    0,
  );
  let down = g_tiles_window_axis(
    scroll.top,
    tile,
    viewport.height,
    inset.top,
    viewport.bar,
  );
  let window_tiles = {
    min_x: across.first,
    max_x: across.last,
    min_y: down.first,
    max_y: down.last,
  };
  return window_tiles;
}
