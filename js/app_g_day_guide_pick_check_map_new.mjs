import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { g_water } from "./g_water.mjs";
export function app_g_day_guide_pick_check_map_new(
  water_row,
  water_gap_x,
  target,
) {
  arguments_assert(arguments, 3);
  let size = 12;
  let coordinates = [];
  for (let y = 0; less_than(y, size); y++) {
    for (let x = 0; less_than(x, size); x++) {
      let water_here = equal(y, water_row) && not_equal(x, water_gap_x);
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
    npcs: [target],
  };
  return g;
}
