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
  ("Where the PAVEMENT begins - the first row south of the fronts, with nothing between it and them. A door opens straight onto it, so a doorstep and the pavement are the same row for a house standing flush in its slot.");
  ("There was a row of grass here for a few hours and it has gone below the pavement instead. Seen from the front and slightly above, a band drawn between the houses and the crowd holds the player away from the doors they came to look at; the same band drawn on the far side holds the ROAD away from them, which is what it was for.");
  let sidewalk_y = add(y, depth);
  let r2 = {
    alleys,
    walls,
    buildings,
    span,
    count,
    sidewalk_y,
  };
  return r2;
}
