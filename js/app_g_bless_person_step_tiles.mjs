import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { g_coordinates_neighbors_walkable_get } from "./g_coordinates_neighbors_walkable_get.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { bless_home_reaches } from "./bless_home_reaches.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { and } from "./and.mjs";
export function app_g_bless_person_step_tiles(world, person) {
  arguments_assert(arguments, 2);
  let player = property_get(world, "player");
  let taken = g_coordinates_key(player);
  let neighbors_get = g_coordinates_neighbors_walkable_get(world);
  let neighbors = neighbors_get(person);
  function open_is(neighbor) {
    let tile = property_get(neighbor, "neighbor");
    let key = g_coordinates_key(tile);
    let free = equal_not(key, taken);
    return free;
  }
  let open = list_filter(neighbors, open_is);
  let home = property_get(person, "home");
  let roam = property_get(person, "roam");
  function home_is(neighbor) {
    let tile = property_get(neighbor, "neighbor");
    let close = bless_home_reaches(home, roam, tile);
    return close;
  }
  let near = list_filter(open, home_is);
  let nowhere = list_empty_is(near);
  let inside = bless_home_reaches(home, roam, person);
  let strayed = not(inside);
  let lost = and(nowhere, strayed);
  let choices = near;
  if (lost) {
    choices = open;
  }
  let tiles = {};
  let r = {
    choices,
    tiles,
  };
  return r;
}
