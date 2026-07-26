import { g_coordinates_neighbors_walkable_get } from "./g_coordinates_neighbors_walkable_get.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
import { app_g_div_map_container_get } from "./app_g_div_map_container_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function app_g_day_guide_tile(g, player, target, div_map) {
  "the GOLD guide tile toward the discerned person. null when the target is already FULLY ON-SCREEN (tap its reticle to go). otherwise the FARTHEST tile on the shortest land path toward the target that is still fully in view — so each tap makes maximal visible progress and a far person takes several hops (each a slice). BESPOKE: reads the live viewport directly (scroll offset + client size + tile px) so visibility is accurate even at map edges where the player is not centred; do NOT auto-canonicalize this file";
  const container = html_component_element_get(
    app_g_div_map_container_get(div_map),
  );
  const img = container.querySelector("img");
  const tile = img.getBoundingClientRect().width;
  const left = container.scrollLeft;
  const top = container.scrollTop;
  const right = left + container.clientWidth;
  const bottom = top + container.clientHeight;
  const inView = (c) =>
    c.x * tile >= left &&
    (c.x + 1) * tile <= right &&
    c.y * tile >= top &&
    (c.y + 1) * tile <= bottom;
  if (inView(target)) {
    return null;
  }
  const neighborsGet = g_coordinates_neighbors_walkable_get(g);
  const neighbors = neighborsGet(target);
  if (neighbors.length === 0) {
    return null;
  }
  neighbors.sort(
    (a, b) => g_distance_taxicab(a, player) - g_distance_taxicab(b, player),
  );
  const destination = neighbors[0];
  const path = g_coordinates_path_shortest(g, player, destination);
  let gold = null;
  for (const c of path) {
    if (inView(c)) {
      gold = c;
    }
  }
  return gold;
}
