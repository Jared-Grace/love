import { bless_block_paths } from "./bless_block_paths.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_block_door_at } from "./bless_block_door_at.mjs";
import { list_map } from "./list_map.mjs";
export function bless_block_doors(r, x) {
  arguments_assert(arguments, 2);
  ("The PATHS are worked out here rather than with the other bands of the block, because a path is the only part of the ground that depends on where the doors turned out to be. Everything else is a rectangle the block knows the moment it knows how wide it is; a path has to wait until every doorstep has been placed.");
  let buildings = property_get(r, "buildings");
  let r2 = bless_block_door_at(r, x);
  let road_y = property_get(r2, "road_y");
  let door_at = property_get(r2, "door_at");
  let sidewalk = property_get(r2, "sidewalk");
  let alleys = property_get(r2, "alleys");
  let yard = property_get(r2, "yard");
  let road = property_get(r2, "road");
  let doors = list_map(buildings, door_at);
  let paths = bless_block_paths(doors, road_y);
  let r3 = {
    buildings,
    sidewalk,
    alleys,
    yard,
    road,
    paths,
    doors,
  };
  return r3;
}
