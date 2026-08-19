import { arguments_assert } from "./arguments_assert.mjs";
import { bless_block_sidewalk_y } from "./bless_block_sidewalk_y.mjs";
import { property_get } from "./property_get.mjs";
import { multiply } from "./multiply.mjs";
export function bless_block_fronts(x, y) {
  arguments_assert(arguments, 2);
  let r = bless_block_sidewalk_y(x, y);
  let sidewalk_y = property_get(r, "sidewalk_y");
  let gap = property_get(r, "gap");
  let count = property_get(r, "count");
  let stride = property_get(r, "stride");
  let buildings = property_get(r, "buildings");
  let walls = property_get(r, "walls");
  let alleys = property_get(r, "alleys");
  let fronts = multiply(count, stride);
  let r2 = {
    sidewalk_y,
    gap,
    buildings,
    walls,
    alleys,
    fronts,
  };
  return r2;
}
