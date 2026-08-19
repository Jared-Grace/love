import { arguments_assert } from "./arguments_assert.mjs";
import { bless_block_fronts } from "./bless_block_fronts.mjs";
import { bless_block_sidewalk_depth } from "./bless_block_sidewalk_depth.mjs";
import { property_get } from "./property_get.mjs";
export function bless_block_walls(x, y) {
  arguments_assert(arguments, 2);
  let r = bless_block_fronts(x, y);
  let r2 = bless_block_sidewalk_depth(r);
  let sidewalk_depth = property_get(r2, "sidewalk_depth");
  let block_width = property_get(r2, "block_width");
  let sidewalk_y = property_get(r2, "sidewalk_y");
  let buildings = property_get(r2, "buildings");
  let walls = property_get(r2, "walls");
  let r3 = {
    r2,
    sidewalk_depth,
    block_width,
    sidewalk_y,
    buildings,
    walls,
  };
  return r3;
}
