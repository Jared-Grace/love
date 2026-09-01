import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_sidewalk_depth } from "./bless_sidewalk_depth.mjs";
export function bless_block_sidewalk_depth(r) {
  arguments_assert(arguments, 1);
  ("How wide the block is, is the row's own length and nothing has to be taken off it. It used to be the fronts plus one trailing alley, less that alley again - an arithmetic that only ever made sense because the fronts were counted a stride at a time and the last stride carried a gap nobody wanted.");
  let span = property_get(r, "span");
  let alleys = property_get(r, "alleys");
  let walls = property_get(r, "walls");
  let buildings = property_get(r, "buildings");
  let sidewalk_y = property_get(r, "sidewalk_y");
  let block_width = span;
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
