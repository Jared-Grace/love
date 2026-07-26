import { app_g_day_guide_pick } from "./app_g_day_guide_pick.mjs";
import { app_g_div_map_container_get } from "./app_g_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function app_g_day_guide_tile(g, player, target, div_map) {
  "the GOLD guide tile toward the discerned person — the THIN DOM wrapper: read the live viewport (scroll offset + client size + tile px), turn it into the fully-visible tile WINDOW, and delegate the actual path/geometry to app_g_day_guide_pick (pure, testable). BESPOKE (querySelector / getBoundingClientRect / Math), do NOT auto-canonicalize";
  const container = html_component_element_get(
    app_g_div_map_container_get(div_map),
  );
  const img = container.querySelector("img");
  const tile = img.getBoundingClientRect().width;
  const minX = Math.ceil(container.scrollLeft / tile);
  const maxX =
    Math.floor((container.scrollLeft + container.clientWidth) / tile) - 1;
  const minY = Math.ceil(container.scrollTop / tile);
  const maxY =
    Math.floor((container.scrollTop + container.clientHeight) / tile) - 1;
  return app_g_day_guide_pick(g, player, target, minX, maxX, minY, maxY);
}
