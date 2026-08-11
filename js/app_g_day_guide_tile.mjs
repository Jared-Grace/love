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
  ("the GOLD guide tile toward the discerned person — the THIN DOM wrapper: read the viewport (client size + tile px + the grid's inset), turn it into the tile WINDOW that will be FULLY visible ONCE THE MAP HAS CENTRED ON THE PLAYER. once the PERSON is ON-screen (their tile is in the window = 'in range') the gold sits on their OWN tile — the player taps it to walk over + initiate (no separate step); while they're still OFF-screen, delegate the choice of tile to ",
    fn_name("app_g_day_guide_pick"),
    " (pure, testable), which takes the visible tile CLOSEST to them. the window is fully-in-view (ceil / floor-1) AND stops above the bottom bar (barH), so the tile is never clipped by an edge or hidden under the bar. the scroll offset is PREDICTED, not read: the guide is drawn the instant the player lands, while the centring scroll is still animating, so the live scrollLeft is a half-finished number and the window built from it trailed behind the player — which is what made the gold land on a tile NEARBY instead of at the edge of what the player will see. so it recomputes the very number ",
    fn_name("html_scroll_center_coordinates"),
    " is at that moment scrolling to (grid inset + the player's tile centre − half the viewport), clamped the way the browser clamps it at the content edges. measured from where tile (0,0) actually SITS — the grid of tiles is inset inside the scrolled content by a wide margin (441 px at one measurement, the room that lets the map centre on a player standing at the map's edge), so the scroll offset is NOT the first visible tile's x; offsetLeft/offsetTop are read rather than a bounding rect because a rect has the in-flight scroll baked into it. taking scrollLeft for the inset is what made this window land eight tiles right and nine tiles down of the truth, putting the PLAYER outside it, so no tile was ever in view and the gold never appeared. BESPOKE (querySelector / getBoundingClientRect / Math), do NOT auto-canonicalize");
  let component = app_g_div_map_container_get(div_map);
  let container = html_component_element_get(component);
  let img = container.querySelector("img");
  let tile = img.getBoundingClientRect().width;
  let bar = document.getElementById("day-discern-bar");
  let barH = bar ? bar.getBoundingClientRect().height : 0;
  let grid = img.offsetParent;
  let width = container.clientWidth;
  let height = container.clientHeight;
  let scroll_x = grid.offsetLeft + (player.x + 0.5) * tile - width / 2;
  let scroll_y = grid.offsetTop + (player.y + 0.5) * tile - height / 2;
  let scroll_x_max = container.scrollWidth - width;
  let scroll_y_max = container.scrollHeight - height;
  let centred_x = Math.max(0, Math.min(scroll_x, scroll_x_max));
  let centred_y = Math.max(0, Math.min(scroll_y, scroll_y_max));
  let origin_x = subtract(grid.offsetLeft, centred_x);
  let origin_y = subtract(grid.offsetTop, centred_y);
  let minX = divide_ceil(-origin_x, tile);
  let left = divide_floor(width - origin_x, tile);
  let maxX = subtract(left, 1);
  let minY = divide_ceil(-origin_y, tile);
  let top = subtract(height - origin_y, barH);
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
