import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_yard_depth } from "./bless_yard_depth.mjs";
import { bless_yard_front_depth } from "./bless_yard_front_depth.mjs";
import { add } from "./add.mjs";
import { bless_sidewalk_depth } from "./bless_sidewalk_depth.mjs";
import { bless_road_depth } from "./bless_road_depth.mjs";
export function bless_block_sidewalk_depth(r) {
  arguments_assert(arguments, 1);
  ("How wide the block is, is the row's own length and nothing has to be taken off it. It used to be the fronts plus one trailing alley, less that alley again - an arithmetic that only ever made sense because the fronts were counted a stride at a time and the last stride carried a gap nobody wanted.");
  let span = property_get(r, "span");
  let alleys = property_get(r, "alleys");
  let walls = property_get(r, "walls");
  let buildings = property_get(r, "buildings");
  ("Every band of the block is stacked here, in the one place that knows where the one above it stopped. Walking north off the road the order is road, grass, pavement, grass, front door - so the pavement runs down the middle of a green band with a verge on either side of it, and the houses, their doorsteps and the people standing at them are together at the top of the block.");
  ("Each row is the one before it plus how deep that one was, rather than each being measured from the top of the block. Written the second way, a verge that grew a row would leave the pavement drawn across it and the road drawn across that, and every band below the one that changed would be wrong at once.");
  ("The GREEN BAND is given back whole, from the fronts to the kerb, and the pavement is a row inside it rather than a band beside it. Whoever lays the block down lays the grass over the whole band and the pavement over the middle of it, so there is no row anywhere between the two that belongs to neither.");
  let yard_y = property_get(r, "yard_y");
  let block_width = span;
  let yard_depth = bless_yard_depth();
  let yard_front_depth = bless_yard_front_depth();
  let sidewalk_y = add(yard_y, yard_front_depth);
  let sidewalk_depth = bless_sidewalk_depth();
  let road_y = add(yard_y, yard_depth);
  let road_depth = bless_road_depth();
  let r2 = {
    alleys,
    walls,
    buildings,
    yard_y,
    yard_depth,
    sidewalk_y,
    block_width,
    sidewalk_depth,
    road_y,
    road_depth,
  };
  return r2;
}
