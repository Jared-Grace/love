import { fn_name } from "./fn_name.mjs";
import { app_g_day_guide_window } from "./app_g_day_guide_window.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_g_day_guide_pick } from "./app_g_day_guide_pick.mjs";
import { app_g_div_map_container_get } from "./app_g_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function app_g_day_guide_tile(g, player, target, div_map) {
  ("the GOLD guide tile toward the discerned person — the THIN DOM wrapper, and now ONLY the DOM: it reads the four measurements off the page and hands them to two pure functions. ",
    fn_name("app_g_day_guide_window"),
    " turns them into the tile WINDOW that will be FULLY visible once the map has centred on the player; then, once the PERSON is ON-screen (their tile is in that window = 'in range') the gold sits on their OWN tile — the player taps it to walk over + initiate (no separate step) — while they're still OFF-screen, ",
    fn_name("app_g_day_guide_pick"),
    " takes the visible tile CLOSEST to them. both halves are pure and both are checked, so what is left here is only the reading. offsetLeft/offsetTop are read rather than a bounding rect because a rect has the in-flight scroll baked into it, and the guide is drawn while the centring scroll is still animating. BESPOKE (querySelector / getBoundingClientRect), do NOT auto-canonicalize");
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
  let minX = window_tiles.min_x;
  let maxX = window_tiles.max_x;
  let minY = window_tiles.min_y;
  let maxY = window_tiles.max_y;
  let targetInWindow =
    greater_than_equal(target.x, minX) &&
    less_than_equal(target.x, maxX) &&
    greater_than_equal(target.y, minY) &&
    less_than_equal(target.y, maxY);
  if (targetInWindow) {
    let r = {
      x: target.x,
      y: target.y,
    };
    return r;
  }
  let gold = app_g_day_guide_pick(g, player, target, minX, maxX, minY, maxY);
  return gold;
}
