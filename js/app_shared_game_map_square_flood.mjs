import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_set_nested } from "./list_set_nested.mjs";
import { app_shared_game_map_square_key } from "./app_shared_game_map_square_key.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { or } from "./or.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_game_map_square_neighbours } from "./app_shared_game_map_square_neighbours.mjs";
import { each } from "./each.mjs";
export function app_shared_game_map_square_flood({
  spot,
  rows,
  item_water,
  width,
  taken,
  height,
  edge_keys,
  edge,
}) {
  "Turns one square to water and queues every dry square beside it that is not queued already, so the edge of the water is kept as it grows rather than looked for again at every step.";
  arguments_assert(arguments, 1);
  let x = property_get(spot, "x");
  let y = property_get(spot, "y");
  list_set_nested(rows, y, x, item_water);
  let v = app_shared_game_map_square_key(x, y, width);
  taken.add(v);
  function neighbour_queue(step) {
    let step_x = property_get(step, "x");
    let step_y = property_get(step, "y");
    let west_of = less_than(step_x, 0);
    let east_of = greater_than_equal(step_x, width);
    let north_of = less_than(step_y, 0);
    let south_of = greater_than_equal(step_y, height);
    let left = or(west_of, east_of);
    let right = or(north_of, south_of);
    let outside = or(left, right);
    if (outside) {
      return;
    }
    let key = app_shared_game_map_square_key(step_x, step_y, width);
    let wet = taken.has(key);
    let queued = edge_keys.has(key);
    let known = or(wet, queued);
    if (known) {
      return;
    }
    edge_keys.add(key);
    list_add(edge, step);
  }
  let around = app_shared_game_map_square_neighbours(x, y);
  each(around, neighbour_queue);
}
