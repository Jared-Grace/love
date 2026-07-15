import { g_coordinates } from "./g_coordinates.mjs";
import { g_coordinates_land } from "./g_coordinates_land.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { g_coordinates_orthogonal } from "./g_coordinates_orthogonal.mjs";
import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_pop_first } from "./list_pop_first.mjs";
import { set_add } from "./set_add.mjs";
import { set_includes } from "./set_includes.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
export function g_rows_land_connected_is(rows) {
  let coordinates = g_coordinates(rows);
  let land = g_coordinates_land(coordinates);
  let empty = list_empty_is(land);
  if (empty) {
    return true;
  }
  let land_keys = new Set(list_map(land, g_coordinates_key));
  let visited = new Set();
  let queue = [list_first(land)];
  while (queue.length > 0) {
    let c = list_pop_first(queue);
    let k = g_coordinates_key(c);
    let seen = set_includes(visited, k);
    if (seen) {
      continue;
    }
    set_add(visited, k);
    let neighbors = g_coordinates_orthogonal(c);
    for (let n of neighbors) {
      let nk = g_coordinates_key(n);
      let is_land = set_includes(land_keys, nk);
      let is_seen = set_includes(visited, nk);
      if (is_land) {
        if (not(is_seen)) {
          queue.push(n);
        }
      }
    }
  }
  let reached = visited.size;
  let total = list_size(land);
  let connected = equal(reached, total);
  return connected;
}
