import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_person_step_tiles } from "./app_g_bless_person_step_tiles.mjs";
import { property_get } from "./property_get.mjs";
import { g_direction } from "./g_direction.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { bless_walk_ways } from "./bless_walk_ways.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_g_bless_person_step_ways_open(world, person) {
  arguments_assert(arguments, 2);
  let r = app_g_bless_person_step_tiles(world, person);
  let tiles = property_get(r, "tiles");
  let choices = property_get(r, "choices");
  function tile_note(neighbor) {
    let tile = property_get(neighbor, "neighbor");
    let direction = g_direction(person, tile);
    property_set(tiles, direction, tile);
  }
  each(choices, tile_note);
  let heading = property_get(person, "heading");
  let ways = bless_walk_ways(heading);
  function way_open_is(option) {
    let is = property_exists(tiles, option);
    return is;
  }
  let ways_open = list_filter(ways, way_open_is);
  let r2 = {
    tiles,
    heading,
    ways_open,
  };
  return r2;
}
