import { add } from "./add.mjs";
import { bless_road_depth } from "./bless_road_depth.mjs";
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
  ("Where the ROAD begins is read here too, because the road starts exactly where the pavement stops and there is nowhere else that knows both of those. Kept anywhere else it would be the pavement line plus the pavement depth worked out a second time, and the day the pavement grows a row the road would be laid across it.");
  ("Every band of the block is stacked here, in the one place that knows where the one above it stopped. Walking north off the road the order is road, grass, pavement, front door - so the houses, their doorsteps and the people standing at them are all together at the top of the block, and the two wide green rows lie between them and the traffic.");
  ("Each row is the one before it plus how deep that one was, rather than each being measured from the top of the block. Written the second way, a pavement that grew a row would leave the grass drawn across it and the road drawn across that, and every band below the one that changed would be wrong at once.");
  let sidewalk_y = property_get(r, "sidewalk_y");
  let block_width = span;
  let sidewalk_depth = bless_sidewalk_depth();
  let yard_y = add(sidewalk_y, sidewalk_depth);
  let yard_depth = bless_yard_depth();
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
