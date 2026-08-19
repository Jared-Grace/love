import { arguments_assert } from "./arguments_assert.mjs";
import { bless_block_doors } from "./bless_block_doors.mjs";
import { property_get } from "./property_get.mjs";
export function bless_block_buildings(r, x) {
  arguments_assert(arguments, 2);
  let r2 = bless_block_doors(r, x);
  let doors = property_get(r2, "doors");
  let alleys = property_get(r2, "alleys");
  let sidewalk = property_get(r2, "sidewalk");
  let buildings = property_get(r2, "buildings");
  return {
    doors,
    alleys,
    sidewalk,
    buildings,
  };
}
