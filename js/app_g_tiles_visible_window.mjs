import { app_g_day_guide_window } from "./app_g_day_guide_window.mjs";
import { app_g_div_map_container_get } from "./app_g_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function app_g_tiles_visible_window(player, div_map) {
  "which tiles are fully visible on the map right now, as the window [min_x..max_x, min_y..max_y] - the READING half, and only the reading: it takes the four measurements off the page and hands them to the pure arithmetic next door.";
  "it says 'right now' loosely - what it really answers is which tiles will be fully visible once the map has finished centring on the player, which is the same thing whenever the player is already centred, and is the useful answer while a centring scroll is still in flight.";
  "offsetLeft/offsetTop are read rather than a bounding rect because a rect has the in-flight scroll baked into it, and this is asked while the centring scroll is still animating.";
  "the bar is read here rather than left to the caller because a bar on the page covers the bottom edge of the map, and a tile underneath it is not visible whoever is asking.";
  "BESPOKE (querySelector / getBoundingClientRect), do NOT auto-canonicalize";
  let component = app_g_div_map_container_get(div_map);
  let container = html_component_element_get(component);
  let img = container.querySelector("img");
  let tile = img.getBoundingClientRect().width;
  let bar = document.getElementById("day-discern-bar");
  let barH = bar ? bar.getBoundingClientRect().height : 0;
  let grid = img.offsetParent;
  let viewport = {
    width: container.clientWidth,
    height: container.clientHeight,
    bar: barH,
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
