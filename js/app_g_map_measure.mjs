import { app_g_div_map_container_get } from "./app_g_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function app_g_map_measure(div_map) {
  "the four things every reading of which tiles are on screen starts from: the box the map scrolls inside, how wide one tile is, the grid the tiles are laid out on, and how much of the bottom edge a bar is covering.";
  "it is ONE tile that is measured and not a character, and the difference is the whole reason this is its own name. Both readings used to take the first img in the container, whichever it happened to be - and the first img in a map is a person as often as it is a tile. It measured 56 either way on the day it was looked at, so nothing was ever wrong and nothing ever went red; a character drawn at any other size would have silently widened or narrowed the window a tap is judged by, and the only thing anybody would see is taps doing nothing.";
  "asking for the coordinates a tile carries is what makes it a tile: they are written on every tile as it is drawn and on nothing else.";
  "the bar is read here rather than by each caller because a bar across the page covers the bottom edge of the map, and a tile underneath it is not on screen whoever is asking. it is handed back as a height rather than an element, because none of them wants the bar - they want the number of pixels of map it has taken away.";
  "BESPOKE (querySelector / getBoundingClientRect), do NOT auto-canonicalize";
  let component = app_g_div_map_container_get(div_map);
  let container = html_component_element_get(component);
  let img = container.querySelector("img[data-coordinates]");
  let tile = img.getBoundingClientRect().width;
  let bar = document.getElementById("day-discern-bar");
  let bar_height = bar ? bar.getBoundingClientRect().height : 0;
  let grid = img.offsetParent;
  let measured = {
    container,
    tile,
    grid,
    bar_height,
  };
  return measured;
}
