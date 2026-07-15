import { g_coordinates_land } from "./g_coordinates_land.mjs";
import { g_coordinates_land_index } from "./g_coordinates_land_index.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { g_coordinates_orthogonal } from "./g_coordinates_orthogonal.mjs";
import { list_pop_first } from "./list_pop_first.mjs";
import { set_add } from "./set_add.mjs";
import { set_includes } from "./set_includes.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
export function g_coordinates_land_largest_component(coordinates) {
  let land = g_coordinates_land(coordinates);
  let by_key = g_coordinates_land_index(coordinates);
  let visited = new Set();
  let largest = [];
  for (let seed of land) {
    let seed_key = g_coordinates_key(seed);
    if (set_includes(visited, seed_key)) {
      continue;
    }
    let component = [];
    let queue = [seed_key];
    while (queue.length > 0) {
      let k = list_pop_first(queue);
      if (set_includes(visited, k)) {
        continue;
      }
      set_add(visited, k);
      let c = property_get(by_key, k);
      component.push(c);
      let neighbors = g_coordinates_orthogonal(c);
      for (let n of neighbors) {
        let nk = g_coordinates_key(n);
        let is_land = property_exists(by_key, nk);
        let seen = set_includes(visited, nk);
        if (is_land) {
          if (not(seen)) {
            queue.push(nk);
          }
        }
      }
    }
    if (component.length > largest.length) {
      largest = component;
    }
  }
  return largest;
}
