import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { g_water } from "./g_water.mjs";
export function g_map_water_wall_pond_new(wall_row, pond_wanted) {
  arguments_assert(arguments, 2);
  ("Builds a small square map of grass with water put in it in known places, so that a check can ask a question about water and already know what the honest answer is.");
  ("Twelve tiles across and twelve down. A row number lays a wall of water straight across the map at that height; any number no row can have, such as minus one, leaves the map without a wall.");
  ("The pond, when it is wanted, is two things at once and that is the point of it: one lone tile of water partway up the middle, which somebody can walk up to and stand beside, and a block of it filling one corner, whose own middle has nothing but more water on every side. So one map holds both water somebody can reach and water nobody can, and a chooser that cannot tell them apart is caught by the same map that a chooser which can passes.");
  ("No people are put on it. What is being asked of these maps is about ground and water, and a map with somebody standing on it would answer a wider question than the one being put.");
  let size = 12;
  let coordinates = [];
  for (let y = 0; less_than(y, size); y++) {
    for (let x = 0; less_than(x, size); x++) {
      let wall_here = equal(y, wall_row);
      let pond_here = pond_wanted && equal(x, 6) && equal(y, 3);
      let block_here = pond_wanted && less_than(x, 3) && less_than(y, 3);
      let water_here = wall_here || pond_here || block_here;
      let item = water_here ? g_water() : "grass";
      coordinates.push({
        x,
        y,
        item,
      });
    }
  }
  let g = {
    coordinates,
    npcs: [],
  };
  return g;
}
