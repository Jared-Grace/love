import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { bless_sidewalk_depth } from "./bless_sidewalk_depth.mjs";
export function bless_block_sidewalk_depth(r) {
  arguments_assert(arguments, 1);
  let fronts = property_get(r, "fronts");
  let alleys = property_get(r, "alleys");
  let walls = property_get(r, "walls");
  let buildings = property_get(r, "buildings");
  let gap = property_get(r, "gap");
  let sidewalk_y = property_get(r, "sidewalk_y");
  let block_width = subtract(fronts, gap);
  let sidewalk_depth = bless_sidewalk_depth();
  let r2 = {
    alleys,
    walls,
    buildings,
    sidewalk_y,
    block_width,
    sidewalk_depth,
  };
  return r2;
}
