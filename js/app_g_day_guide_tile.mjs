import { app_g_day_guide_pick } from "./app_g_day_guide_pick.mjs";
import { app_g_div_map_container_get } from "./app_g_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function app_g_day_guide_tile(g, player, target, div_map) {
  "the GOLD guide tile toward the discerned person — the THIN DOM wrapper: read the live viewport (scroll offset + client size + tile px), turn it into the tile WINDOW, and delegate the path/geometry to app_g_day_guide_pick (pure, testable). the window uses PARTIAL visibility (floor/ceil, not fully-in-view) — a MOVABLE tile may spill past an edge, that's fine, it just needs to be reachable/tappable — but still stays above the bottom bar (barH) so it isn't hidden under it. BESPOKE (querySelector / getBoundingClientRect / Math), do NOT auto-canonicalize";
  const container = html_component_element_get(
    app_g_div_map_container_get(div_map),
  );
  const img = container.querySelector("img");
  const tile = img.getBoundingClientRect().width;
  const bar = document.getElementById("day-discern-bar");
  const barH = bar ? bar.getBoundingClientRect().height : 0;
  const minX = Math.floor(container.scrollLeft / tile);
  const maxX =
    Math.ceil((container.scrollLeft + container.clientWidth) / tile) - 1;
  const minY = Math.floor(container.scrollTop / tile);
  const maxY =
    Math.ceil((container.scrollTop + container.clientHeight - barH) / tile) - 1;
  return app_g_day_guide_pick(g, player, target, minX, maxX, minY, maxY);
}
