import { g_coordinates_water } from "./g_coordinates_water.mjs";
import { g_coordinates_walk_distances } from "./g_coordinates_walk_distances.mjs";
import { g_coordinates_orthogonal } from "./g_coordinates_orthogonal.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function app_g_day_water_choose(g, player) {
  "the water the day's believers are walked to: the nearest tile of water the player can actually stand beside, measured in the STEPS it takes to get there rather than in a straight line, because a shore across a bay is near to look at and a long way to walk";
  "a water tile only counts if some land tile next to it can be reached from where the player stands. water walled off behind other water, or on the far side of a map the player cannot cross, is water nobody can be baptized in - so it is never named, and the guide that answers the prayer is never asked to lead somewhere it cannot go";
  "one sweep outward from the player answers for every tile at once, and each water tile is then asked what its own cheapest approach cost. asking the other way round - a path per water tile - is the same question hundreds of times";
  let coordinates = property_get(g, "coordinates");
  let waters = g_coordinates_water(coordinates);
  let distances = g_coordinates_walk_distances(g, [player]);
  let chosen = null;
  let chosen_steps = 0;
  for (let water of waters) {
    let approaches = g_coordinates_orthogonal(water);
    for (let approach of approaches) {
      let key = g_coordinates_key(approach);
      let reachable = property_exists(distances, key);
      if (not(reachable)) {
        continue;
      }
      let steps = property_get(distances, key);
      let nearer = less_than(steps, chosen_steps);
      let better = null_is(chosen) || nearer;
      if (better) {
        chosen = water;
        chosen_steps = steps;
      }
    }
  }
  return chosen;
}
