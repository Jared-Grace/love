import { divide_ceil } from "./divide_ceil.mjs";
import { fn_name } from "./fn_name.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { floor } from "./floor.mjs";
import { app_g_day_guide_pick } from "./app_g_day_guide_pick.mjs";
import { app_g_div_map_container_get } from "./app_g_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function app_g_day_guide_tile(g, player, target, div_map) {
  ("the GOLD guide tile toward the discerned person — the THIN DOM wrapper: read the live viewport (scroll offset + client size + tile px), turn it into the FULLY-visible tile WINDOW. once the PERSON is ON-screen (their tile is in the window = 'in range') the gold sits on their OWN tile — the player taps it to walk over + initiate (no separate step); while they're still OFF-screen, delegate the path/geometry to ",
    fn_name("app_g_day_guide_pick"),
    " (pure, testable) to lead hop-by-hop. the window is fully-in-view (ceil / floor-1) AND stops above the bottom bar (barH), so the tile is never clipped by an edge or hidden under the bar. BESPOKE (querySelector / getBoundingClientRect / Math), do NOT auto-canonicalize");
  let component = app_g_div_map_container_get(div_map);
  let container = html_component_element_get(component);
  let img = container.querySelector("img");
  let tile = img.getBoundingClientRect().width;
  let bar = document.getElementById("day-discern-bar");
  let barH = bar ? bar.getBoundingClientRect().height : 0;
  let minX = divide_ceil(container.scrollLeft, tile);
  let p2 = divide(container.scrollLeft + container.clientWidth, tile);
  let left = floor(p2);
  let maxX = subtract(left, 1);
  let minY = divide_ceil(container.scrollTop, tile);
  let top = subtract(container.scrollTop + container.clientHeight, barH);
  let p4 = divide(top, tile);
  let left2 = floor(p4);
  let maxY = subtract(left2, 1);
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
