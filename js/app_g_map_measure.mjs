import { app_g_div_map_container_get } from "./app_g_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function app_g_map_measure(div_map) {
  "everything a reading of which tiles are on screen is worked out from, as plain numbers already gathered into the groups the arithmetic receives: how wide one tile is, the box the map is seen through, where the grid sits inside it, how big the whole grid is, and how far it has been scrolled.";
  "numbers and not elements, so that no reader of this has to touch the page at all. that is what keeps the two of them from opening with the same run of unpacking - each takes the groups it needs and leaves the rest, and they no longer read alike.";
  "it is ONE tile that is measured and not a character, and the difference is the whole reason this is its own name. Both readings used to take the first img in the container, whichever it happened to be - and the first img in a map is a person as often as it is a tile. It measured 56 either way on the day it was looked at, so nothing was ever wrong and nothing ever went red; a character drawn at any other size would have silently widened or narrowed the window a tap is judged by, and the only thing anybody would see is taps doing nothing.";
  "asking for the coordinates a tile carries is what makes it a tile: they are written on every tile as it is drawn and on nothing else.";
  "the bar is measured here rather than by each caller because a bar across the page covers the bottom edge of the map, and a tile underneath it is not on screen whoever is asking. it goes in beside the height it takes away from, as a number of pixels rather than an element, because none of them wants the bar itself.";
  "the scrolled position and the size of the whole grid are both gathered even though no one reader wants both. one reads where the map is actually sitting, the other predicts where it is about to sit, and reading a number nobody asked for costs nothing next to two of these existing at all.";
  "BESPOKE (querySelector / getBoundingClientRect), do NOT auto-canonicalize";
  let component = app_g_div_map_container_get(div_map);
  let container = html_component_element_get(component);
  let img = container.querySelector("img[data-coordinates]");
  let tile = img.getBoundingClientRect().width;
  let bar = document.getElementById("day-discern-bar");
  let bar_height = bar ? bar.getBoundingClientRect().height : 0;
  let grid = img.offsetParent;
  let measured = {
    tile,
    viewport: {
      width: container.clientWidth,
      height: container.clientHeight,
      bar: bar_height,
    },
    inset: {
      left: grid.offsetLeft,
      top: grid.offsetTop,
    },
    content: {
      width: container.scrollWidth,
      height: container.scrollHeight,
    },
    scroll: {
      left: container.scrollLeft,
      top: container.scrollTop,
    },
  };
  return measured;
}
