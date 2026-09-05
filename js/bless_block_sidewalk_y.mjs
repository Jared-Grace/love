import { bless_yard_depth } from "./bless_yard_depth.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bless_block_alleys } from "./bless_block_alleys.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
export function bless_block_sidewalk_y(x, y, block) {
  arguments_assert(arguments, 3);
  let r = bless_block_alleys(x, y, block);
  let alleys = property_get(r, "alleys");
  let walls = property_get(r, "walls");
  let buildings = property_get(r, "buildings");
  let span = property_get(r, "span");
  let count = property_get(r, "count");
  let depth = property_get(r, "depth");
  ("Where the YARD begins and where the pavement begins, which are no longer the same row. The buildings end and a strip of grass runs the whole length of the street in front of them, and the pavement starts on the far side of that.");
  ("The yard is between them rather than beyond the pavement because that is where a front garden is: a door opens onto its own ground first and onto the public path second. Put the other way round, every household would step straight out onto a pavement and the grass would be a verge in the middle of the road.");
  let yard_y = add(y, depth);
  let yard_depth = bless_yard_depth();
  let sidewalk_y = add(yard_y, yard_depth);
  let r2 = {
    alleys,
    walls,
    buildings,
    span,
    count,
    yard_y,
    yard_depth,
    sidewalk_y,
  };
  return r2;
}
