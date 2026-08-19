import { arguments_assert } from "./arguments_assert.mjs";
import { bless_block_alleys } from "./bless_block_alleys.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
export function bless_block_sidewalk_y(x, y) {
  arguments_assert(arguments, 2);
  let r = bless_block_alleys(x, y);
  let alleys = property_get(r, "alleys");
  let walls = property_get(r, "walls");
  let buildings = property_get(r, "buildings");
  let stride = property_get(r, "stride");
  let count = property_get(r, "count");
  let gap = property_get(r, "gap");
  let depth = property_get(r, "depth");
  let sidewalk_y = add(y, depth);
  let r2 = {
    alleys,
    walls,
    buildings,
    stride,
    count,
    gap,
    sidewalk_y,
  };
  return r2;
}
