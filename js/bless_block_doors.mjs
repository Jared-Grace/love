import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_block_door_at } from "./bless_block_door_at.mjs";
import { list_map } from "./list_map.mjs";
export function bless_block_doors(r, x) {
  arguments_assert(arguments, 2);
  let buildings = property_get(r, "buildings");
  let r2 = bless_block_door_at(r, x);
  let door_at = property_get(r2, "door_at");
  let sidewalk = property_get(r2, "sidewalk");
  let alleys = property_get(r2, "alleys");
  let doors = list_map(buildings, door_at);
  let r3 = {
    buildings,
    sidewalk,
    alleys,
    doors,
  };
  return r3;
}
