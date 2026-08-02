import { divide_floor } from "./divide_floor.mjs";
import { divide_ceil } from "./divide_ceil.mjs";
import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { app_g_day_guide_pick } from "./app_g_day_guide_pick.mjs";
import { app_g_div_map_container_get } from "./app_g_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function app_g_day_guide_tile(g, player, target, div_map) {
  ("the GOLD guide tile toward the discerned person — the THIN DOM wrapper: read the live viewport (scroll offset + client size + tile px), turn it into the FULLY-visible tile WINDOW. once the PERSON is ON-screen (their tile is in the window = 'in range') the gold sits on their OWN tile — the player taps it to walk over + initiate (no separate step); while they're still OFF-screen, delegate the path/geometry to ",
    fn_name("app_g_day_guide_pick"),
    " (pure, testable) to lead hop-by-hop. the window is fully-in-view (ceil / floor-1) AND stops above the bottom bar (barH), so the tile is never clipped by an edge or hidden under the bar. measured from where tile (0,0) actually SITS — the grid of tiles is inset inside the scrolled content by a wide margin (441 px at one measurement, the room that lets the map centre on a player standing at the map's edge), so scrollLeft is NOT the first visible tile's x. reading the grid's own left/top against the container's turns pixels into tile numbers with that inset already in them, and needs no scroll offset at all because a bounding rect has the scroll in it. taking scrollLeft for the inset is what made this window land eight tiles right and nine tiles down of the truth, putting the PLAYER outside it, so no tile of the path was ever in view and the gold never appeared. BESPOKE (querySelector / getBoundingClientRect / Math), do NOT auto-canonicalize");
  let component = app_g_div_map_container_get(div_map);
  let container = html_component_element_get(component);
  let img = container.querySelector("img");
  let tile = img.getBoundingClientRect().width;
  let bar = document.getElementById("day-discern-bar");
  let barH = bar ? bar.getBoundingClientRect().height : 0;
  let grid = img.offsetParent;
  let grid_box = grid.getBoundingClientRect();
  let container_box = container.getBoundingClientRect();
  let origin_x = grid_box.left - container_box.left;
  let origin_y = grid_box.top - container_box.top;
  let minX = divide_ceil(-origin_x, tile);
  let left = divide_floor(container.clientWidth - origin_x, tile);
  let maxX = subtract(left, 1);
  let minY = divide_ceil(-origin_y, tile);
  let top = subtract(container.clientHeight - origin_y, barH);
  let left2 = divide_floor(top, tile);
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
