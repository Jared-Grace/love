import { bless_person_hold_tile_allowed } from "./bless_person_hold_tile_allowed.mjs";
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
  let ways_there = list_filter(ways, way_open_is);
  ("A way out of a square somebody is being HELD in is refused, on top of every other");
  ("reason a way can be refused. Being looked at is a fact about a person like being near");
  ("their own door is, and both are asked here, so the walking code has exactly one place");
  ("where a square is or is not available and nothing downstream has to know why.");
  ("Refusing the way rather than pinning the person is what keeps a held crowd alive. They");
  ("still walk, still step round each other, still turn back when they reach the edge -");
  ("they simply do all of it inside the shape the player is looking at, which is what a few");
  ("people waiting on a corner look like.");
  function way_held_is(option) {
    let tile = property_get(tiles, option);
    let allowed = bless_person_hold_tile_allowed(person, tile);
    return allowed;
  }
  let ways_open = list_filter(ways_there, way_held_is);
  let r2 = {
    tiles,
    heading,
    ways_open,
  };
  return r2;
}
