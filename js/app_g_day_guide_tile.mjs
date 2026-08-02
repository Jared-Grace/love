import { ceil } from "./ceil.mjs";
import { floor } from "./floor.mjs";
import { app_g_day_guide_pick } from "./app_g_day_guide_pick.mjs";
import { app_g_div_map_container_get } from "./app_g_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function app_g_day_guide_tile(g, player, target, div_map) {
  "the GOLD guide tile toward the discerned person — the THIN DOM wrapper: read the live viewport (scroll offset + client size + tile px), turn it into the FULLY-visible tile WINDOW. once the PERSON is ON-screen (their tile is in the window = 'in range') the gold sits on their OWN tile — the player taps it to walk over + initiate (no separate step); while they're still OFF-screen, delegate the path/geometry to app_g_day_guide_pick (pure, testable) to lead hop-by-hop. the window is fully-in-view (ceil / floor-1) AND stops above the bottom bar (barH), so the tile is never clipped by an edge or hidden under the bar. BESPOKE (querySelector / getBoundingClientRect / Math), do NOT auto-canonicalize";
  const container = html_component_element_get(
    app_g_div_map_container_get(div_map),
  );
  const img = container.querySelector("img");
  const tile = img.getBoundingClientRect().width;
  const bar = document.getElementById("day-discern-bar");
  const barH = bar ? bar.getBoundingClientRect().height : 0;
  const minX = ceil(container.scrollLeft / tile);
  const maxX = floor((container.scrollLeft + container.clientWidth) / tile) - 1;
  const minY = ceil(container.scrollTop / tile);
  const maxY =
    floor((container.scrollTop + container.clientHeight - barH) / tile) - 1;
  const targetInWindow =
    target.x >= minX &&
    target.x <= maxX &&
    target.y >= minY &&
    target.y <= maxY;
  if (targetInWindow) {
    return {
      x: target.x,
      y: target.y,
    };
  }
  return app_g_day_guide_pick(g, player, target, minX, maxX, minY, maxY);
}
